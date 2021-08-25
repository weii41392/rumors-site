import { t } from 'ttag';
import { SvgIcon } from '@material-ui/core';

export const TYPE_ICON = {
  // eslint-disable-next-line react/display-name
  NOT_ARTICLE: props => (
    <SvgIcon viewBox="0 0 16 15" {...props}>
      <path
        d="M6.61271 1.08974L0.217251 11.7226C-0.399855 12.7489 0.371127 14.0307 1.60534 14.0307H14.3947C15.6289 14.0307 16.3999 12.7489 15.7827 11.7226L9.38889 1.08974C8.77178 0.0633888 7.22982 0.0633888 6.61271 1.08974Z"
        fill="#966DEE"
      />
      <path
        d="M8.00066 9.42677C7.55826 9.42677 7.19922 9.08209 7.19922 8.65739V4.55968C7.19922 4.13498 7.55826 3.7903 8.00066 3.7903C8.44305 3.7903 8.80209 4.13498 8.80209 4.55968V8.65739C8.80209 9.08209 8.44305 9.42677 8.00066 9.42677Z"
        fill="white"
      />
      <path
        d="M8.00066 12.4073C7.55826 12.4073 7.19922 12.0626 7.19922 11.6379V11.384C7.19922 10.9594 7.55826 10.6147 8.00066 10.6147C8.44305 10.6147 8.80209 10.9594 8.80209 11.384V11.6379C8.80209 12.0626 8.44305 12.4073 8.00066 12.4073Z"
        fill="white"
      />
    </SvgIcon>
  ),
  // eslint-disable-next-line react/display-name
  OPINIONATED: props => (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path
        d="M14.2022 0.359985H1.79775C0.805393 0.359985 0 1.13316 0 2.08583V13.9941C0 14.9468 0.805393 15.72 1.79775 15.72H14.2022C15.1946 15.72 16 14.9468 16 13.9941V2.08583C16 1.13316 15.1946 0.359985 14.2022 0.359985Z"
        fill="#2079F0"
      />
      <path
        d="M3.70161 9.50699C3.20543 9.50699 2.80273 9.1204 2.80273 8.64407V7.43598C2.80273 6.95965 3.20543 6.57306 3.70161 6.57306C4.19779 6.57306 4.60049 6.95965 4.60049 7.43598V8.64407C4.60049 9.1204 4.19959 9.50699 3.70161 9.50699Z"
        fill="white"
      />
      <path
        d="M8.01631 9.50699C7.52013 9.50699 7.11743 9.1204 7.11743 8.64407V7.43598C7.11743 6.95965 7.52013 6.57306 8.01631 6.57306C8.51249 6.57306 8.91518 6.95965 8.91518 7.43598V8.64407C8.91518 9.1204 8.51429 9.50699 8.01631 9.50699Z"
        fill="white"
      />
      <path
        d="M12.331 9.50699C11.8348 9.50699 11.4321 9.1204 11.4321 8.64407V7.43598C11.4321 6.95965 11.8348 6.57306 12.331 6.57306C12.8272 6.57306 13.2299 6.95965 13.2299 7.43598V8.64407C13.2299 9.1204 12.829 9.50699 12.331 9.50699Z"
        fill="white"
      />
    </SvgIcon>
  ),
  // eslint-disable-next-line react/display-name
  NOT_RUMOR: props => (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path
        d="M8 15.72C12.4183 15.72 16 12.2815 16 8.03999C16 3.79844 12.4183 0.359985 8 0.359985C3.58172 0.359985 0 3.79844 0 8.03999C0 12.2815 3.58172 15.72 8 15.72Z"
        fill="#00B172"
      />
      <path
        d="M6.58648 11.7849C6.37535 11.7849 6.16421 11.7074 6.00256 11.5538L2.62112 8.30757C2.29947 7.99878 2.29947 7.49681 2.62112 7.18803C2.94277 6.87925 3.46566 6.87925 3.78731 7.18803L6.58978 9.87682L11.9094 4.83969C12.2327 4.53249 12.7556 4.53566 13.0756 4.84761C13.3956 5.15956 13.3923 5.65995 13.0673 5.96715L7.16545 11.5569C7.00545 11.7089 6.79597 11.7849 6.58648 11.7849Z"
        fill="white"
      />
    </SvgIcon>
  ),
  // eslint-disable-next-line react/display-name
  RUMOR: props => (
    <SvgIcon viewBox="0 0 16 15" {...props}>
      <path
        d="M10.9541 0.359985H5.04416C4.81385 0.359985 4.59394 0.448089 4.43117 0.602687L0.252814 4.61557C0.0917749 4.77017 0 4.98128 0 5.20237V10.8759C0 11.097 0.0917749 11.3081 0.252814 11.4644L4.4329 15.474C4.59567 15.6302 4.81558 15.7167 5.04589 15.7167H10.9558C11.1861 15.7167 11.4061 15.6286 11.5688 15.474L15.7472 11.4627C15.91 11.3065 16 11.0954 16 10.8743V5.20237C16 4.98128 15.9082 4.77017 15.7472 4.61391L11.5654 0.602687C11.4026 0.448089 11.1827 0.359985 10.9541 0.359985Z"
        fill="#FB5959"
      />
      <path
        d="M9.30569 8.0383L12.1992 5.26054C12.5369 4.93638 12.5369 4.40942 12.1992 4.08526C11.8615 3.76111 11.3126 3.76111 10.975 4.08526L8.08144 6.86303L5.18794 4.08526C4.85028 3.76111 4.30136 3.76111 3.9637 4.08526C3.62603 4.40942 3.62603 4.93638 3.9637 5.26054L6.8572 8.0383L3.9637 10.8177C3.62603 11.1419 3.62603 11.6689 3.9637 11.993C4.13339 12.1559 4.35504 12.2357 4.57668 12.2357C4.79833 12.2357 5.01997 12.1543 5.18967 11.993L8.08318 9.21524L10.9767 11.993C11.1464 12.1559 11.368 12.2357 11.5897 12.2357C11.8113 12.2357 12.033 12.1543 12.2027 11.993C12.5403 11.6689 12.5403 11.1419 12.2027 10.8177L9.30569 8.0383Z"
        fill="white"
      />
    </SvgIcon>
  ),
};

