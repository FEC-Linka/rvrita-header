import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  color: #222;
  font-weight: 300;
  font-size: 13px;
  font-family: 'Roboto';
  line-height: 18px;
  border-bottom: 2px solid rgba(34, 34, 34, 0.15);
  letter-spacing: 0.4px;
  -webkit-font-smoothing: antialiased;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const HeaderSearchContainer = styled.div`
  padding: 12px 36px 0;
  display: flex;
  align-items: center;
`;

export const Logo = styled.svg`
  width: 80px;
  height: 40px;
  fill: #F1641E;
  flex-grow: 0;
  padding-right: 6px;
`;

export const SearchBar = styled.input`
  flex-grow: 1;
  height: 44px;
  box-sizing: border-box;
  border-radius: 100px;
  border: 1px solid silver;
  padding: 0 20px;
  background: rgba(34, 34, 34, 0.07);;
  font-size: 16px;
  box-shadow: 0 2px 5px inset rgba(0,0,0,0.08);
  letter-spacing: 0.4px;
`;

export const SignInLink = styled.a`
  flex-grow: 0;
  padding: 9px 15px;
  text-decoration: none;
  Color: #222;
  font-weight: bold;
`;

export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-grow: 0;

  padding: 12px;
`;

export const MenuListContainer = styled.div`
  padding: 0 18px;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 18px;
  list-style-type: none;
  margin-bottom: 0;
  box-sizing: border-box;
`;

export const MenuListItem = styled.li`
  cursor: pointer;
  margin-top: 4px;
  padding-bottom: 12px;
  margin-right: 12px;
  align-items: center;
`;

export const MenuListItemLink = styled.a`
  color: #222;
  text-decoration: none;
  width: 100%;
`;

export const GiftSvg = styled.svg`
  width: 16px;
  height: 12px;
  display: inline-block;
  margin-right: 3px;
`;

export const SearchIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: -48px;
  margin-right: 40px;
`;