import styled from 'styled-components'

export const GlobalStyles = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #00ADd1;

    header {
        /* border: 1px solid blue; */

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

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 14px;
        /* box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2); */

        background-color: rgba(79, 182, 209);

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
            /* padding: 2rem; */
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
