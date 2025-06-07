const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1505s/",
            name: "springboot1505s",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1505s/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学校园二手书籍拍卖小程序"
        } 
    }
}
export default base
