import { useLocation, useNavigate } from 'react-router-dom';
import { Nav } from '@douyinfe/semi-ui';
import {
  IconPhoneStroke,
  IconCreditCard,
  IconUser,
  IconUserAdd,
} from '@douyinfe/semi-icons';
import { FC, useEffect, useMemo, useState } from 'react';
import { OnSelectedData } from '@douyinfe/semi-ui/lib/es/navigation';
import useMediaQuery from '@/store/mediaQuery';
import { useCustomizeLocale } from '@/components/LocaleGlobal';

const Menus: FC<{ onChange?: () => void }> = ({ onChange }) => {
  const [selectedKeys, setSelectedKeys] = useState<any>(['overview']);
  const [openKeys, setOpenKeys] = useState<any>([]);
  const {
    value: [isMobile, isTablet],
  } = useMediaQuery();

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isTablet) setIsCollapsed(true);
  }, [isTablet]);

  const navigate = useNavigate();
  const locale = useCustomizeLocale();

  const originItems: any[] = useMemo(
    () => [
      // {
      //   itemKey: 'overview',
      //   text: '预览',
      //   path: '/',
      //   icon: <IconPieChart2Stroked />,
      // },
      {
        itemKey: 'newly',
        text: locale?.routes.newly,
        path: '/newly',
        icon: <IconUserAdd />,
      },
      {
        itemKey: 'active',
        text: locale?.routes.active,
        path: '/active',
        icon: <IconUser />,
      },

      {
        itemKey: 'device',
        text: locale?.routes.device,
        path: '/device',
        icon: <IconPhoneStroke />,
      },

      {
        itemKey: 'currency',
        text: locale?.routes.currency,
        path: '/currency',
        icon: <IconCreditCard />,
      },

      {
        itemKey: 'distribution',
        text: '活跃分布',
        path: '/distribution',
        icon: <IconUser />,
      },

      // {
      //   itemKey: 'lost',
      //   text: '流失分析',
      //   icon: <IconEyeClosedSolid />,
      //   items: [
      //     {
      //       itemKey: 'lostUser',
      //       text: '流出用户',
      //       path: '/lostUser',
      //     },
      //     {
      //       itemKey: 'backUser',
      //       text: '回流用户',
      //       path: '/backUser',
      //     },
      //   ],
      // },
    ],
    [locale],
  );

  const items = useMemo(() => {
    // TODO 权限接口过滤菜单
    return originItems;
  }, [originItems]);

  const location = useLocation();

  useEffect(() => {
    const itemKey = location.pathname.split('/')[1];
    if (itemKey) {
      setSelectedKeys([itemKey]);

      const matchParent = items.find((parent) => {
        return (
          parent.items?.length &&
          parent.items.find((item: any) => item.itemKey === itemKey)
        );
      });

      if (matchParent?.itemKey) setOpenKeys([matchParent.itemKey]);
    } else {
      navigate('/');
    }
  }, [items]);

  return (
    <div
      className="bg-white dark:bg-gray-100 shadow-sm"
      style={{ width: isCollapsed ? 60 : 240, height: `calc(100vh - 80px)` }}
    >
      <Nav
        isCollapsed={isCollapsed}
        onCollapseChange={setIsCollapsed}
        openKeys={openKeys}
        onOpenChange={({ openKeys }) => setOpenKeys(openKeys)}
        selectedKeys={selectedKeys}
        items={items}
        onSelect={(data: OnSelectedData) => {
          setSelectedKeys(data.selectedKeys);
          // @ts-ignore
          if (data.selectedItems[0]?.path) navigate(data.selectedItems[0].path);
        }}
        onClick={(data: any) => {
          document.title = data.text || 'BI 数据后台';
          onChange && onChange();
        }}
        style={{ height: '100%' }}
        bodyStyle={{
          overflowY: 'auto',
          height: isMobile ? `calc(100vh - 56px)` : `calc(100vh - 160px)`,
        }}
        footer={{
          collapseButton: !isMobile,
        }}
      />
    </div>
  );
};

export default Menus;
