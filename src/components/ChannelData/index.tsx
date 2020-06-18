import React, { useRef, useEffect} from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
           <Messages ref={messagesRef}>
               {Array.from(Array(15).keys()).map((n) => (
                   <ChannelMessage 
                        key={n}
                        author="Leonardo Rodrigues"
                        date="18/06/2020"
                        content="Teste"
                    />
               ))}
               

                <ChannelMessage 
                    author="Diego Fernandes"
                    date="18/06/2020"
                    content={
                        <>
                            <Mention>@Leonardo Rodrigues</Mention>, me carrega no LoL de novo por favor?
                        </>
                    }
                    hasMention
                    isBot
                />
           </Messages>

           <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
           </InputWrapper>
        </Container>
    );
};

export default ChannelData;