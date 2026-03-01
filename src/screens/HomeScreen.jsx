/**
 * Material 3 首页示例
 * 展示常用的 Material 3 组件
 */

import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, StatusBar } from 'react-native';
import {
  Appbar,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  List,
  ProgressBar,
  Searchbar,
  Snackbar,
  Switch,
  Text,
  TextInput,
  useTheme,
  Checkbox,
  RadioButton,
  Badge,
  Avatar,
  FAB,
} from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('first');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Material 3 模板" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* 搜索栏 */}
        <Searchbar
          placeholder="搜索"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />

        {/* 卡片示例 */}
        <Card style={styles.card} elevation={2}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Avatar.Text label="M3" size={48} />
              <View style={styles.cardTitle}>
                <Text variant="titleLarge">Material 3</Text>
                <Text variant="bodyMedium" style={styles.cardSubtitle}>
                  现代设计系统
                </Text>
              </View>
              <Badge size={20}>新</Badge>
            </View>
            <Text variant="bodyMedium" style={styles.cardContent}>
              Material Design 3 是 Google 最新的设计系统，提供更个性化、自适应的用户体验。
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="text" onPress={() => {}}>取消</Button>
            <Button mode="contained" onPress={() => {}}>确定</Button>
          </Card.Actions>
        </Card>

        {/* 按钮示例 */}
        <Text variant="titleMedium" style={styles.sectionTitle}>按钮</Text>
        <View style={styles.buttonRow}>
          <Button mode="contained" onPress={() => {}} style={styles.button}>
            主要按钮
          </Button>
          <Button mode="outlined" onPress={() => {}} style={styles.button}>
            边框按钮
          </Button>
          <Button mode="text" onPress={() => {}} style={styles.button}>
            文本按钮
          </Button>
          <Button mode="contained-tonal" onPress={() => {}} style={styles.button}>
            色调按钮
          </Button>
        </View>

        {/* 图标按钮 */}
        <View style={styles.buttonRow}>
          <IconButton icon="heart" mode="outlined" onPress={() => {}} />
          <IconButton icon="star" mode="contained" onPress={() => {}} />
          <IconButton icon="share" onPress={() => {}} />
          <IconButton icon="settings" iconColor={theme.colors.primary} onPress={() => {}} />
        </View>

        {/* 表单元素 */}
        <Text variant="titleMedium" style={styles.sectionTitle}>表单</Text>

        <TextInput
          label="文本输入框"
          value=""
          onChangeText={() => {}}
          style={styles.textInput}
          mode="outlined"
        />

        <TextInput
          label="密码"
          value=""
          onChangeText={() => {}}
          style={styles.textInput}
          mode="outlined"
          secureTextEntry
        />

        {/* Checkbox */}
        <View style={styles.row}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <Text variant="bodyLarge" style={styles.rowText}>复选框</Text>
        </View>

        {/* Radio Button */}
        <View style={styles.row}>
          <RadioButton
            value="first"
            status={radioValue === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setRadioValue('first')}
          />
          <Text variant="bodyLarge" style={styles.rowText}>选项一</Text>
          <RadioButton
            value="second"
            status={radioValue === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setRadioValue('second')}
          />
          <Text variant="bodyLarge" style={styles.rowText}>选项二</Text>
        </View>

        {/* Switch */}
        <View style={styles.row}>
          <Text variant="bodyLarge" style={styles.rowText}>开关</Text>
          <Switch value={isSwitchOn} onValueChange={setIsSwitchOn} />
        </View>

        {/* 进度条 */}
        <Text variant="titleMedium" style={styles.sectionTitle}>进度</Text>
        <ProgressBar progress={0.7} style={styles.progressBar} />

        {/* Chips */}
        <Text variant="titleMedium" style={styles.sectionTitle}>芯片</Text>
        <View style={styles.chipRow}>
          <Chip mode="flat" onPress={() => {}} style={styles.chip}>
            扁平
          </Chip>
          <Chip mode="outlined" onPress={() => {}} style={styles.chip}>
            边框
          </Chip>
          <Chip mode="contained" onPress={() => {}} style={styles.chip}>
            填充
          </Chip>
          <Chip
            mode="flat"
            selected
            onPress={() => {}}
            style={styles.chip}
            showSelectedOverlay
          >
            已选
          </Chip>
        </View>

        {/* 列表 */}
        <Text variant="titleMedium" style={styles.sectionTitle}>列表</Text>
        <List.Section>
          <List.Item
            left={(props) => <List.Icon {...props} icon="folder" />}
            title="文件夹"
            description="浏览文件"
          />
          <Divider />
          <List.Item
            left={(props) => <List.Icon {...props} icon="image" />}
            title="图片"
            description="查看相册"
          />
          <Divider />
          <List.Item
            left={(props) => <List.Icon {...props} icon="music" />}
            title="音乐"
            description="播放列表"
          />
        </List.Section>

        {/* Snackbar 提示 */}
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          action={{
            label: '撤销',
            onPress: () => {},
          }}
        >
          这是一个 Snackbar 提示
        </Snackbar>
      </ScrollView>

      {/* 悬浮按钮 */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setSnackbarVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  searchbar: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    flex: 1,
    marginLeft: 12,
  },
  cardSubtitle: {
    opacity: 0.7,
  },
  cardContent: {
    marginBottom: 8,
  },
  sectionTitle: {
    marginTop: 8,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  button: {
    margin: 4,
  },
  textInput: {
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rowText: {
    flex: 1,
    marginLeft: 8,
  },
  progressBar: {
    height: 8,
    marginBottom: 16,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    margin: 4,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
