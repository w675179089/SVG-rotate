 function Cir(obj) {
            this.Id = obj.id;
            this.color1 = obj.backcolor||"#ccc";
            this.color2 = obj.color||"#b20f0f";
            this.per = obj.percent;
            this.timer = obj.time||0.8;
            this.fontSize = obj.fontSize||"14px";
            this.borderWidth = obj.borderWidth||10;
            this.data = function() {
                var _this = this;
                var box = document.getElementById(_this.Id);
                _this.width = box.offsetWidth;
                box.style.position = "relative";
                box.innerHTML = `<svg version="1.1" xmlns="http://www.3w.org/2000/svg" width=${_this.width} height=${_this.width} style="transform: rotate(-90deg);">
          <circle cx=${_this.width/2} cy=${_this.width/2} r=${_this.width/2-_this.borderWidth/2} stroke="${_this.color1}" fill="none" stroke-width="${_this.borderWidth}"></circle>
          <circle cx=${_this.width/2} cy=${_this.width/2} r=${_this.width/2-_this.borderWidth/2} stroke="${_this.color2}" fill="none" stroke-width="${_this.borderWidth}" style="" class="w-circle"></circle>
          </svg><div style="margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;width:${_this.width/2}px;height:${_this.width/2}px;text-align:center;line-height:${_this.width/2}px;font-weight:600;font-size:${_this.fontSize};">${parseInt(_this.per*100)}%</div>`;
           
           document.getElementsByTagName("head")[0].innerHTML+=(`
          <style>
           .w-circle{
                stroke-dasharray:0 ${(_this.width/2-_this.borderWidth/2)*2*Math.PI};
                animation:w-c ${_this.timer}s ease-in forwards;
            }
           @keyframes w-c {
                 100%{
                    stroke-dasharray:${(_this.width/2-_this.borderWidth/2)*2*Math.PI*_this.per} ${(_this.width/2-_this.borderWidth/2)*2*Math.PI};
                  }
            }
          </style>`)
            };
            this.data();
        }