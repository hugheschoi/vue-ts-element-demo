import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class CommonMixins extends Vue {
    public paginations = {
        pageSize: 20,
        total: 0,
        currentPage: 1,
    };
    public handleChangePageSize(pageSize: number, cb: () => void) {
        this.paginations.pageSize = pageSize;
        cb();
    }
    public handleChangePageNum(currentPage: number, cb: () => void) {
        this.paginations.currentPage = currentPage;
        cb();
    }
}
