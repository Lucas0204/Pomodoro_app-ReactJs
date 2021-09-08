import styled from 'styled-components'

export const GlobalStyles = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #00ADd1;

    header {
        height: 14%;

        display: flex;
        align-items: center;
        
        h1 {
            color: white;
        }
    }

    main {
        width: 45%;
        height: 50%;

        margin-top: 4rem;
        padding: 3.3rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        border-radius: 14px;

        background-color: rgba(79, 182, 209);

        .timer-period {
            font-size: 1.4rem;

            width: 42%;

            display: flex;
            justify-content: space-around;

            color: white;

            .period {
                padding: .5rem 1rem;

                border-radius: 10px;
                background-color: rgba(59, 172, 200);
            }

            .currently {
                background-color: rgba(40, 142, 174);
            }
        }

        .timer {
            font-size: 6.5rem;
            font-weight: bold;
            color: white;
        }

        button {
            width: 12rem;
            height: 3.5rem;

            font-size: 1.6rem;
            font-weight: 400;
            background-color: white;
            color: #00ADd1;

            border-radius: 4px;
            border: none;
            border-bottom: 6px solid #e2e2e2;

            :hover {
                cursor: pointer;
            }
        }
    }
`
