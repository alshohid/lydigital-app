 const calculateSvgArea = (pathData) => {
      // Extract coordinates
      const coordinates = pathData.match(/-?[\d.]+/g).map(Number);
      const points = [];
      for (let i = 0; i < coordinates.length; i += 2) {
        points.push([coordinates[i], coordinates[i + 1]]);
      }

      // Shoelace formula to calculate the area
      let area = 0;
      for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[(i + 1) % points.length];
        area += x1 * y2 - y1 * x2;
      }
      area = Math.abs(area) / 2;
      return area;
    };
    export default calculateSvgArea;