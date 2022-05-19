import { v4 as uuidv4 } from 'uuid';

const generateKey = (pre) => `${pre}_${uuidv4()}`;

export default generateKey;
