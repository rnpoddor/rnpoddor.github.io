webpackJsonp([9],{

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alasql_schemas; });
/* harmony export (immutable) */ __webpack_exports__["c"] = fill_data;
/* harmony export (immutable) */ __webpack_exports__["d"] = find_inset;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(1141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AdditionsItem__ = __webpack_require__(1187);
/**
 * ### Форма добавления услуг и комплектуюущих
 * обработчики событий и модификаторы данных
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 */var ItemData=$p.cat.inserts.ItemData;// компилированный запрос для поиска настроек в ОЗУ
var alasql_schemas=$p.wsql.alasql.compile('select * from cat_scheme_settings where obj="dp.buyers_order.production"');// заполняет компонент данными
function fill_data(ref){var items=this.items=$p.enm.inserts_types.additions_groups;var dp=this.dp=$p.dp.buyers_order.create();dp.calc_order=$p.doc.calc_order.by_ref[ref];var components=this.components=new Map();items.forEach(function(v){return components.set(v,new ItemData(v,__WEBPACK_IMPORTED_MODULE_3__AdditionsItem__["a" /* default */]));});var production=dp.production,product_params=dp.product_params;// фильтруем по пустой ведущей продукции
dp._data._loading=true;dp.calc_order.production.find_rows({ordn:$p.utils.blank.guid},function(row){var characteristic=row.characteristic;var insert_type=characteristic.origin.insert_type;var cmp=components.get(insert_type);// фильтруем по типу вставки
if(!characteristic.empty()&&!characteristic.origin.empty()&&items.indexOf(insert_type)!=-1){// добавляем параметры
var elm=production.count()+1;characteristic.params.forEach(function(_ref){var param=_ref.param,value=_ref.value;product_params.add({elm:elm,param:param,value:value});});// добавляем строку продукции
production.add({characteristic:characteristic,inset:characteristic.origin,clr:characteristic.clr,len:row.len,height:row.width,quantity:row.quantity,note:row.note},false,cmp.ProductionRow);// счетчик строк данного типа
cmp.count++;}});dp._data._loading=false;}function find_inset(insert_type){if(!this._inset){this._inset=$p.cat.inserts.find({available:true,insert_type:insert_type});}return this._inset;}function mapStateToProps(state,props){return{handleCalck:function handleCalck(){var dp=this.additions.dp;return dp.calc_order.process_add_product_list(dp).then(function(ax){return Promise.all(ax);}).then(function(){dp.calc_order.production.sync_grid(props.dialog.wnd.elmnts.grids.production);});},handleCancel:function handleCancel(){props.handlers.handleIfaceState({component:'DataObjPage',name:'dialog',value:null});}};}// function mapDispatchToProps(dispatch) {
//   return {};
// }
/* harmony default export */ __webpack_exports__["b"] = (__WEBPACK_IMPORTED_MODULE_2_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */],Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps/*, mapDispatchToProps */)));

/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles__);
/**
 * ### Форма добавления услуг и комплектуюущих
 * стили оформления
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 */var styles=function styles(theme){return{paper:{minWidth:880,maxHeight:'calc(100vh - 80px)'},entered:{minHeight:120},secondary:{marginTop:-theme.spacing.unit*1.5},groupTitle:{fontWeight:'bold'},listitem:{paddingTop:theme.spacing.unit,paddingBottom:theme.spacing.unit}};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles__["withStyles"])(styles));

