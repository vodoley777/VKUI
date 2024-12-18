Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](#/SplitLayout).

В Алертах особое внимание нужно уделить кнопкам. Всего есть три типа кнопок:
`cancel`, `destructive` и `default`.

Типом `cancel` нужно подсветить действие, возвращающее пользователя к
состоянию, когда алерт был закрыт. Пользователь кликнет по нему в случае, когда он открыл алерт для
совершения какого-то действия и передумал.

Стиль `destructive` используется в случае, когда действие влечёт за собой какие-то деструктивные последствия:
удаление, разжалование и т.д.

Во всех остальных случаях используйте стиль `default`.

Кнопки могут быть ссылками (передайте `href`) или другим компонентом (передайте `Component`).

> **Важно:**
>
> 1. Кнопка со стилем `cancel` должна быть одна на алерт.
> 2. Кнопку со стилем `cancel` нужно располагать либо слева, либо снизу, в зависимости от выбранного `actionsLayout`.
> 3. В Android версии игнорируется стили `cancel` и `destructive`, и жирность всех кнопок одинаковая.
> 4. В VKCOM версии возможно только горизонтальное расположение кнопок.
> 5. Порядок кнопок должен быть одинаковым на всех платформах (см. пункт 2).

```jsx { "props": { "layout": false, "adaptivity": true } }
const Example = () => {
  const [popout, setPopout] = React.useState(null);
  const [actionsLog, setActionsLog] = React.useState([]);

  const addActionLogItem = (value) => {
    setActionsLog([...actionsLog, value]);
  };

  const closePopout = () => {
    setPopout(null);
  };

  const openAction = () => {
    setPopout(
      <Alert
        actions={[
          {
            title: 'Лишить права',
            mode: 'destructive',
            action: () => addActionLogItem('Право на модерацию контента убрано.'),
          },
          {
            title: 'Отмена',
            mode: 'cancel',
          },
        ]}
        actionsLayout="vertical"
        onClose={closePopout}
        title="Подтвердите действие"
        description="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
      />,
    );
  };

  const openDeletion = () => {
    setPopout(
      <Alert
        actions={[
          {
            title: 'Отмена',
            mode: 'cancel',
          },
          {
            title: 'Удалить',
            mode: 'destructive',
            action: () => addActionLogItem('Документ удален.'),
          },
        ]}
        actionsLayout="horizontal"
        dismissButtonMode="inside"
        onClose={closePopout}
        title="Удаление документа"
        description="Вы уверены, что хотите удалить этот документ?"
      />,
    );
  };

  React.useEffect(() => {
    openDeletion();
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel="alert">
          <Panel id="alert">
            <PanelHeader>Alert</PanelHeader>
            <Group>
              <CellButton onClick={openAction}>Лишить права</CellButton>
              <CellButton onClick={openDeletion}>Удалить документ</CellButton>
              {actionsLog.map((value, i) => (
                <Div key={i}>{value}</Div>
              ))}
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

<Example />;
```

## renderAction

```jsx { "props": { "layout": false, "adaptivity": true } }
const renderAction = ({ mode, ...restProps }) => {
  return <Button mode={mode === 'cancel' ? 'secondary' : 'primary'} size="m" {...restProps} />;
};

const Example = () => {
  const [popout, setPopout] = React.useState(null);

  const closePopout = () => {
    setPopout(null);
  };

  const openAction = () => {
    setPopout(
      <Alert
        actions={[
          {
            title: 'Лишить права',
            mode: 'destructive',
          },
          {
            title: 'Отмена',
            mode: 'cancel',
          },
        ]}
        actionsAlign="left"
        actionsLayout="horizontal"
        renderAction={renderAction}
        onClose={closePopout}
        title="Подтвердите действие"
        description="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
      />,
    );
  };

  React.useEffect(() => {
    openAction();
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel="alert">
          <Panel id="alert">
            <PanelHeader>Alert</PanelHeader>
            <Group>
              <CellButton onClick={openAction}>Лишить права</CellButton>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

<Example />;
```