export const TYPE_NAME = {
  NOT_ARTICLE: t`invalid request`,
  OPINIONATED: t`contains personal perspective`,
  NOT_RUMOR: t`contains true information`,
  RUMOR: t`contains misinformation`,
};

export const TYPE_DESC = {
  NOT_ARTICLE: t`This message cannot or should not be processed by Cofacts editors.`,
  NOT_RUMOR: t`The message has some of its content proved to be true.`,
  OPINIONATED: t`The message contains personal opinion, unproven hypotheses, conspiracy theories, studies that has not reached concensus, inferences of political policies, etc.`,
  RUMOR: t`This message has some of its content proved to be false.`,
};

export const TYPE_INSTRUCTION = {
  NOT_ARTICLE: '請簡單說明您為何認為這不是完整文章：',
  NOT_RUMOR: '請簡單說明他哪個部分是正確的，作為「資料來源」的導讀：',
  OPINIONATED: '請簡單說明含有主觀意見之處，並且提醒讀者其並非客觀事實：',
  RUMOR: '請簡單說明不實之處，作為「資料來源」的導讀：',
};

export const TYPE_SUGGESTION_OPTIONS = {
  OPINIONATED: [
    { label: '陰謀論', value: '⋯⋯的部分含有無法查證的陰謀論，因為⋯⋯' },
    { label: '滑坡謬誤', value: '⋯⋯的部分含有滑坡謬誤，因為⋯⋯' },
    { label: '尚無共識', value: '⋯⋯的部分，社會尚無共識。' },
    { label: '個人價值', value: '⋯⋯的部分純屬個人價值觀，並非客觀事實。' },
  ],
  NOT_ARTICLE: [
    {
      label: '長度太短',
      value: '文字長度太短，疑似為使用者手動輸入之查詢語句，不像轉傳文章。',
    },
    { label: '商業促銷', value: '這是商業活動廣告，活動期間到⋯⋯' },
    { label: '無查證需要', value: '訊息與謠言查證無關。' },
    { label: '聊天', value: '送出文章的人在嘗試與機器人聊天。' },
    { label: '意見回饋', value: '對 Cofacts 真的假的的建言。' },
    { label: '無意義測試', value: '測試用之無意義訊息。' },
    {
      label: '連結失效',
      value: '連結失效',
    },
  ],
};

export const TYPE_REFERENCE_TITLE = {
  OPINIONATED: t`Opinion Sources`,
  RUMOR: t`References`,
  NOT_RUMOR: t`References`,
};
