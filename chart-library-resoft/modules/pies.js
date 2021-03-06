import _ from 'lodash'
import chartDataFormate from './chartDataFormate'

var pieLabelCommonOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
        show: true
    },
    legend: {
        show: false,
        orient: 'horizontal',
        x: '10%',
        data: [],
        bottom: "20px",
        show: true,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
    },
    series: [{
        name: "",
        type: 'pie',
        radius: '45%',
        center: ['50%', '45%'],
        labelLine: {
            normal: {
                length: 15,
                length2: 15,
                lineStyle: {
                    type: 'solid'
                }
            }
        }

    }]
}

var pieLabelCommonOption1 = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
        show: true
    },
    legend: {
        width: '50%',
        show: false,
        orient: 'horizontal',
        x: '10%',
        data: [],
        bottom: "20px",
        show: true,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
    },
    series: [{
        name: "",
        type: 'pie',
        roseType: 'radius',
        radius: '45%',
        center: ['50%', '45%'],
        labelLine: {
            normal: {
                length: 15,
                length2: 15,
                lineStyle: {
                    type: 'solid'
                }
            }
        },
        label: {
            normal: {
                formatter: function (params) {
                    return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} '
                },
                align: 'center',
                // padding: [0, -56],
                // height: 66,
                rich: {
                    b: {
                        fontSize: 14,
                        lineHeight: 20,
                        // color: '#fff',
                    },
                    c: {
                        fontSize: 18,
                        //lineHeight:20,
                        // color: '#fff'
                    }

                }
            }
        }
    }]
}

var pieLegendCommonOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d} %',
    },

    series: [{
        name: "",
        type: 'pie',
        radius: '45%',
        center: ['50%', '30%'],
        label: {
            normal: {
                show: false
            }
        },
    }]
}

var pieRingLabelCommonOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
        show: true
    },

    legend: {
        orient: 'horizontal',
        x: '10%',
        data: [],
        bottom: "40px",
        show: true,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
    },
    series: [{
        name: "",
        type: 'pie',
        radius: ['35%', '45%'],
        center: ['50%', '45%'],
        label: {
            normal: {
                formatter: function (params) {
                    return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} '
                },
                align: 'center',
                // padding: [0, -56],
                // height: 60,
                rich: {
                    b: {
                        fontSize: 14,
                        lineHeight: 20,
                        // color: '#fff',
                    },
                    c: {
                        fontSize: 18,
                        //lineHeight:20,
                        // color: '#fff'
                    }

                }
            }
        }
    }]
}

var pieRingLegendCommonOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'horizontal',
        data: [],
        show: true,
        icon: 'circle',
        bottom: 30,
        height: "25%",
        itemWidth: 8,
        itemHeight: 8,
        padding: 20,
        formatter: function (name) {
            let oa = pieRingLegendCommonOption.series[0].data;
            let total = 0;
            oa.forEach(function (item, index) {
                total += item.value;
            });
            for (let i = 0; i < oa.length; i++) {
                if (name == oa[i].name) {
                    return name + '  ' + (oa[i].value / total * 100).toFixed(2) + '%';
                }
            }
        },
    },
    series: [{
        name: "",
        type: 'pie',
        radius: ['35%', '45%'],
        center: ['50%', '30%'],
        label: {
            normal: {
                show: false
            }
        },
    }]
}
var pieRightLegendCommonOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d} %',
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        // data: [],
        top: "center",
        show: true,
        icon: 'circle',
        // itemWidth: 8,
        // itemHeight: 8,
    },
    series: [{
        name: "",
        type: 'pie',
        radius: '45%',
        center: ['30%', '50%'],
        label: {
            normal: {
                show: false
            }
        },
    }]
}

var pieRightLegendCommonOption1 = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d} %',
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        // data: [],
        top: "center",
        show: true,
        icon: 'circle',
    },
    series: [{
        name: "",
        type: 'pie',
        radius: ['35%', '45%'],
        center: ['30%', '50%'],
        label: {
            normal: {
                show: false
            }
        },
    }]
}

var pieRoseCommonOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'horizontal',
        data: [],
        show: true,
        icon: 'circle'
    },
    series: [{
        name: "",
        type: "pie",
        radius: ["44%", "63%"],
        center: ["50%", "50%"],
        roseType: "radius",
        label: {
            show: false
        },
        emphasis: {
            label: {
                show: false
            }
        },
    }]
}



