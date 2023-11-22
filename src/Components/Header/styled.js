import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 100px;
    background-color:#040E52;
    align-items: center;
    color:white;

    .container{
        padding:5px 20px;
        display:flex;
        align-items:center;
        
    }

    .logo{
        flex:1;
        img{
            width:100px;
            margin-bottom: 80px
            align-items:center;

        }
    }

    nav{
        display:flex;
       ul{
        display:flex;
        align-items:center;

    }
    li{
       list-style: none;
       margin-right: 50px;
        
       a{
        text-decoration:none;
        color:white;
        &:hover{
            color:#F7A349;
        }
       }
    }
    .avatar{
        display:flex;
        align-items:center;
    
        img{
            border-radius:20px;
            width:20px
            height: 10px;
            heldth:10px;
            border-radius:20px;
            margin-bottom:30px
            margin-right:80px
            cursor:pointer;
        }
        label{
            font-size:14px;
            cursor:pointer
            color: #ccc;
        }
        @media screen and (max-width:60)
    }
`;