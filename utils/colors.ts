export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#004eff',
  fillColor: '#0088bb'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#004eff',
  fillColor: '#0088bb'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#004eff',
  fillColor: '#0088bb'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleB]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
