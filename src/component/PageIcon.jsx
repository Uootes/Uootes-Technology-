import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import "../App.css";

const PageIcon = ({ color}) => {
    return (
        <svg className="page-icon" fill={color} xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 8000 8000">
            <path class="fil0" d="M3208.29 3547.89l-70.86 30.03c-35.85,15.19 -58.32,-25.76 -118.83,-66.58 -23.44,-15.81 -58.04,86.19 -131.57,16.36 -46.93,-44.56 -132.37,-103.41 -158.93,-85.32 -37.37,25.44 -36.57,67.81 -25.93,111.75l44.41 183.35c64.2,-41.24 140.58,-65.15 222.55,-65.15 79.84,0 154.37,22.71 217.51,62l55.26 -169.23c2.53,-7.76 -4.28,-15.16 -11.54,-18.88 -7.27,-3.72 -14.56,-1.5 -22.07,1.68z"/>
            <path class="fil0" d="M2969.13 3736.27c11.79,0 23.46,0.52 35,1.49l-57.14 157.21 30.81 -22.43 15.76 40.3 48.44 -133.27 36.43 94.9 15.76 -40.3 30.81 22.43 -39.81 -103.73c171.23,50.12 296.3,208.32 296.3,395.75 0,227.74 -184.62,412.36 -412.35,412.36 -227.74,0 -412.35,-184.62 -412.35,-412.36 0,-227.74 184.62,-412.35 412.35,-412.35zm-92.81 508.13c0,30.23 8.57,54.11 25.7,71.65 17.13,17.54 40,26.3 68.63,26.3 27.81,0 49.98,-8.67 66.5,-26 16.52,-17.33 24.79,-41.31 24.79,-71.95l0 -225.67c0,-17.73 9.61,-32.91 25.63,-40.49 16.02,-7.58 33.86,-5.39 47.56,5.85 13.61,11.16 22.33,28.13 22.33,47.03l0 213.28c0,37.07 -7.57,69.23 -22.68,96.44 -15.11,27.2 -36.78,48.17 -64.99,62.88 -28.22,14.71 -61.47,22.07 -99.76,22.07 -38.29,0 -71.74,-7.36 -100.37,-22.07 -28.62,-14.71 -50.58,-35.67 -65.9,-62.88 -15.31,-27.21 -22.98,-59.35 -22.98,-96.44l0 -200.08c0,-17.73 9.61,-32.91 25.63,-40.49 16.02,-7.59 33.85,-5.39 47.56,5.85 13.62,11.17 22.33,28.11 22.33,47.03l0 187.69z"/>
        </svg>
    );
};

export default PageIcon;