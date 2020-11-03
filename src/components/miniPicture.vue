<template>
  <div class="minisizepic">
    <div class="content">
      <div class="container">
        <div class="row m-auto">

          <div class="item col col-4 col-lg-2 col-md-3"
          v-for="item in minipic.pictures" :key="item.id" @click="openModal(item.id)">
            <div class="pic">
              <img :src="item.photo">
            </div>
            <div class="icon">
              <i class="fas fa-search-plus"></i>
            </div>
          </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal"
            tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">

                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ picture.name }}</h5>
                    <button type="button" class="close" @click.prevent="closeModal(picture.id)">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div class="modal-body">
                    <loading :active.sync="isLoading"></loading>
                    <div class="pic">
                      <img :src="picture.photo">
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                    @click.prevent="closeModal(picture.id)">關閉</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    MiniPicture: {
      type: Object,
      default: () => ({
        title: 'Mini Picture',
        pictures: [
          {
            name: 'one',
            photo: 'https://picsum.photos/800/800?random=1',
            id: 1,
          },
          {
            name: 'two',
            photo: 'https://picsum.photos/800/800?random=2',
            id: 2,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=3',
            id: 3,
          },
          {
            name: 'one',
            photo: 'https://picsum.photos/800/800?random=4',
            id: 4,
          },
          {
            name: 'two',
            photo: 'https://picsum.photos/800/800?random=5',
            id: 5,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=6',
            id: 6,
          },
          {
            name: 'one',
            photo: 'https://picsum.photos/800/800?random=7',
            id: 7,
          },
          {
            name: 'two',
            photo: 'https://picsum.photos/800/800?random=8',
            id: 8,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=9',
            id: 9,
          },
          {
            name: 'one',
            photo: 'https://picsum.photos/800/800?random=10',
            id: 10,
          },
          {
            name: 'two',
            photo: 'https://picsum.photos/800/800?random=11',
            id: 11,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=12',
            id: 12,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=13',
            id: 13,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=14',
            id: 14,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=15',
            id: 15,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=16',
            id: 16,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=17',
            id: 17,
          },
          {
            name: 'three',
            photo: 'https://picsum.photos/800/800?random=18',
            id: 18,
          },
        ],
      }),
    },
  },
  data() {
    return {
      minipic: this.MiniPicture,
      picture: {},
      isLoading: false,
    };
  },
  methods: {
    openModal(id) {
      this.picture = this.minipic.pictures[`${id}` - 1];
      this.isLoading = false;
      $('#exampleModal').modal('show');
      // console.log(id + this.picture.photo);
    },
    closeModal(id) {
      this.picture = {};
      $('#exampleModal').modal('hide');
      console.log(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap";

.minisizepic {
  .content {
    // padding: 50px 0;
    .container {
      .row {
        // padding: 15px;
        .item {
          padding: 0;
          position: relative;
          cursor: pointer;
          .pic {
            margin: 2px;
            height: 150px;
            overflow: hidden;
            img {
              height: 100%;
              width: 100%;
              vertical-align: middle;
              object-fit: cover;
              transition: 0.3s linear;
            }
          }
          .icon {
            color: #fff;
            text-shadow: 0px 0px 5px #666;
            font-size: 2rem;
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            left: 0;
            bottom: 0;
            // background-color: rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: 0.3s;
          }
        }
        .item:hover .icon{
          opacity: 1;
        }
        .item:hover img{
          transform: scale(1.2);
        }
        .modal-content,.modal-dialog{
          max-width: 600px;
          .modal-body{
            .pic{
              width:100%;
              img{
                max-width:100%;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px){
  .minisizepic {
    .content {
      .container {
        .row {
          padding: 0;
        }
      }
    }
  }
}
</style>
