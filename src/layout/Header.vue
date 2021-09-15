<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Surveyther
      </router-link>

      <!-- <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover> -->

    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="/"
          target="_blank"
        >
          <!-- <i class="now-ui-icons arrows-1_cloud-download-93"></i> -->
          <p>About</p>
        </a>
      </li>
      <!-- <drop-down
        tag="li"
        title="서베이참여"
        icon="now-ui-icons files_paper"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> 부동산
        </nav-link>
        <a
          href="/"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down> -->

      <drop-down
              tag="li"
              title="서베이참여"
              icon="now-ui-icons files_paper"
              class="nav-item"
      >
        <nav-link to="/#">
            부동산
        </nav-link>
        <nav-link to="/#">
            유통
        </nav-link>
        <nav-link to="/#">
            식음료
        </nav-link>
        <nav-link to="/#">
            관광
        </nav-link>
        <nav-link to="/#">
            금융
        </nav-link>
        <nav-link to="/#">
            정보통신
        </nav-link>
        <nav-link to="/#">
            보건의료
        </nav-link>
        <nav-link to="/#">
            공공정책
        </nav-link>
      </drop-down>

      <drop-down
              tag="li"
              title="서베이구매"
              icon="now-ui-icons education_paper"
              class="nav-item"
      >
        <nav-link to="/#">
            부동산
        </nav-link>
        <nav-link to="/#">
            유통
        </nav-link>
        <nav-link to="/#">
            식음료
        </nav-link>
        <nav-link to="/#">
            관광
        </nav-link>
        <nav-link to="/#">
            금융
        </nav-link>
        <nav-link to="/#">
            정보통신
        </nav-link>
        <nav-link to="/#">
            보건의료
        </nav-link>
        <nav-link to="/#">
            공공정책
        </nav-link>
      </drop-down>

        <li class="nav-item">
        <a
          class="nav-link"
          href="/"
          target="_blank"
        >
        <i class="now-ui-icons objects_globe"></i>
          <p>커뮤니티</p>
        </a>
      </li>

      <drop-down
              tag="li"
              title="리워드샵"
              icon="now-ui-icons shopping_cart-simple"
              class="nav-item"
      >
        <nav-link to="/#">
            아이스크림
        </nav-link>
        <nav-link to="/#">
            커피
        </nav-link>
        <nav-link to="/#">
            베이커리
        </nav-link>
        <nav-link to="/#">
            편의점
        </nav-link>
        <nav-link to="/#">
            패스트푸드
        </nav-link>
      </drop-down>

      <drop-down
              tag="li"
              title="마이페이지"
              icon="now-ui-icons users_circle-08"
              class="nav-item"
      >
        <nav-link to="/landing">
          Landing
        </nav-link>
        <nav-link to="/login">
          Login
        </nav-link>
        <nav-link to="/profile">
          Profile
        </nav-link>
      </drop-down>

      <!-- <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_share-66"></i>
          <p>Upgrade to PRO</p>
        </a>
      </li> -->

      <drop-down
              tag="li"
              title=""
              icon="now-ui-icons ui-1_zoom-bold"
              class="nav-item"
      >
        <nav-link to="/landing">
          검색
        </nav-link>
        
      </drop-down>

    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
