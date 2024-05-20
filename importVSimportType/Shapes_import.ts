// Shapes.ts

export interface Square {
    type: 'square';
    side: number;
  }
  
  export interface Rectangle {
    type: 'rectangle';
    length: number;
    breadth: number;
  }
  
  export function drawShape(shape: Square| Rectangle) {
    console.log("drawFunction");
  }