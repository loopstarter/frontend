import React from "react";
import styled from "styled-components";
import { Dropdown, Button } from '@loopstarter/uikit'
import LanguageIcon from "./LanguageIcon";
import { Language } from "./types";
import MenuButton from "./MenuButton";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const Text = styled.p`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 35.8115px;
  line-height: 41px;
  text-align: center;
  color: #FFFFFF;
`

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => {
  return (
    <Dropdown
      position="top-right"
      target={
        <Button
          variant="text"
          p="0"
          startIcon={<LanguageIcon />}
        >
          <Text>{currentLang?.toUpperCase()}</Text>
        </Button>
      }
    >
      {langs.map((lang) => (
        <MenuButton
          key={lang.locale}
          fullWidth
          onClick={() => setLang(lang)}
          // Safari fix
          style={{ minHeight: "32px", height: "auto", color: '#1FC7D4' }}
        >
          {lang.language}
        </MenuButton>
      ))}
    </Dropdown>
  );
}

export default React.memo(
  LangSelector,
  (prev, next) => prev.currentLang === next.currentLang
);
