"use client";
import Image from "next/image";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  border-bottom: 1px solid #e2e8f0;
`;

export const DivNv1 = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1rem;

  @media (min-width: 567px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const DivNav2 = styled.div`
  position: relative;
  display: flex;
  height: 3.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarNav = styled.nav`
  border-bottom: 1px solid #e2e8f0;
`;

export const TitleContainer = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: between;
`;

export const Title = styled.span`
  position: relative;
  color: var(--text-dark);
  border-radius: 0.375rem;
  font-size: 1.2rem;
  font-weight: bold;
  left: 0.5rem;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;


export const BellIcon = styled.div`
  /* Ajoutez ici les styles pour l'icône de la cloche */
`;

export const ProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 320px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const LogoutIcon = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
`;

export const ProfileAdminImage = styled(Image)``;

export const Header_Wrapper = styled.div``;

export const Header_Box = styled.div`
  display: flex;
  flex-direction: column;
font-size:18px;
  padding: 0.5rem;
  margin-left: 2rem;
`;
export const Header_Span = styled.span`
`;

export const SearchContainer = styled.div`
display: flex;
align-items: center;
width: 180px;
height: 40px;
top: 22.06px;
left: 1062px;
gap: 0px;
border-radius:20px;
border: 1px solid #ccc;
padding:10px;


`;

export const SearchInput = styled.input`
  width: 120px;
  height: 33.99px;
  padding: 10px;
  border: none;
  outline: none;
  font-family: Roboto;
  font-size: 18.66px;
  font-weight: 400;
  line-height: 21.87px;
  text-align: left;
  // @media (min-width: 320px) {
  //   width: auto;
  // }
`;
export const SearchIcon = styled.div`
color:#CCCDCE;
font-size:20px;
`;