// ???label?????????
var pieLabel = function (obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var option = {
                legend: {
                    show: false,
                    icon: 'circle',
                    itemWidth: 8,
                    itemHeight: 8,
                    data: pie_datas.category
                },
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    // radius:obj.radius || '50%',
                    roseType:obj.roseType,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} '
                            },
                            align: 'center',
                            // padding: [0, -56],
                            // height: 66,
                            rich: {
                                b: {
                                    fontSize: 14,
                                    lineHeight: 20,
                                    color: _self.pieLabelColor
                                },
                                c: {
                                    fontSize: 18,
                                    //lineHeight:20,
                                    color: _self.pieLabelColor
                                }

                            }
                        }
                    }
                }]
            };
            var pieOptions = _.merge(pieLabelCommonOption, option);
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

var pieLabel1 = function (obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var option = {
                legend: {
                    show: false,
                    icon: 'circle',
                    itemWidth: 8,
                    itemHeight: 8,
                    data: pie_datas.category
                },
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    // radius:obj.radius || '50%',
                    roseType:obj.roseType,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} '
                            },
                            align: 'center',
                            // padding: [0, -56],
                            // height: 66,
                            rich: {
                                b: {
                                    fontSize: 14,
                                    lineHeight: 20,
                                    color: _self.pieLabelColor
                                },
                                c: {
                                    fontSize: 18,
                                    //lineHeight:20,
                                    color: _self.pieLabelColor
                                }

                            }
                        }
                    }
                }]
            };
            var pieOptions = _.merge(pieLabelCommonOption1, option);
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

// ????????????????????????
var pieLegend = function (obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            console.log(obj,5555555)
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var seData = pie_datas.data
            var category = pie_datas.category
            var data1 = seData.filter(function (item, index) {
                if (index < (seData.length / 2)) {
                    return item
                }
            })
            var category1 = category.filter(function (item, index) {
                if (index < (category.length / 2)) {
                    return item
                }
            })
            var data2 = seData.filter(function (item, index) {
                if (index >= (seData.length / 2)) {
                    return item
                }
            })
            var category2 = category.filter(function (item, index) {
                if (index >= (category.length / 2)) {
                    return item
                }
            })
            var option = {
                legend: [{
                    left: (document.getElementById(_self.id).offsetWidth) / 2 - 150,
                    orient: 'vertical',
                    data: category1,
                    show: true,
                    icon: 'circle',
                    top: '60%',
                    itemGap: 15,
                    padding: 20,
                    itemWidth: 8,
                    itemHeight: 8,
                    formatter: function (name) {
                        let oa = pie_datas.data;
                        let total = 0;
                        oa.forEach(function (item, index) {
                            total += item.value;
                        });
                        for (let i = 0; i < data1.length; i++) {
                            if (name == data1[i].name) {
                                return name + '  ' + (data1[i].value / total * 100).toFixed(2) + '%';
                            }
                        }
                    },
                }, {
                    left: (document.getElementById(_self.id).offsetWidth) / 2,
                    orient: 'vertical',
                    data: category2,
                    show: true,
                    icon: 'circle',
                    top: '60%',
                    itemGap: 15,
                    padding: 20,
                    itemWidth: 8,
                    itemHeight: 8,
                    formatter: function (name) {
                        let oa = pie_datas.data;
                        let total = 0;
                        oa.forEach(function (item, index) {
                            total += item.value;
                        });
                        for (let i = 0; i < data2.length; i++) {
                            if (name == data2[i].name) {
                                return name + '  ' + (data2[i].value / total * 100).toFixed(2) + '%';
                            }
                        }
                    },
                }],
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    roseType:obj.roseType,
                }]
            };
            var pieOptions = _.merge(pieLegendCommonOption, option);
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

