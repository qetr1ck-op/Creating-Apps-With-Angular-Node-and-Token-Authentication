function HomeController(api, ngToast) {
  'ngInject';
  this.$onInit = () => {
    api.jobs().getList()
      .then(jobs => {
        this.jobs = jobs;
      })
      .catch(err => {
        ngToast.create({
          className: 'warning',
          content: err.data.message
        });
      })
  }
}

export default HomeController;
