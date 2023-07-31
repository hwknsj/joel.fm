import { css } from '@emotion/react'
import { darken, lighten } from 'polished'
import type { Theme } from '../theme'

const rem = [0, 1, 2, 3, 4, 5]
const pmClasses = rem.map(
  x => css`
    .p-${x} {
      padding: ${x}rem !important;
    }
    .pl-${x} {
      padding-left: ${x}rem !important;
    }
    .pr-${x} {
      padding-right: ${x}rem !important;
    }
    .pt-${x} {
      padding-top: ${x}rem !important;
    }
    .pb-${x} {
      padding-bottom: ${x}rem !important;
    }
    .px-${x} {
      padding-left: ${x}rem !important;
      padding-right: ${x}rem !important;
    }
    .py-${x} {
      padding-top: ${x}rem !important;
      padding-bottom: ${x}rem !important;
    }
    .m-${x} {
      margin: ${x}rem !important;
    }
    .ml-${x} {
      margin-left: ${x}rem !important;
    }
    .mr-${x} {
      margin-right: ${x}rem !important;
    }
    .mt-${x} {
      margin-top: ${x}rem !important;
    }
    .mb-${x} {
      margin-bottom: ${x}rem !important;
    }
    .mx-${x} {
      margin-left: ${x}rem !important;
      margin-right: ${x}rem !important;
    }
    .my-${x} {
      margin-top: ${x}rem !important;
      margin-bottom: ${x}rem !important;
    }
  `
)

export const helpers = (theme: Theme) => css`
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
    font-weight: ${theme.typeography.weight.heavy} !important;
  }
  .italic {
    font-style: italic !important;
  }
  .fraktur {
    font-family: ${theme.typeography.fraktur} !important;
  }
  .serif {
    font-family: ${theme.typeography.serif} !important;
  }
  .sans-serif {
    font-family: ${theme.typeography.sans} !important;
  }
  .light {
    font-weight: 200 !important;
  }
  .text-light {
    color: ${theme.colors.secondary} !important;
    a {
      color: ${lighten(0.2, theme.colorPrimary)} !important;
      &:hover {
        color: ${darken(0.01, theme.colorPrimary)} !important;
      }
    }
  }
  .text-center {
    text-align: center !important;
  }
  .subtitle {
    color: ${theme.colors.secondary};
    font-style: italic;
    display: block;
  }
  .text-justify {
    text-align: justify !important;
  }
  .inline {
    display: inline-flex !important;
    list-style: none;
    li {
      display: inline !important;
      list-style: none;
    }
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
  .inline-list .inline-item::after {
    content: '';
  }
  .inline-list .inline-item:last-of-type {
    border-right: none;
    margin-right: 0;
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
  ${pmClasses}
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

/* .p0 {
    padding: 0 !important;
  }
  .p2 {
    padding: 2rem !important;
  }
  .py-1 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .px-0 {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  }
  .px-1 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .px-2 {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
  .px-3 {
    padding-left: 3rem !important;
    padding-right: 3rem !important;
  }
  .px-4 {
    padding-left: 4rem !important;
    padding-right: 4rem !important;
  }
  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-1 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-2 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
  .py-3 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .py-4 {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
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
  .mx-0 {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .mx-1 {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }
  .mx-2 {
    margin-left: 2rem !important;
    margin-right: 2rem !important;
  }
  .mx-3 {
    margin-left: 3rem !important;
    margin-right: 3rem !important;
  }
  .mx-4 {
    margin-left: 4rem !important;
    margin-right: 4rem !important;
  }
  .my-0 {
    margin-top: 0rem !important;
    margin-bottom: 0rem !important;
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
  .my-4 {
    margin-top: 4rem !important;
    margin-bottom: 4rem !important;
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
  } */

export default helpers