// ???label????????????
var pieRingLabel = function (obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var option = {
                legend: {
                    show: false,
                    icon: 'circle',
                    itemWidth: 8,
                    itemHeight: 8,
                    data: pie_datas.category
                },
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    // radius:obj.radius || '50%',
                    roseType:obj.roseType,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} '
                            },
                            align: 'center',
                            // padding: [0, -56],
                            // height: 66,
                            rich: {
                                b: {
                                    fontSize: 14,
                                    lineHeight: 20,
                                    color: _self.pieLabelColor
                                },
                                c: {
                                    fontSize: 18,
                                    //lineHeight:20,
                                    color: _self.pieLabelColor
                                }

                            }
                        }
                    }
                }]
            };
            var pieOptions = _.merge(pieRingLabelCommonOption, option);
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

// ???????????????????????????
var pieRingLegend = function (obj) {
    console.log(this)
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var seData = pie_datas.data
            var category = pie_datas.category
            var data1 = seData.filter(function (item, index) {
                if (index < (seData.length / 2)) {
                    return item
                }
            })
            var category1 = category.filter(function (item, index) {
                if (index < (category.length / 2)) {
                    return item
                }
            })
            var data2 = seData.filter(function (item, index) {
                if (index >= (seData.length / 2)) {
                    return item
                }
            })
            var category2 = category.filter(function (item, index) {
                if (index >= (category.length / 2)) {
                    return item
                }
            })
            var option = {
                legend: [{
                    left: (document.getElementById(_self.id).offsetWidth) / 2 - 150,
                    orient: 'vertical',
                    data: category1,
                    show: true,
                    icon: 'circle',
                    top: '60%',
                    itemGap: 15,
                    padding: 20,
                    itemWidth: 8,
                    itemHeight: 8,
                    formatter: function (name) {
                        let oa = pie_datas.data;
                        let total = 0;
                        oa.forEach(function (item, index) {
                            total += item.value;
                        });
                        for (let i = 0; i < data1.length; i++) {
                            if (name == data1[i].name) {
                                return name + '  ' + (data1[i].value / total * 100).toFixed(2) + '%';
                            }
                        }
                    },
                }, {
                    left: (document.getElementById(_self.id).offsetWidth) / 2,
                    orient: 'vertical',
                    data: category2,
                    show: true,
                    icon: 'circle',
                    top: '60%',
                    itemGap: 15,
                    padding: 20,
                    itemWidth: 8,
                    itemHeight: 8,
                    formatter: function (name) {
                        let oa = pie_datas.data;
                        let total = 0;
                        oa.forEach(function (item, index) {
                            total += item.value;
                        });
                        for (let i = 0; i < data2.length; i++) {
                            if (name == data2[i].name) {
                                return name + '  ' + (data2[i].value / total * 100).toFixed(2) + '%';
                            }
                        }
                    },
                }],
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    roseType:obj.roseType,
                }]
            };
            var pieOptions = _.merge(pieRingLegendCommonOption, option);
            console.log(444, pieOptions)
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

// ???????????????????????????
var pieRightLegend = function (obj) {
    console.log(this)
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var seData = pie_datas.data
            var category = pie_datas.category
            var option = {
                legend: [{
                    right: "5%",
                    orient: 'vertical',
                    data: category,
                    show: true,
                    icon: 'circle',
                    top: 'center',
                    itemGap: 10,
                    padding: 30,
                    itemWidth: 8,
                    itemHeight: 8,
                    formatter: function (name) {
                        let oa = pie_datas.data;
                        let total = 0;
                        oa.forEach(function (item, index) {
                            total += item.value;
                        });
                        for (let i = 0; i < seData.length; i++) {
                            if (name == seData[i].name) {
                                return name + '  ' + (seData[i].value / total * 100).toFixed(2) + '%';
                            }
                        }
                    },
                }],
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    roseType:obj.roseType,
                }]
            };
            var pieOptions = _.merge(pieRightLegendCommonOption, option);
            console.log(444, pieOptions)
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

// ???????????????????????????
var pieRightLabel = function (obj) {
    console.log(this)
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var seData = pie_datas.data
            var category = pie_datas.category
            var option = {
                legend: [{
                    right: "5%",
                    orient: 'vertical',
                    data: category,
                    show: true,
                    icon: 'circle',
                    top: 'center',
                    itemGap: 10,
                    padding: 30,
                    itemWidth: 8,
                    itemHeight: 8,
                    formatter: function (name) {
                        let oa = pie_datas.data;
                        let total = 0;
                        oa.forEach(function (item, index) {
                            total += item.value;
                        });
                        for (let i = 0; i < seData.length; i++) {
                            if (name == seData[i].name) {
                                return name + '  ' + (seData[i].value / total * 100).toFixed(2) + '%';
                            }
                        }
                    },
                }],
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    roseType:obj.roseType,
                }]
            };
            var pieOptions = _.merge(pieRightLegendCommonOption1, option);
            console.log(444, pieOptions)
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}

