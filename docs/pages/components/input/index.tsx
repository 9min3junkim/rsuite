import React from 'react';
import {
  Input,
  InputGroup,
  Whisper,
  Tooltip,
  Grid,
  Row,
  Col,
  MaskedInput,
  SelectPicker,
  ButtonToolbar,
  Toggle,
  FlexboxGrid,
  Stack
} from 'rsuite';
import DefaultPage from '@/components/Page';
import ImportGuide from '@/components/ImportGuide';
import SearchIcon from '@rsuite/icons/Search';
import InfoIcon from '@rsuite/icons/legacy/Info';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

const inDocsComponents = {
  'import-guide': () => (
    <ImportGuide
      components={['Input', 'InputGroup', 'MaskedInput']}
      hasCssComponents={['Input', 'InputGroup']}
    />
  )
};

export default function Page() {
  return (
    <DefaultPage
      inDocsComponents={inDocsComponents}
      dependencies={{
        Input,
        InputGroup,
        Whisper,
        Tooltip,
        Grid,
        Row,
        Col,
        SearchIcon,
        InfoIcon,
        AvatarIcon,
        EyeIcon,
        EyeSlashIcon,
        MaskedInput,
        SelectPicker,
        ButtonToolbar,
        Toggle,
        FlexboxGrid,
        Stack
      }}
    />
  );
}
