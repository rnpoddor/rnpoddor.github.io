webpackJsonp([12],{

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["exec_dxf"] = exec_dxf;
/**
 * ### Осуществляет экспорт в dxf
 * Created by Evgeniy Malyarov on 24.11.2017.
 */function exec_dxf(scheme,Drawing){var d=new Drawing();var contours=scheme.contours,bounds=scheme.bounds,ox=scheme.ox;var glasses=scheme.selected_glasses();var h=bounds.height+bounds.y;// имя будущего файла
var name=ox.prod_name(true).replace(/\//,'-');name=name.substr(0,name.indexOf('/'));function export_path(src){var path=src.path.clone(false);var prev=void 0;path.flatten(0.5);path.curves.forEach(function(_ref,index){var point1=_ref.point1,point2=_ref.point2;if(!prev){prev=point1;}if(index==path.curves.length-1){point2=path.curves[0].point1;}else if(prev.getDistance(point2)<2){return;}d.drawLine(prev.x,h-prev.y,point2.x,h-point2.y);prev=point2;});}function export_contour(layer){d.addLayer('l_'+layer.cnstr,Drawing.ACI.LAYER,'CONTINUOUS');d.setActiveLayer('l_'+layer.cnstr);// for(const glass of layer.glasses(false, true)) {
//   export_path(glass);
// }
var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=layer.profiles[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var profile=_step.value;export_path(profile);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}if(glasses.length){export_path(glasses[0]);name+='-'+glasses[0].elm.pad(2);}else{contours.forEach(export_contour);}var outputData=new Blob([d.toDxfString().replace(/\n/g,'\r\n')],{type:'application/dxf'});$p.wsql.alasql.utils.saveAs(outputData,name+'.dxf');}

/***/ })

});
//# sourceMappingURL=12.967af7ce.chunk.js.map