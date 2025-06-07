import React from 'react';
import { Image } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, useTheme, Button } from '@ui-kitten/components';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Hooks ---------------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Assets ---------------------------------------
import { Images } from 'assets/images';
// ----------------------------- Components && Elements -----------------------

import { Container, Content, LayoutCustom, Text } from 'components';

const RemoveProfileWallet = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const size = { width: 160 * (width / 375), height: 160 * (width / 375) };

  const _onYes=()=>{goBack()}
  const _onNo=()=>{goBack()}

  return (
    <Container style={styles.container}>
      <TopNavigation />
      <Content contentContainerStyle={styles.content}>
        <Image source={Images.wallet_delete} style={size} />
        <Text category="h3" marginHorizontal={32} center>
          Do you want remove this wallet?
        </Text>
        <Text category="body" center>
          You will loss all date input before. Really agree with it?
        </Text>
      </Content>
      <LayoutCustom ph={16} gap={8} horizontal itemsCenter pv={6}>
        <Button children={'Yes'} style={[styles.button, { backgroundColor: '#3E517A' }]}onPress={_onYes} />
        <Button children={'No'} style={styles.button} onPress={_onNo}/>
      </LayoutCustom>
    </Container>
  );
});

export default RemoveProfileWallet;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  button: {
    flex: 1,
  },
});
