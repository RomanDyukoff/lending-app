'use client';

import { Map, YMaps } from '@pbe/react-yandex-maps';

export const YaMap = (): JSX.Element => {
    return (
        <div>
            <YMaps>
                <Map defaultState={{ center: [55.184218, 30.202877], zoom: 9 }} />
            </YMaps>
        </div>
    );
};
