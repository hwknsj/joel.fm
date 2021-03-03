import { css } from '@emotion/react'
import { darken, lighten } from 'polished'

const helpers = theme => css`
  .img {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 100%;
  }

  .hidden {
    visibility: hidden;
    position: absolute;
    text-indent: -9999px;
  }

  .bold {
    font-weight: ${theme.fontHeavy} !important;
  }
  .italic {
    font-style: italic !important;
  }
  .fraktur {
    font-family: ${theme.fontFraktur} !important;
  }
  .serif {
    font-family: ${theme.fontSerif} !important;
  }
  .sans-serif {
    font-family: ${theme.fontSans} !important;
  }
  .light {
    font-weight: 200 !important;
  }
  .text-light {
    color: ${theme.colorLight} !important;
    a {
      color: ${lighten(0.2, theme.colorPrimary)} !important;
      &:hover {
        color: ${darken(0.01, theme.colorPrimary)} !important;
      }
    }
  }
  .subtitle {
    color: ${theme.colorLight};
    font-style: italic;
    display: block;
  }
  .justify-text {
    text-align: justify !important;
  }

  .inline {
    display: inline-flex !important;
    list-style: none;
  }

  .inline li {
    display: inline !important;
    list-style: none;
  }

  .inline-list {
    display: 'flex';
    padding: 0;
    list-style: none;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .inline-list.center {
    text-align: center;
  }

  .inline-list .inline-item {
    flex: 0 1 auto;
    margin-right: 1rem;
  }

  /* .inline-list .inline-item:nth-of-type(1n + 1) {
    border-right: 1px solid ${theme.colorBase};
  } */
  .inline-list .inline-item::after {
    content: '';
  }

  .inline-list .inline-item:last-of-type {
    border-right: none;
    margin-right: 0;
  }
  .center-text {
    text-align: center !important;
  }
  .block {
    display: block !important;
  }
  .flex {
    display: flex !important;
  }
  .flex-x {
    display: flex !important;
    flex-direction: row !important;
  }
  .flex-y {
    display: flex !important;
    flex-direction: column !important;
  }
  .center-x {
    margin: 0 auto !important;
    text-align: center !important;
  }
  .white {
    color: ${theme.white} !important;
  }
  .blue {
    color: ${theme.blue} !important;
  }
  .black {
    color: ${theme.black} !important;
  }
  .alt-black {
    color: ${theme.altBlack} !important;
  }
  .p0 {
    padding: 0 !important;
  }
  .p2 {
    padding: 2rem !important;
  }
  .py-1 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .px-1 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .pb-0 {
    padding-bottom: 0 !important;
  }
  .pb-1 {
    padding-bottom: 1rem !important;
  }
  .pb-2 {
    padding-bottom: 2rem !important;
  }
  .pb-3 {
    padding-bottom: 3rem !important;
  }
  .pb-4 {
    padding-bottom: 4rem !important;
  }
  .my-1 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-2 {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }
  .my-3 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .mt-0 {
    margin-top: 0 !important;
  }
  .mt-1 {
    margin-top: 1rem !important;
  }
  .mt-2 {
    margin-top: 2rem !important;
  }
  .mt-3 {
    margin-top: 3rem !important;
  }
  .mt-4 {
    margin-top: 4rem !important;
  }
  .mb-0 {
    margin-bottom: 0 !important;
  }
  .mb-1 {
    margin-bottom: 1rem !important;
  }
  .mb-2 {
    margin-bottom: 2rem !important;
  }
  .mb-3 {
    margin-bottom: 3rem !important;
  }
  .mb-4 {
    margin-bottom: 4rem !important;
  }
  .center-el-x {
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .center-el-xy {
    margin: 0 auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
  }
  .rose {
    direction: rtl;
    font-variant-ligatures: common-ligatures;
  }
`
export default helpers
