// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { useMutation, useQuery } from "@apollo/react-hooks";
// import { SET_LOGOUT_USER_INFO } from "../routes/Auth/AuthQueries";
// import reset from "styled-reset";
// import client from "../Apollo/Client";
// import { IS_LOGGED_IN, ME } from "../SharedQueries";
//
// const HeaderWrapper = styled.div`
//   ${reset};
//   color: ${props => props.theme.bgColor};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   padding: 0 10px;
//   justify-content: flex-end;
//   background-color: transparent;
//   z-index: 10;
// `;
//
// const List = styled.ul`
//   display: flex;
// `;
//
// const Item = styled.li`
//   width: 80px;
//   text-align: center;
//   height: 50px;
// `;
//
// const StyledLink = styled(Link)`
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
//
// const Header = () => {
//   const { data } = useQuery(ME);
//   const [logUserOut] = useMutation(SET_LOGOUT_USER_INFO);
//   return (
//     <HeaderWrapper>
//       <List>
//         <Item>
//           <StyledLink to="/">Home</StyledLink>
//         </Item>
//
//         <>
//           {data?.me ? (
//             data?.me.personalInfo || data?.me.companyInfo ? (
//               <Item>
//                 <StyledLink to={`/user/${data?.me.id}`}>My Page</StyledLink>
//               </Item>
//             ) : (
//               <Item>
//                 <StyledLink to={`/addInfo/${data?.me.id}`}>
//                   Additional Information
//                 </StyledLink>
//               </Item>
//             )
//           ) : null}
//           {data?.me && (
//             <Item>
//               <StyledLink to={"/docs/write"}>Write</StyledLink>
//             </Item>
//           )}
//           <Item>
//             {data?.me ? (
//               <StyledLink
//                 to="/"
//                 onClick={async () => {
//                   await logUserOut();
//                 }}
//               >
//                 Logout
//               </StyledLink>
//             ) : (
//               <StyledLink to="/auth">Login / SignUp</StyledLink>
//             )}
//           </Item>
//         </>
//       </List>
//     </HeaderWrapper>
//   );
// };
// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { SET_LOGOUT_USER_INFO } from "../routes/Auth/AuthQueries";
import reset from "styled-reset";
import client from "../Apollo/Client";
import { IS_LOGGED_IN, ME } from "../SharedQueries";

const HeaderWrapper = styled.div`
  ${reset};
  color: ${props => props.theme.bgColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: flex-end;
  background-color: transparent;
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  height: 50px;
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const { data } = useQuery(ME);
  const [logUserOut] = useMutation(SET_LOGOUT_USER_INFO);
  return (
    <HeaderWrapper>
      <List>
        <Item>
          <StyledLink to="/">Home</StyledLink>
        </Item>
        <Item>
          <StyledLink to={`/user/${data?.me.id}`}>My Page</StyledLink>
        </Item>
        <Item>
          <StyledLink to={"/docs/write"}>Write</StyledLink>
        </Item>
        <>
          {data?.me ? (
            data?.me.personalInfo || data?.me.companyInfo ? (
              <Item>
                <StyledLink to={`/user/${data?.me.id}`}>My Page</StyledLink>
              </Item>
            ) : (
              <Item>
                <StyledLink to={`/addInfo/${data?.me.id}`}>
                  Additional Information
                </StyledLink>
              </Item>
            )
          ) : null}
          {data?.me && (
            <Item>
              <StyledLink to={"/docs/write"}>Write</StyledLink>
            </Item>
          )}
          <Item>
            {data?.me ? (
              <StyledLink
                to="/"
                onClick={async () => {
                  await logUserOut();
                }}
              >
                Logout
              </StyledLink>
            ) : (
              <StyledLink to="/auth">Login / SignUp</StyledLink>
            )}
          </Item>
        </>
      </List>
    </HeaderWrapper>
  );
};
export default Header;
