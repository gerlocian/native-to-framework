import { useEffect, useRef } from 'react';
import { HelloWorldComponent } from '@ntf/native';

HelloWorldComponent.register();

export function HelloWorld() {
    const customRef = useRef(null);

    useEffect(() => {
        const callback = console.log.bind(this);

        if (customRef?.current?.addEventListener) {
            customRef.current.addEventListener('customEvent', callback);
            return () => customRef.current.removeEventListener('customEvent', callback);
        }
    }, []);

    return (
        <><ntf-native-helloworld ref={customRef}></ntf-native-helloworld></>
    );
}