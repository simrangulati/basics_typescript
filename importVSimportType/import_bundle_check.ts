import { Square, Rectangle, drawShape } from '../Shapes_import';

const mySquare: Square = {
    type: 'square',
    side: 5
};

const myRectangle: Rectangle = {
    type: 'rectangle',
    length: 10,
    breadth: 5
};

drawShape(mySquare);
drawShape(myRectangle);