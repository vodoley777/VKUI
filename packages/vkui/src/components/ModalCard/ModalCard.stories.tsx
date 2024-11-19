import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon56MoneyTransferOutline, Icon56NotificationOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Image } from '../Image/Image';
import { Spacing } from '../Spacing/Spacing';
import { Textarea } from '../Textarea/Textarea';
import { UsersStack } from '../UsersStack/UsersStack';
import { ModalCard } from './ModalCard';
import type { ModalCardProps } from './types';

const story: Meta<ModalCardProps> = {
  title: 'Modals/ModalCard',
  component: ModalCard,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
    background: 'linear-gradient(blue, pink)',
  },
};

export default story;

type Story = StoryObj<ModalCardProps>;

export const SimpleCard: Story = {
  render: function Render() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Button appearance="overlay" onClick={() => setOpen(true)}>
          Открыть
        </Button>
        <ModalCard
          open={open}
          onClose={handleClose}
          icon={<Icon56MoneyTransferOutline />}
          title="Отправляйте деньги друзьям, используя банковскую карту"
          description="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
          actions={
            <Button size="l" mode="primary" stretched onClick={() => setOpen(false)}>
              Попробовать
            </Button>
          }
        />
      </>
    );
  },
};

export const CardWithAvatar: Story = {
  render: function Render() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Button appearance="overlay" onClick={() => setOpen(true)}>
          Открыть
        </Button>
        <ModalCard
          open={open}
          onClose={handleClose}
          icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
          title="Добавить игру «Загадки детства» в меню?"
          description="Игра появится под списком разделов на экране меню и будет всегда под рукой."
          actions={
            <Button size="l" mode="primary" stretched onClick={() => setOpen(false)}>
              Добавить в меню
            </Button>
          }
        />
      </>
    );
  },
};

export const CardWithTextArea: Story = {
  render: function Render() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Button appearance="overlay" onClick={() => setOpen(true)}>
          Открыть
        </Button>
        <ModalCard
          open={open}
          onClose={handleClose}
          title="Расскажите о себе"
          actions={
            <Button size="l" mode="primary" stretched onClick={() => setOpen(false)}>
              Сохранить
            </Button>
          }
        >
          <Spacing size="m" />
          <Textarea defaultValue="В Грузии" />
        </ModalCard>
      </>
    );
  },
};

export const CardWithMultipleButtons: Story = {
  render: function Render() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Button appearance="overlay" onClick={() => setOpen(true)}>
          Открыть
        </Button>
        <ModalCard
          open={open}
          onClose={handleClose}
          icon={<Icon56NotificationOutline />}
          title="Приложение запрашивает разрешение на отправку Вам уведомлений"
          actions={
            <ButtonGroup stretched>
              <Button key="deny" size="l" mode="secondary" stretched onClick={() => setOpen(false)}>
                Запретить
              </Button>
              <Button key="allow" size="l" mode="primary" stretched onClick={() => setOpen(false)}>
                Разрешить
              </Button>
            </ButtonGroup>
          }
        />
      </>
    );
  },
};

export const CardWithComplexContent: Story = {
  render: function Render() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Button appearance="overlay" onClick={() => setOpen(true)}>
          Открыть
        </Button>
        <ModalCard
          open={open}
          onClose={handleClose}
          icon={<Avatar src={getAvatarUrl('chat_basketball', 200)} size={72} />}
          title="Баскетбол на выходных"
          titleComponent="h2"
          description="Приглашение в беседу"
          descriptionComponent="span"
          actions={
            <React.Fragment>
              <Spacing size={8} />
              <ButtonGroup gap="s" mode="vertical" stretched>
                <Button key="join" size="l" mode="primary" stretched onClick={() => setOpen(false)}>
                  Присоединиться
                </Button>
                <Button
                  key="copy"
                  size="l"
                  mode="secondary"
                  stretched
                  onClick={() => setOpen(false)}
                >
                  Скопировать приглашение
                </Button>
              </ButtonGroup>
            </React.Fragment>
          }
        >
          <Spacing size={20} />
          <UsersStack
            photos={[
              getAvatarUrl('user_mm'),
              getAvatarUrl('user_ilyagrshn'),
              getAvatarUrl('user_lihachyov'),
              getAvatarUrl('user_wayshev'),
              getAvatarUrl('user_arthurstam'),
              getAvatarUrl('user_xyz'),
            ]}
            size="l"
            visibleCount={3}
            avatarsPosition="block-start"
          >
            Алексей, Илья, Михаил
            <br />и ещё 3 человека
          </UsersStack>
        </ModalCard>
      </>
    );
  },
};
