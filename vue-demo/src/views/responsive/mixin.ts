import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class CommonMixins extends Vue{
    public paginations = {
        pageSize: 20,
        total: 0,
        currentPage: 1,
    }
    handleChangePageSize (pageSize: number, cb: Function) {
        this.paginations.pageSize = pageSize;
        cb();
    }
    handleChangePageNum (currentPage: number, cb: Function) {
        this.paginations.currentPage = currentPage;
        cb();
    }
}
