// type only import 
import type { Square, Rectangle} from '../Shapes_import_type';
import { drawShape } from '../Shapes_import_type';
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