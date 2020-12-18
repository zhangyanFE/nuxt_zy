import Vue from "vue";
import { Layout, Menu, List, Comment, Tooltip } from "ant-design-vue";
const { Item } = Menu;
const { Header, Footer, Content, Sider } = Layout;

Vue.use(Layout)
  .use(Sider)
  .use(Header)
  .use(Footer)
  .use(Content)
  .use(Menu)
  .use(Item)
  .use(List)
  .use(Comment)
  .use(Tooltip);
