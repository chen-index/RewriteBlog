import Vue from 'vue'
import {
  Message,
  Button,
  Container,
  Header,
  Main,
  Footer,
  Card,
  Aside,
  Form,
  FormItem,
  Input,
  Menu,
  MenuItem,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Dialog,
  Table,
  TableColumn,
  Select,
  Col,
  Row,
  Option,
  Switch,
  Pagination,
  MessageBox,
  Upload,
  Divider,
  DatePicker,
  Link,
  Avatar,
  Alert,
  Loading,
  Drawer,
  Tag,
  Image,
  Timeline,
  TimelineItem,
  Carousel,
  CarouselItem,
  Tooltip,
  Scrollbar,
  Backtop
} from 'element-ui'

Vue.use(Backtop)
Vue.use(Scrollbar)
Vue.use(Tooltip)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Image)
Vue.use(Tag)
Vue.use(Alert)
Vue.use(Drawer)
Vue.use(Loading)
Vue.use(Avatar)
Vue.use(Link)
Vue.use(DatePicker)
Vue.use(Divider)
Vue.use(Upload)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Card)
Vue.use(Footer)
Vue.use(Button)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm