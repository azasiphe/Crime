<template>
  <div class="bodBack">
    <div class="profile" v-if="user">
      <div class="single">
        <div class="container p-0 justify-content-center">
          <div class="row">
            <!-- Profile Info (Image and Name) on Right -->
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <div class="card text-center sidebar">
                <div class="card-body">
                  <img :src="user.userUrl" alt="Profile Image" class="my-4">
                  <h3 class="my-4">{{ user.firstName }} {{ user.lastName }}</h3>
                </div>
              </div>
            </div>

            <!-- Edit Form (Inputs) on Left -->
            <div class="col-md-6">
              <div class="container about">
                <div class="inputs">
                  <h1>Profile</h1>
                  <form autocomplete="off" @submit.prevent="editUser" method="POST">
                    <div class="form-group">
                      <label for="Name">Name</label>
                      <input class="form-control" id="Name" type="text" v-model="user.firstName" required>
                    </div>
                    <div class="form-group">
                      <label for="LastName">Last Name</label>
                      <input class="form-control" id="LastName" type="text" v-model="user.lastName" required>
                    </div>
                    <div class="form-group">
                      <label for="ProfileImage">Profile Image URL</label>
                      <input class="form-control" id="ProfileImage" type="text" v-model="user.userUrl" required>
                    </div>
                    <div class="modal-footer">
                      <a @click="deleteMyUser(user.userID)" class="logBut bg-white my-3 p-2" style="border: 1px solid #040B13;">Delete</a>
                      <button type="submit" class="btn btn-dark" id="submit">Save Changes</button>
                    </div>
                  </form>
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
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    async editUser() {
      await this.$store.dispatch('editUser', this.user);
    },
    async deleteMyUser(userID) {
      await this.$store.dispatch('deleteMyUser', userID);
    },
  },
  created() {
    this.$store.dispatch('getUsers');
  },
};
</script>
  
  <style scoped>
  .bodBack {
    background-color: #040B13 !important;
    min-height: 100vh;
    width: auto;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .profile {
    background-color: rgb(90, 292, 395);
    height: 50%;
    width: 60%;
    justify-content: center;
    align-items: center;
    display: flex;
    
    padding-top: 10px;
    min-height: 70vh;
  }
  
  .card-body img {
    margin: 20px;
    margin-top: 15px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  
  .logBut {
    text-align: center;
    text-decoration: none;
    min-width: 100px !important;
    color: #040B13;
  }
  
  .logBut:hover {
    cursor: pointer;
    color: #040B13;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    .profile {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  </style>