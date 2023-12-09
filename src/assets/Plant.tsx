import React from 'react';
import { Svg, Path, Polygon } from 'react-native-svg';

const Plant = () => {
    return (
        <Svg height="100" width="100" viewBox="0 0 512 512">
            <Path fill="#00DA6C" d="M170.307,246.467C152.387,109.933,62.787,84.333,62.787,84.333c95.573-40.107,166.4-16.213,177.493,162.133H170.307z" />
            <Path fill="#00AD55" d="M243.693,246.467h-3.413c-4.267-73.387-19.627-121.173-41.813-148.48C205.293,37.4,265.88,7.533,310.253,7.533c-16.213,16.213-40.96,41.813-42.667,128.853C255.64,161.987,247.107,197.827,243.693,246.467" />
            <Path fill="#00DA6C" d="M300.867,246.467h-57.173c18.773-271.36,202.24-138.24,203.093-136.533C371.693,109.933,319.64,179.907,300.867,246.467" />
            <Polygon fill="#FFE100" points="357.187,468.333 387.053,289.133 96.92,289.133 126.787,468.333" />
            <Polygon fill="#FFFFFF" points="96.92,289.133 126.787,468.333 147.267,468.333 122.52,289.133" />
            <Polygon fill="#FFA800" points="361.453,289.133 336.707,468.333 357.187,468.333 387.053,289.133" />
            <Polygon fill="#FFE100" points="378.52,502.467 105.453,502.467 96.92,468.333 387.053,468.333" />
            <Polygon fill="#FFFFFF" points="96.92,468.333 105.453,502.467 129.347,502.467 122.52,468.333" />
            <Polygon fill="#FFA800" points="361.453,468.333 354.627,502.467 378.52,502.467 387.053,468.333" />
            <Polygon fill="#FFE100" points="88.387,289.133 395.587,289.133 395.587,246.467 88.387,246.467" />
            <Polygon fill="#FFFFFF" points="62.787,289.133 88.387,289.133 88.387,246.467 62.787,246.467" />
            <Polygon fill="#FFA800" points="395.587,289.133 421.187,289.133 421.187,246.467 395.587,246.467" />
            <Path d="M421.187,297.667h-358.4c-5.12,0-8.533-3.413-8.533-8.533v-42.667c0-5.12,3.413-8.533,8.533-8.533h358.4c5.12,0,8.533,3.413,8.533,8.533v42.667C429.72,294.253,426.307,297.667,421.187,297.667z M71.32,280.6h341.333V255H71.32V280.6z" />
            <Path d="M378.52,511H105.453c-4.267,0-7.68-2.56-8.533-6.827l-8.533-34.133c-0.853-2.56,0-5.12,1.707-7.68c1.707-1.707,4.267-2.56,6.827-2.56h290.133c2.56,0,5.12,0.853,6.827,3.413c1.707,1.707,2.56,5.12,1.707,7.68l-8.533,34.133C386.2,508.44,382.787,511,378.52,511z M112.28,493.933h259.413l4.267-17.067H108.013L112.28,493.933z" />
            <Path d="M357.187,476.867h-230.4c-4.267,0-7.68-3.413-8.533-6.827l-29.867-179.2c0-2.56,0-5.12,1.707-6.827s4.267-3.413,6.827-3.413h290.133c2.56,0,5.12,0.853,6.827,3.413c1.707,1.707,2.56,4.267,1.707,6.827l-29.867,179.2C364.867,473.453,361.453,476.867,357.187,476.867z M133.613,459.8h215.893l27.307-162.133H107.16L133.613,459.8z" />
            <Path d="M165.187,348.867h-59.733c-5.12,0-8.533-3.413-8.533-8.533c0-5.12,3.413-8.533,8.533-8.533h59.733c5.12,0,8.533,3.413,8.533,8.533C173.72,345.453,170.307,348.867,165.187,348.867z" />
            <Path d="M207.853,348.867h-8.533c-5.12,0-8.533-3.413-8.533-8.533c0-5.12,3.413-8.533,8.533-8.533h8.533c5.12,0,8.533,3.413,8.533,8.533C216.387,345.453,212.973,348.867,207.853,348.867z" />
            <Path d="M250.52,417.133h-8.533c-5.12,0-8.533-3.413-8.533-8.533c0-5.12,3.413-8.533,8.533-8.533h8.533c5.12,0,8.533,3.413,8.533,8.533C259.053,413.72,255.64,417.133,250.52,417.133z" />
            <Path d="M367.427,417.133h-82.773c-5.12,0-8.533-3.413-8.533-8.533c0-5.12,3.413-8.533,8.533-8.533h82.773c5.12,0,8.533,3.413,8.533,8.533C375.96,413.72,371.693,417.133,367.427,417.133z" />
            <Path d="M240.28,255h-69.973c-4.267,0-7.68-3.413-8.533-7.68C144.707,118.467,61.08,92.867,60.227,92.867c-3.413-1.707-5.973-4.267-5.973-7.68s1.707-6.827,5.12-8.533c52.053-22.187,92.16-23.893,122.88-4.267c39.253,24.747,61.44,81.067,66.56,174.08c0,2.56-0.853,4.267-2.56,5.973C244.547,254.147,242.84,255,240.28,255z M177.987,237.933h53.76c-5.973-80.213-25.6-131.413-58.027-151.04c-22.187-13.653-51.2-14.507-87.893-1.707C113.133,100.547,162.627,141.507,177.987,237.933z" />
            <Path d="M243.693,255h-3.413c-4.267,0-8.533-3.413-8.533-7.68c-4.267-68.267-17.92-116.053-40.107-143.36c-1.707-1.707-1.707-4.267-1.707-5.973C197.613,29.72,265.027-1,310.253-1c3.413,0,6.827,1.707,7.68,5.12c1.707,3.413,0.853,6.827-1.707,9.387c-15.36,15.36-38.4,38.4-40.107,122.88c0,0.853,0,2.56-0.853,3.413c-11.947,26.453-20.48,62.293-23.04,106.667C252.227,251.587,247.96,255,243.693,255z M207.853,95.427c16.213,21.333,28.16,52.053,34.987,92.16c4.267-20.48,9.387-38.4,16.213-53.76c1.707-64.853,16.213-97.28,29.867-116.053C253.933,25.453,214.68,50.2,207.853,95.427z" />
            <Path d="M300.867,255h-57.173c-2.56,0-4.267-0.853-5.973-2.56c-1.707-1.707-2.56-4.267-2.56-6.827c7.68-103.253,39.253-162.987,94.72-175.787c58.027-13.653,121.173,29.867,124.587,35.84c1.707,2.56,1.707,5.973,0,8.533c-1.707,2.56-4.267,4.267-7.68,4.267c-69.973,0-119.467,65.707-137.387,130.56C307.693,252.44,304.28,255,300.867,255z M253.08,237.933h41.813c18.773-60.587,64-121.173,126.293-133.973c-23.893-12.8-64-28.16-99.84-13.653C282.947,106.52,259.907,156.867,253.08,237.933z" />
        </Svg>
    );
};


export default Plant;