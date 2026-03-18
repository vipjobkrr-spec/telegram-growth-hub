import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
}

export default function RotatingEarth({ width = 800, height = 600, className = "" }: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    const containerWidth = Math.min(width, window.innerWidth - 40)
    const containerHeight = Math.min(height, window.innerHeight - 100)
    const radius = Math.min(containerWidth, containerHeight) / 2.5

    const dpr = window.devicePixelRatio || 1
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`
    context.scale(dpr, dpr)

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90)

    const path = d3.geoPath().projection(projection).context(context)

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point
      let inside = false
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside
        }
      }
      return inside
    }

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry
      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates
        if (!pointInPolygon(point, coordinates[0])) return false
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false
        }
        return true
      } else if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) { inHole = true; break }
            }
            if (!inHole) return true
          }
        }
        return false
      }
      return false
    }

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = []
      const bounds = d3.geoBounds(feature)
      const [[minLng, minLat], [maxLng, maxLat]] = bounds
      const stepSize = dotSpacing * 0.08
      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat]
          if (pointInFeature(point, feature)) dots.push(point)
        }
      }
      return dots
    }

    interface DotData { lng: number; lat: number; visible: boolean }
    const allDots: DotData[] = []
    let landFeatures: any

    const cities: { name: string; lng: number; lat: number }[] = [
      { name: "Москва", lng: 37.6173, lat: 55.7558 },
      { name: "Нью-Йорк", lng: -74.006, lat: 40.7128 },
      { name: "Лондон", lng: -0.1276, lat: 51.5074 },
      { name: "Токио", lng: 139.6917, lat: 35.6895 },
      { name: "Дубай", lng: 55.2708, lat: 25.2048 },
      { name: "Сингапур", lng: 103.8198, lat: 1.3521 },
      { name: "Сан-Паулу", lng: -46.6333, lat: -23.5505 },
      { name: "Стамбул", lng: 28.9784, lat: 41.0082 },
    ]

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight)
      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius

      // Globe background
      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
      context.fillStyle = "rgba(0,0,0,0.3)"
      context.fill()
      context.strokeStyle = "hsl(199, 74%, 51%)"
      context.lineWidth = 1.5 * scaleFactor
      context.stroke()

      if (landFeatures) {
        // Graticule
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = "hsl(199, 74%, 51%)"
        context.lineWidth = 0.5 * scaleFactor
        context.globalAlpha = 0.15
        context.stroke()
        context.globalAlpha = 1

        // Land outlines
        context.beginPath()
        landFeatures.features.forEach((feature: any) => { path(feature) })
        context.strokeStyle = "hsl(199, 74%, 51%)"
        context.lineWidth = 0.8 * scaleFactor
        context.globalAlpha = 0.4
        context.stroke()
        context.globalAlpha = 1

        // Dots
        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat])
          if (projected && projected[0] >= 0 && projected[0] <= containerWidth && projected[1] >= 0 && projected[1] <= containerHeight) {
            context.beginPath()
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI)
            context.fillStyle = "hsl(199, 74%, 60%)"
            context.fill()
          }
        })

        // City markers
        const rotation = projection.rotate()
        cities.forEach((city) => {
          const geoAngle = d3.geoDistance([-rotation[0], -rotation[1]], [city.lng, city.lat])
          if (geoAngle > Math.PI / 2) return // behind globe

          const projected = projection([city.lng, city.lat])
          if (!projected) return

          // Pulsing dot
          context.beginPath()
          context.arc(projected[0], projected[1], 4 * scaleFactor, 0, 2 * Math.PI)
          context.fillStyle = "hsl(199, 74%, 60%)"
          context.globalAlpha = 0.3
          context.fill()
          context.globalAlpha = 1

          context.beginPath()
          context.arc(projected[0], projected[1], 2.5 * scaleFactor, 0, 2 * Math.PI)
          context.fillStyle = "hsl(199, 74%, 70%)"
          context.fill()

          // Label
          context.font = `${Math.round(9 * scaleFactor)}px sans-serif`
          context.fillStyle = "hsl(199, 50%, 80%)"
          context.globalAlpha = 0.9
          context.fillText(city.name, projected[0] + 6 * scaleFactor, projected[1] - 6 * scaleFactor)
          context.globalAlpha = 1
        })
      }
    }

    const loadWorldData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json"
        )
        if (!response.ok) throw new Error("Failed to load land data")
        landFeatures = await response.json()
        landFeatures.features.forEach((feature: any) => {
          const dots = generateDotsInPolygon(feature, 16)
          dots.forEach(([lng, lat]) => { allDots.push({ lng, lat, visible: true }) })
        })
        render()
        setIsLoading(false)
      } catch (err) {
        setError("Failed to load map data")
        setIsLoading(false)
      }
    }

    const rotation: [number, number] = [0, 0]
    let autoRotate = true
    const rotationSpeed = 0.3

    const rotate = () => {
      if (autoRotate) {
        rotation[0] += rotationSpeed
        projection.rotate(rotation as any)
        render()
      }
    }

    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
      const startRotation = [...rotation]

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.5
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY
        rotation[0] = startRotation[0] + dx * sensitivity
        rotation[1] = startRotation[1] - dy * sensitivity
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]))
        projection.rotate(rotation as any)
        render()
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        setTimeout(() => { autoRotate = true }, 10)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      const sf = event.deltaY > 0 ? 0.9 : 1.1
      const newRadius = Math.max(radius * 0.5, Math.min(radius * 3, projection.scale() * sf))
      projection.scale(newRadius)
      render()
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("wheel", handleWheel, { passive: false })
    loadWorldData()

    return () => {
      rotationTimer.stop()
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("wheel", handleWheel)
    }
  }, [width, height])

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    )
  }

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
      <canvas ref={canvasRef} className="cursor-grab active:cursor-grabbing" />
    </div>
  )
}
