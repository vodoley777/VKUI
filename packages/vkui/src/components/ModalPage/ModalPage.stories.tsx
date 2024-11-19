/* eslint-disable no-console */
import { useState } from 'react';
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon24Dismiss, Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { stopPropagation } from '../../lib/utils';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { cities, getRandomUser, getRandomUsers, multiplyText } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { CardScroll } from '../CardScroll/CardScroll';
import { CellButton } from '../CellButton/CellButton';
import { Checkbox } from '../Checkbox/Checkbox';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { DateInput } from '../DateInput/DateInput';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { Gradient } from '../Gradient/Gradient';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { Input } from '../Input/Input';
import { ModalPageFooter } from '../ModalPageFooter/ModalPageFooter';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { PanelHeaderSubmit } from '../PanelHeaderSubmit/PanelHeaderSubmit';
import { Placeholder } from '../Placeholder/Placeholder';
import { Radio } from '../Radio/Radio';
import { SelectMimicry } from '../SelectMimicry/SelectMimicry';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Spacing } from '../Spacing/Spacing';
import { Textarea } from '../Textarea/Textarea';
import { ModalPage } from './ModalPage';
import type { ModalPageCloseReason, ModalPageProps } from './types';

const story: Meta<ModalPageProps> = {
  title: 'Modals/ModalPage',
  component: ModalPage,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ModalPageProps>;

const randomUser = getRandomUser();
const users = getRandomUsers(25);

const DoneButton = ({ onClick }: React.ComponentProps<'div'>) => {
  return <PanelHeaderSubmit onClick={onClick} />;
};

const AndroidCloseButton = ({ className, onClick }: React.ComponentProps<'div'>) => {
  return <PanelHeaderClose className={className} onClick={onClick} />;
};

const IosCloseButton = ({ className, onClick }: React.ComponentProps<'div'>) => {
  return (
    <PanelHeaderButton onClick={onClick} className={className}>
      <Icon24Dismiss />
    </PanelHeaderButton>
  );
};

export const DynamicModalPage: Story = {
  render: function Render() {
    const platform = usePlatform();
    const { sizeX } = useAdaptivityConditionalRender();
    const [expanded, setExpanded] = React.useState(false);
    const toggle = React.useCallback(() => setExpanded(!expanded), [expanded]);

    const [open, setOpen] = React.useState(true);
    const handleButtonClick = () => {
      setOpen(false);
    };

    return (
      <ModalPage
        open={open}
        dynamicContentHeight
        header={
          <ModalPageHeader
            before={
              sizeX.compact &&
              platform === 'android' && (
                <AndroidCloseButton
                  className={sizeX.compact.className}
                  onClick={handleButtonClick}
                />
              )
            }
            after={
              sizeX.compact &&
              platform === 'ios' && (
                <IosCloseButton className={sizeX.compact.className} onClick={handleButtonClick} />
              )
            }
          >
            Dynamic modal
          </ModalPageHeader>
        }
        onClose={() => setOpen(false)}
      >
        <Group>
          <CellButton onClick={toggle}>{expanded ? 'collapse' : 'expand'}</CellButton>
          {expanded && <Placeholder icon={<Icon56MoneyTransferOutline />} />}
        </Group>
      </ModalPage>
    );
  },
};

export const FullscreenModalPage: Story = {
  render: function Render() {
    const platform = usePlatform();
    const { sizeX } = useAdaptivityConditionalRender();

    const [open, setOpen] = React.useState(true);
    const handleButtonClick = () => {
      setOpen(false);
    };

    return (
      <ModalPage
        open={open}
        settlingHeight={100}
        hideCloseButton={platform === 'ios'}
        header={
          <ModalPageHeader
            before={
              sizeX.compact &&
              platform === 'android' && (
                <AndroidCloseButton
                  className={sizeX.compact.className}
                  onClick={handleButtonClick}
                />
              )
            }
            after={platform === 'ios' && <IosCloseButton onClick={handleButtonClick} />}
          >
            @{randomUser.screen_name}
          </ModalPageHeader>
        }
        onClose={() => setOpen(false)}
      >
        <Gradient mode="tint">
          <Placeholder
            icon={<Avatar size={96} src={randomUser.photo_100} />}
            title={randomUser.first_name + ' ' + randomUser.last_name}
          ></Placeholder>
        </Gradient>
        <Group header={<Header indicator="25">Друзья</Header>}>
          {users.map((user) => {
            return (
              <SimpleCell before={<Avatar src={user.photo_100} />} key={user.id}>
                {user.name}
              </SimpleCell>
            );
          })}
        </Group>
      </ModalPage>
    );
  },
};

export const ModalPageWithFilters: Story = {
  render: function Render() {
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(new Date(1901, 0, 1));
    const { sizeX } = useAdaptivityConditionalRender();
    const [open, setOpen] = React.useState(true);
    const handleButtonClick = () => {
      setOpen(false);
    };

    return (
      <ModalPage
        open={open}
        header={
          <ModalPageHeader
            before={
              sizeX.compact && (
                <AndroidCloseButton
                  className={sizeX.compact.className}
                  onClick={handleButtonClick}
                />
              )
            }
            after={<DoneButton onClick={handleButtonClick} />}
          >
            Фильтры
          </ModalPageHeader>
        }
        onClose={() => setOpen(false)}
      >
        <Group>
          <FormItem top="Страна">
            <SelectMimicry placeholder="Выбрать страну" />
          </FormItem>
          <FormItem top="Город">
            <SelectMimicry placeholder="Выбрать город" disabled />
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Пол">
            <Radio name="sex" value={0} defaultChecked>
              Любой
            </Radio>
            <Radio name="sex" value={1}>
              Мужской
            </Radio>
            <Radio name="sex" value={2}>
              Женский
            </Radio>
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Школа">
            <SelectMimicry placeholder="Выбрать школу" disabled />
          </FormItem>
          <FormItem top="Университет">
            <SelectMimicry placeholder="Выбрать университет" disabled />
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Дополнительно">
            <Checkbox>С фотографией</Checkbox>
            <Checkbox>Сейчас на сайте</Checkbox>
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Работа">
            <Input placeholder="Место работы" />
          </FormItem>
          <FormItem>
            <Input placeholder="Должность" />
          </FormItem>
          <FormItem top="Дата рождения">
            <DateInput
              value={dateOfBirth}
              onChange={setDateOfBirth}
              minDateTime={new Date(1901, 0, 1)}
              maxDateTime={new Date(2006, 0, 1)}
            />
          </FormItem>
        </Group>
      </ModalPage>
    );
  },
};

const mockData = getRandomUsers(30);

export const Sandbox: Story = {
  render: function Render(props) {
    const platform = usePlatform();
    const { sizeX } = useAdaptivityConditionalRender();
    const [open, setOpen] = React.useState(true);

    const handleModalClose = (reason: 'close-custom' | ModalPageCloseReason) => {
      console.log('reason', reason);
      setOpen(false);
    };

    return (
      <>
        <Button onClick={() => setOpen((prev) => !prev)}>Открыть</Button>
        <ModalPage
          id="test"
          open={open}
          header={
            <ModalPageHeader
              before={
                sizeX.compact &&
                platform === 'android' && (
                  <AndroidCloseButton
                    className={sizeX.compact.className}
                    onClick={() => handleModalClose('close-custom')}
                  />
                )
              }
              after={
                sizeX.compact &&
                platform === 'ios' && (
                  <IosCloseButton
                    className={sizeX.compact.className}
                    onClick={() => handleModalClose('close-custom')}
                  />
                )
              }
            >
              Sandbox
            </ModalPageHeader>
          }
          footer={
            <ModalPageFooter>
              <Input name="footer" type="text" placeholder="Lorem ipsum..." />
            </ModalPageFooter>
          }
          {...props}
          onClose={handleModalClose}
        >
          <FormItem label="top" top="Вертикальный скролл не должен блокироваться">
            <Textarea
              name="top"
              placeholder="Lorem ipsum..."
              defaultValue={multiplyText('Lorem ipsum', 100)}
              maxHeight={110}
            />
          </FormItem>
          <Div>
            <Div
              style={{ paddingBlock: 24, borderRadius: 12, border: '1px dashed tomato' }}
              onTouchStart={stopPropagation}
              onMouseDown={stopPropagation}
            >
              <code>event.stopPropagation()</code> на <code>onTouchStart</code>/
              <code>onMouseDown</code> должен блокировать жесты вызывающие
              сворачивание/разворачивание панели
            </Div>
          </Div>
          <Group
            header={
              <Header size="m" multiline>
                Горизонтальный скролл не должен блокироваться
              </Header>
            }
          >
            <HorizontalScroll>
              <div style={{ display: 'flex' }}>
                {mockData.map((item) => {
                  return (
                    <HorizontalCell key={item.id} title={item.first_name}>
                      <Avatar size={56} src={item.photo_200} />
                    </HorizontalCell>
                  );
                })}
              </div>
            </HorizontalScroll>
            <Spacing size="m" />
            <CardScroll padding>
              {mockData.map((_, index) => (
                <Card key={index}>
                  <div style={{ height: 96 }} />
                </Card>
              ))}
            </CardScroll>
          </Group>
          <FormItem
            top="Плавающий элемент в пределах панели"
            bottom={
              <>
                Если <code>scrollTop</code> в плавающем элементе и в <code>ModalPageContent</code>{' '}
                будет равен <b>0</b>, то панель будет считать, что её можно тянуть вниз для
                сворачивания
              </>
            }
          >
            <CustomSelect
              options={cities}
              placeholder="forceDropdownPortal={false}"
              forceDropdownPortal={false}
            />
          </FormItem>
          <FormItem
            top="Плавающий элемент за пределами панели"
            bottom="Панель не отвечает за закрытие плавающего окна, если та вышла за пределы во время скролла или сворачивания/разворачивания"
          >
            <CustomSelect
              options={cities}
              placeholder="forceDropdownPortal={true}"
              forceDropdownPortal={true}
            />
          </FormItem>
          <FormItem
            top={
              <>
                Текстовое поле в конце <code>ModaPageContent</code>
              </>
            }
            label="bottom"
          >
            <Input name="bottom" placeholder="Lorem ipsum..." />
          </FormItem>
        </ModalPage>
      </>
    );
  },
};
