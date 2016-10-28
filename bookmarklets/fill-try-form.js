/**
 * Fill Try Form
 */
(function(){
    var fields = {
        "trySource" : "1",
        "trysType" : "1",
        "IsPostPay" : "0",
        "DateNum" : "10",
        "IsSellYear" : "3",
        "IsTaoke" : "1",
        "Title" : "测试活动 " + new Date().toLocaleDateString(),
        "tryType" : "1",
        "cate_cid" : "10",
        "img" : "tmp/2014/09/11/16541620901329040689.jpg",
        "Img_check" : "1",
        "img_url" : "http://img1.sk0.com/",
        "GrantNum" : "10",
        "exchangeNum" : "0",
        "Price" : "50",
        "url_order" : "http://www.taobao.com",
        "url_type" : "1",
        "url" : "http://www.taobao.com",
        "Keyword" : "关键字1,关键字2",
        "tips_no_credit_card" : "1",
        "tips_no_hurrying" : "1",
        "tips_has_default_shipping" : "1",
        "tips_default_shipping" : "申通，圆通",
        "tips_has_model_limit" : "1",
        "tips_model_limit" : "男款白色 女款白色",
        "tips_has_order_price" : "1",
        "tips_before_order_price" : "10",
        "tips_after_order_price" : "10",
        "tips_has_vip_price" : "1",
        "tips_vip_price" : "10",
        "tips_has_delivery_fee_limit" : "1",
        "tips_delivery_fee_limit" : "10",
        "tips_search_keyword" : "关键字1 关键字2",
        "tips_search_order_by" : "销量",
        "tips_wangwang" : "明明亮亮",
        "tips_bundle_items[]" : ["套餐项1", "套餐项2", "套餐项3"],
        "pimg" : "tmp/2014/09/11/16541620901329040689.jpg",
        "PImg_check" : "1",
        "Intro" : "测试活动 " + new Date().toLocaleString()
    };

    var fillForm = function (form, fields) {
        var name, type,
            textVal = function (el, name) {
                if (fields[name] instanceof Array) {
                    $(el).prop('value', fields[name].shift());
                }
                else {
                    $(el).prop('value', fields[name]);
                }
                $(el).change().blur();
            },
            checkVal = function (el, name) {
                var checked = $(el).prop('checked');
                if (fields[name] instanceof Array) {
                    var i = fields[name].indexOf(el.value);
                    if (i >= 0) {
                        $(el).prop('checked', true);
                        fields[name].splice(i, 1);
                    }
                }
                else {
                    if (fields[name] == $(el).val()) $(el).prop('checked', true);
                }
                if ($(el).prop('checked') !== checked) {
                    $(el).click().click().blur();
                }
            },
            selectVal = function (el, name) {
                if (fields[name] instanceof Array) {
                    $(el).find('option').each(function(index,opt_el){
                        var i = fields[name].indexOf(opt_el.value);
                        if (i >= 0) {
                            $(el).prop('selected', true);
                            fields[name].splice(i, 1);
                            return;
                        }
                    });
                }
                else {
                    $(el).val(fields[name]);
                }
                $(el).change().blur();
            };

        var fieldsFound = {};
        $(form).find(':input').each(function (i,el) {
            name = $(el).prop('name');
            if (!name) return;
            fieldsFound[name] = 1;
            switch (el.tagName) {
                case 'INPUT':
                    type = $(el).prop('type');
                    if (!type) {
                        textVal(el, name);
                    } else {
                        switch (type) {
                            case 'text':
                            case 'date':
                            case 'password':
                            case 'number':
                            case 'hidden':
                                textVal(el, name);
                                break;
                            case 'checkbox':
                            case 'radio':
                                checkVal(el, name);
                                break;
                            default:
                                console.log('处理input[name=' + name + ']时遇到未知的type：' + type);
                                break;
                        }
                    }
                    break;
                case 'TEXTAREA':
                    textVal(el, name);
                    break;
                case 'SELECT':
                    selectVal(el, name);
                    break;
                case 'BUTTON':
                    break;
            }
        });
        Object.keys(fields).forEach(function(v) {
            if (fieldsFound[v] === undefined) {
                console.log('找不到字段：' + v);
                return;
            }
        });
    };
    fillForm($('#trysMesFrom'), fields);
})();