/***/ }),

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Additions__ = __webpack_require__(1184);
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Additions__["a" /* default */]);

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metadata_react_App_Dialog__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AdditionsGroups__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connect__ = __webpack_require__(1137);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * ### Форма добавления услуг и комплектуюущих
 * каркас компонента - визуальная глупая часть
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 */var CalcOrderAdditions=function(_Component){_inherits(CalcOrderAdditions,_Component);function CalcOrderAdditions(props,context){_classCallCheck(this,CalcOrderAdditions);var _this=_possibleConstructorReturn(this,(CalcOrderAdditions.__proto__||Object.getPrototypeOf(CalcOrderAdditions)).call(this,props,context));_this.handleOk=function(){_this.handleCalck().then(_this.handleCancel);};var handleCancel=props.handleCancel,handleCalck=props.handleCalck;_this.handleCancel=handleCancel.bind(_this);_this.handleCalck=handleCalck.bind(_this);return _this;}_createClass(CalcOrderAdditions,[{key:'render',value:function render(){var _this2=this;var handleCancel=this.handleCancel,handleCalck=this.handleCalck,handleOk=this.handleOk,props=this.props;var classes=props.classes,dialog=props.dialog;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_metadata_react_App_Dialog__["a" /* default */],{open:true,initFullScreen:true,classes:{paper:classes.paper},title:'\u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438',onClose:handleCancel,actions:[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a,{key:'ok',onClick:handleOk,color:'primary'},'\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a,{key:'calck',onClick:handleCalck,color:'primary'},'\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a,{key:'cancel',onClick:handleCancel,color:'primary'},'\u0417\u0430\u043A\u0440\u044B\u0442\u044C')]},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AdditionsGroups__["a" /* default */],{ref:function ref(el){return _this2.additions=el;},dialog:dialog}));}}]);return CalcOrderAdditions;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);CalcOrderAdditions.propTypes={classes:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,dialog:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,handlers:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,handleCalck:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,handleCancel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__connect__["b" /* default */])(CalcOrderAdditions));

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AdditionsGroup__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connect__ = __webpack_require__(1137);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * ### Форма добавления услуг и комплектуюущих
 * список групп (подоконники, услуги и т.д.)
 * Здесь есть немного работы с данными - создаём экземпляр обработки, находим варианты настроек
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 */var AdditionsGroups=function(_React$Component){_inherits(AdditionsGroups,_React$Component);function AdditionsGroups(props,context){_classCallCheck(this,AdditionsGroups);var _this=_possibleConstructorReturn(this,(AdditionsGroups.__proto__||Object.getPrototypeOf(AdditionsGroups)).call(this,props,context));_this.inset_change=function(obj,fields){var groups=_this.groups,dp=_this.dp;if(fields&&fields.inset&&obj._owner==dp.production){var group=groups.get(obj.inset.insert_type);group&&group.forceUpdate();}};_this.state={schemas:null};_this.groups=new Map();return _this;}// заполняет соответствие схем и типов вставок в state компонента
_createClass(AdditionsGroups,[{key:'fill_schemas',value:function fill_schemas(){var docs=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var schemas=new Map();var scheme_settings=$p.cat.scheme_settings;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=docs[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var doc=_step.value;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=this.items[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var item=_step2.value;if(item&&doc.name==item.name){schemas.set(item,scheme_settings.get(doc));break;}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}this.setState({schemas:schemas});}},{key:'componentWillMount',value:function componentWillMount(){__WEBPACK_IMPORTED_MODULE_4__connect__["c" /* fill_data */].call(this,this.props.dialog.ref);}},{key:'componentDidMount',value:function componentDidMount(){this.fill_schemas(Object(__WEBPACK_IMPORTED_MODULE_4__connect__["a" /* alasql_schemas */])());$p.dp.buyers_order.on('update',this.inset_change);}},{key:'componentWillUnmount',value:function componentWillUnmount(){$p.dp.buyers_order.off('update',this.inset_change);}},{key:'render',value:function render(){var _this2=this;var items=this.items,components=this.components,dp=this.dp;var _ref=this.state||{},schemas=_ref.schemas;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List___default.a,null,schemas?items.map(function(group){if(!group){return null;}var cmp=components.get(group);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AdditionsGroup__["a" /* default */],Object.assign({key:''+group.ref,ref:function ref(el){return _this2.groups.set(group,el);},dp:dp,group:group},cmp,{scheme:schemas.get(group)}));}):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItem"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItemText"],{primary:'\u0427\u0442\u0435\u043D\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u043A\u043E\u043C\u043F\u043E\u043D\u043E\u0432\u043A\u0438...'})));}}]);return AdditionsGroups;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (AdditionsGroups);AdditionsGroups.propTypes={dialog:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};

