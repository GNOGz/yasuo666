 
interface HexagonProps {
    size?: number; // Size of the hexagon
    stroke?: string; // Border color
    fill?: string; // Fill color
  }
  
  const Hexagon: React.FC<HexagonProps> = ({ size = 50, stroke = "black", fill = "lightblue" }) => {
    // Function to generate hexagon points
    const getHexagonPoints = (size: number): string => {
      const points = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i; // 60-degree angles
        const x = size * Math.cos(angle);
        const y = size * Math.sin(angle);
        points.push(`${x},${y}`);
      }
      return points.join(" ");
    };
  
    return (
      <svg width={size * 2} height={size * 2} viewBox={`-${size} -${size} ${size * 2} ${size * 2}`}>
        <polygon points={getHexagonPoints(size)} stroke={stroke} strokeWidth="2" fill={fill} />
      </svg>
    );
  };
  
  export default Hexagon;
  