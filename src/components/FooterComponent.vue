<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-logo">
          <img src="../assets/image/logo_white.svg" alt="How享營" />
        </div>
        <div class="footer-link">
          <div class="footer-link-block">
            <h4>找地區</h4>
            <ul>
              <li><router-link to="/">北部</router-link></li>
              <li><router-link to="/">中部</router-link></li>
              <li><router-link to="/">南部</router-link></li>
              <li><router-link to="/">東部</router-link></li>
              <li><router-link to="/">離島</router-link></li>
            </ul>
          </div>
          <div class="footer-link-block">
            <h4>找特色</h4>
            <ul>
              <li><router-link to="/">有雨棚</router-link></li>
              <li><router-link to="/">賞雲海</router-link></li>
              <li><router-link to="/">賞櫻花</router-link></li>
              <li><router-link to="/">近市區</router-link></li>
            </ul>
          </div>
          <div class="footer-link-block">
            <h4>找朋友</h4>
            <ul>
              <li><router-link to="/">大草皮</router-link></li>
              <li><router-link to="/">少帳包區</router-link></li>
              <li><router-link to="/">親子</router-link></li>
              <li><router-link to="/">寵物友善</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>Copyright© By Chi</p>
        <p>此網頁為個人練習用作品</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $primary;

  &-main {
    display: flex;
    flex-wrap: wrap-reverse;
    padding: 2rem 0 1rem;
    margin: 0 auto;
    width: 83.3333%;

    @include lg {
      flex-wrap: nowrap;
      align-items: center;
      padding: 4rem 0 2rem;
    }
  }

  &-logo {
    padding: 2rem;
    width: 100%;

    @include lg {
      padding: 0 2.5rem 0 0;
      width: 25%;
    }
  }

  &-link {
    @include lg {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
    }

    &-block {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.5rem;

      @include lg {
        display: block;
        margin-bottom: 0;
      }
    }

    h4 {
      margin-right: 1rem;
      font-size: 24px;
      font-weight: 700;
      color: $white;
      flex-shrink: 0;

      @include lg {
        margin-right: 0;
        margin-bottom: 1rem;
        text-align: center;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem 1.5rem;

      @include lg {
        display: block;
        text-align: center;

        li + li {
          margin-top: 1.5rem;
        }
      }
    }

    a {
      color: $white;
      font: 20px;

      @include lg {
        position: relative;
        font-size: 24px;

        &::after {
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: $white;
          transition: 0.3s;
          content: "";
        }

        &:hover::after {
          left: 0;
          width: 100%;
        }
      }
    }
  }

  &-copyright {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem;
    border-top: 1px solid $white;
    text-align: center;

    @include lg {
      column-gap: 2rem;
    }

    p {
      position: relative;
      width: 100%;
      font-size: 14px;
      color: $white;

      @include lg {
        width: auto;
        font-size: 16px;

        &:first-child::after {
          position: absolute;
          right: -1rem;
          width: 1px;
          height: 100%;
          background-color: $white;
          content: "";
        }
      }
    }
  }
}
</style>
