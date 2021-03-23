import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size:48px;
    color: #3A3A3A;
    max-width:450px;
    line-height:46px;
    margin-top:80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width:700px;
    display:flex;
    input{
        flex:1;
        height:70px;
        padding: 0 24px;
        border:0;
        border-radius:5px 0 0 5px;
        color:#a3a3a3;

        &::placeholder{
            color:#a8a8b3;
        }

    }
    button{
        width:210px;
        height:70px;
        background:#04d361;
        border-radius:0px 5px 5px 0px;
        border:0;
        color:#fff;
        font-weight:bold;
        trasition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#04d361')}

        }

    }
`;

export const Repositories = styled.div`
    margin-top:80px;
    max-width:700px;
    a{
        background: #fff;
        border-radius:5px;
        width:100%;
        padding:24px;
        dispplay:block;
        text-decoration:none;
        display:flex;
        align-items:center;

        &:hover{
            transform:translateX(10px);
        }

        & + a{
            margin-top:16px;
        }
        img{
            width:64px;
            height:64px;
            border-radius:50%;
        }

        div{
            margin-left:16px;

            strong{
                font-size: 20px;
                color: #3d3d4d;
            }

            p{
                font-size: 18px;
                color: #A8A8B3;
                margin-top:4px;
            }
        }

        svg{
            margin-left:auto;
            color:#cbcbd6;
        }
    }
`;