var pieRose = function (obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var option = {
                legend: {
                    show: false,
                    icon: 'circle',
                    itemWidth: 8,
                    itemHeight: 8,
                    data: pie_datas.category
                },
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    // radius:obj.radius || '50%',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '{c|' + params.percent.toFixed(0) + '%}\n' + '{b|' + params.name + '} '
                            },
                            align: 'center',
                            // padding: [0, -56],
                            // height: 66,
                            rich: {
                                b: {
                                    fontSize: 14,
                                    lineHeight: 20,
                                    color: _self.pieLabelColor
                                },
                                c: {
                                    fontSize: 18,
                                    //lineHeight:20,
                                    color: _self.pieLabelColor
                                }

                            }
                        }
                    }
                }]
            };
            var pieOptions = _.merge(pieRoseCommonOption, option);
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}
var pieRoseLegend = function (obj) {
    var _self = this;
    var data = this.initData(obj)
    var fn = (function (obj) {
        return function () {
            var pie_datas = chartDataFormate.FormateNOGroupData(data);
            var seData = pie_datas.data
            var category = pie_datas.category
            var data1 = seData.filter(function (item, index) {
                if (index < (seData.length / 2)) {
                    return item
                }
            })
            var category1 = category.filter(function (item, index) {
                if (index < (category.length / 2)) {
                    return item
                }
            })
            var data2 = seData.filter(function (item, index) {
                if (index >= (seData.length / 2)) {
                    return item
                }
            })
            var category2 = category.filter(function (item, index) {
                if (index >= (category.length / 2)) {
                    return item
                }
            })
            var option = {
                legend: [{
                    left: (document.getElementById(_self.id).offsetWidth) / 2 - 150,
                    orient: 'vertical',
                    data: category1,
                    show: true,
                    icon: 'circle',
                    top: '60%',
                    itemGap: 15,
                    padding: 20,
                    itemWidth: 8,
                    itemHeight: 8,
                    formatter: function (name) {
                        let oa = pie_datas.data;
                        let total = 0;
                        oa.forEach(function (item, index) {
                            total += item.value;
                        });
                        for (let i = 0; i < data1.length; i++) {
                            if (name == data1[i].name) {
                                return name + '  ' + (data1[i].value / total * 100).toFixed(2) + '%';
                            }
                        }
                    },
                }, {
                    left: (document.getElementById(_self.id).offsetWidth) / 2,
                    orient: 'vertical',
                    data: category2,
                    show: true,
                    icon: 'circle',
                    top: '60%',
                    itemGap: 15,
                    padding: 20,
                    itemWidth: 8,
                    itemHeight: 8,
                    formatter: function (name) {
                        let oa = pie_datas.data;
                        let total = 0;
                        oa.forEach(function (item, index) {
                            total += item.value;
                        });
                        for (let i = 0; i < data2.length; i++) {
                            if (name == data2[i].name) {
                                return name + '  ' + (data2[i].value / total * 100).toFixed(2) + '%';
                            }
                        }
                    },
                }],
                series: [{
                    name: obj.name || "",
                    data: pie_datas.data,
                    roseType: "radius",
                }]
            };
            var pieOptions = _.merge(pieRoseLegendCommonOption, option);
            console.log(444, pieOptions)
            _self.renderChart(pieOptions)
            _self._next()
        }
    })(obj)
    this.tasks.push(fn);
    return this;
}
export default {
    pieLabel: pieLabel,
    pieLabel1: pieLabel1,
    pieRose: pieRose,
    pieRoseLegend: pieRoseLegend,
    pieLegend: pieLegend,
    pieRightLegend:pieRightLegend,
    pieRightLabel:pieRightLabel,
    pieRingLabel: pieRingLabel,
    pieRingLegend: pieRingLegend
}