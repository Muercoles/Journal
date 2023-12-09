import React from 'react';
import { View } from 'react-native';
import Svg, { Rect, Path, Polygon } from 'react-native-svg';

const BookShel = () => (
    <View>
        <Svg height="200" width="200" viewBox="0 0 58 58">
            <Rect x="9" y="1" fill="#553323" stroke="#774836" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" width="40" height="54" />
            <Rect x="11" y="55" fill="#382016" width="7" height="3" />
            <Rect x="40" y="55" fill="#382016" width="7" height="3" />
            <Rect x="9" y="36" fill="#875A48" stroke="#774836" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" width="20" height="19" />
            <Rect x="29" y="36" fill="#875A48" stroke="#774836" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" width="20" height="19" />
            <Rect x="9" y="13" fill="#553323" stroke="#774836" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" width="40" height="12" />
            <Path fill="#F0D64E" d="M34,45c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1s1,0.447,1,1v3C35,44.553,34.552,45,34,45z" />
            <Path fill="#F0D64E" d="M24,45c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1s1,0.447,1,1v3C25,44.553,24.552,45,24,45z" />
            <Rect x="43" y="3" fill="#61B872" width="3" height="9" />
            <Rect x="40" y="3" fill="#3D6F44" width="3" height="9" />
            <Rect x="37" y="3" fill="#26B99A" width="3" height="9" />
            <Rect x="34" y="3" fill="#1A9172" width="3" height="9" />
            <Rect x="45" y="15" fill="#ED8A19" width="3" height="9" />
            <Rect x="42" y="15" fill="#EBBA16" width="3" height="9" />
            <Rect x="39" y="15" fill="#EFCE4A" width="3" height="9" />
            <Rect x="36" y="15" fill="#88C057" width="3" height="9" />
            <Rect x="33" y="15" fill="#A4D873" width="3" height="9" />
            <Rect x="30" y="15" fill="#F2ECBF" width="3" height="9" />
            <Rect x="13" y="21" fill="#B02721" width="9" height="3" />
            <Rect x="13" y="18" fill="#DD352E" width="9" height="3" />
            <Rect x="37" y="32" fill="#75348B" width="9" height="3" />
            <Rect x="37" y="29" fill="#814494" width="9" height="3" />
            <Polygon fill="#88C057" points="31,12 28,12 31,4 34,4" />
        </Svg>
    </View>
);

export default BookShel;