/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_AddCircleOutline__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_AddCircleOutline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_AddCircleOutline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Delete__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_transitions_Collapse__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_transitions_Collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_transitions_Collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connect__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles__ = __webpack_require__(1141);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * ### Форма добавления услуг и комплектуюущих
 * список элементов группы - конкретные подоконники, отливы и т.д.
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 */var AdditionsGroup=function(_React$Component){_inherits(AdditionsGroup,_React$Component);function AdditionsGroup(props){_classCallCheck(this,AdditionsGroup);var _this=_possibleConstructorReturn(this,(AdditionsGroup.__proto__||Object.getPrototypeOf(AdditionsGroup)).call(this,props));_initialiseProps.call(_this);_this.state={count:props.count};return _this;}_createClass(AdditionsGroup,[{key:'render',value:function render(){var _this2=this;var props=this.props,count=this.state.count,handleAdd=this.handleAdd,handleRemove=this.handleRemove;var Renderer=props.Renderer,group=props.group,dp=props.dp,classes=props.classes,scheme=props.scheme,meta=props.meta;var ref=group.ref,presentation=group.presentation;var style={flex:'initial'};if(count){style.minHeight=80+33*(count-1);//style.maxHeight = 320;
}function pieces(){return scheme.filter(dp.production).reduce(function(sum,row){return sum+row.quantity;},0);}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:style},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItem"],{disableGutters:true,className:classes.listitem},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default.a,{title:'\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443',onClick:handleAdd},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_AddCircleOutline___default.a,null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default.a,{title:'\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443',disabled:!count,onClick:handleRemove},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Delete___default.a,null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItemText"],{classes:count?{primary:classes.groupTitle}:{},primary:presentation}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItemSecondaryAction"],{className:classes.secondary},count?pieces()+' \u0448\u0442':'')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_transitions_Collapse___default.a,{'in':!!count,timeout:100,classes:{entered:classes.entered}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{height:(style.minHeight||0)+35}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Renderer,{tref:function tref(el){return _this2.tabular=el;},minHeight:style.minHeight,dp:dp,group:group,scheme:scheme,meta:meta,onRowUpdated:this.onRowUpdated,onCellSelected:this.onCellSelected}))),!count&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a,{key:'d'+ref}));}}]);return AdditionsGroup;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var _initialiseProps=function _initialiseProps(){var _this3=this;this.handleAdd=function(){var tabular=_this3.tabular,props=_this3.props;var inset=__WEBPACK_IMPORTED_MODULE_8__connect__["d" /* find_inset */].call(_this3,props.group);if(inset&&tabular){var _data=tabular.state._tabular._owner._data;_data._loading=true;var row=tabular.state._tabular.add({inset:inset,quantity:1},false,props.ProductionRow);_data._loading=false;row.value_change('inset','force',row.inset);_this3.setState({count:_this3.state.count+1});}else{$p.msg.show_msg({type:'alert-info',text:'\u041D\u0435\u0442 \u0432\u0441\u0442\u0430\u0432\u043A\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u0442\u0438\u043F\u0430 ('+props.group+')',title:'Новая строка'});}};this.handleRemove=function(){var props=_this3.props,tabular=_this3.tabular,state=_this3.state;if(tabular){var selected=tabular._grid.state.selected;var row=tabular.rowGetter(selected&&selected.hasOwnProperty('rowIdx')?selected.rowIdx:0);if(row){var calc_order_row=row.characteristic.calc_order_row;row._owner.del(row);tabular.forceUpdate();if(state.count){_this3.setState({count:state.count-1});}if(calc_order_row){calc_order_row._owner.del(calc_order_row);}}else{$p.msg.show_msg({type:'alert-info',text:'\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0440\u043E\u043A\u0443 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F ('+props.group+')',title:'Удаление строки'});}}};this.onRowUpdated=function(e,row){if(e&&e.updated.hasOwnProperty('inset')){var meta=_this3.props.meta;$p.cat.clrs.selection_exclude_service(meta.fields.clr,row.inset);if(!row.clr.empty()){var filter=meta.fields.clr.choice_params.filter(function(_ref){var name=_ref.name;return name==='ref';});if(filter.length){if(filter[0].path.in&&!filter[0].path.in.some(function(v){return v==row.clr;})){row.clr=filter[0].path.in[0];_this3.forceUpdate();}}}}};this.onCellSelected=function(e){var meta=_this3.props.meta,tabular=_this3.tabular;if(tabular&&tabular.state._columns){var column=tabular.state._columns[e.idx];var key=column.key;var row=tabular.rowGetter(e.rowIdx);var mf=meta.fields[key];if(key==='clr'){$p.cat.clrs.selection_exclude_service(mf,row.inset);}else if($p.utils.is_guid(key)){row.tune(key,mf,column);}}};};AdditionsGroup.propTypes={dp:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,group:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,scheme:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,meta:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,count:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,Renderer:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_9__styles__["a" /* default */])(AdditionsGroup));

/***/ }),

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metadata_react_TabularSection__ = __webpack_require__(442);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * ### Форма добавления услуг и комплектуюущих
 * Абстрактная строка допвставки - от неё наследуются строки подоконников, отливов и т.д.
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 *///import {FormGroup} from 'material-ui/Form';
var AdditionsItem=function(_Component){_inherits(AdditionsItem,_Component);function AdditionsItem(){_classCallCheck(this,AdditionsItem);return _possibleConstructorReturn(this,(AdditionsItem.__proto__||Object.getPrototypeOf(AdditionsItem)).apply(this,arguments));}_createClass(AdditionsItem,[{key:'render',value:function render(){var _props=this.props,dp=_props.dp,meta=_props.meta,scheme=_props.scheme,tref=_props.tref,onRowUpdated=_props.onRowUpdated,onCellSelected=_props.onCellSelected,minHeight=_props.minHeight;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_metadata_react_TabularSection__["a" /* default */],{ref:tref,_obj:dp,_meta:meta,_tabular:'production',scheme:scheme,onRowUpdated:onRowUpdated,onCellSelected:onCellSelected,minHeight:minHeight,hideToolbar:true});}}]);return AdditionsItem;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (AdditionsItem);AdditionsItem.propTypes={dp:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,scheme:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,meta:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,tref:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,onRowUpdated:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,onCellSelected:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,minHeight:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number};

/***/ })

});
//# sourceMappingURL=9.11b5ca53.chunk.js.map