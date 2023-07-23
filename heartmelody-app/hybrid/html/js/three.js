! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define
		.amd ? define(["exports"], e) : e(t.THREE = t.THREE || {})
}(this, function(t) {
	"use strict";

	function e() {}

	function i(t, e) {
		this.x = t || 0, this.y = e || 0
	}

	function n() {
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error(
			"THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
	}

	function r(t, e, i, n) {
		this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
	}

	function a(t, e, i) {
		this.x = t || 0, this.y = e || 0, this.z = i || 0
	}

	function o() {
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error(
			"THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
	}

	function s(t, e, n, r, a, c, h, l, u, p) {
		Object.defineProperty(this, "id", {
				value: Cs++
			}), this.uuid = Ps.generateUUID(), this.name = "", this.image = void 0 !== t ? t : s.DEFAULT_IMAGE, this
			.mipmaps = [], this.mapping = void 0 !== e ? e : s.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : To,
			this.wrapT = void 0 !== r ? r : To, this.magFilter = void 0 !== a ? a : Po, this.minFilter = void 0 !==
			c ? c : Io, this.anisotropy = void 0 !== u ? u : 1, this.format = void 0 !== h ? h : qo, this.type =
			void 0 !== l ? l : Uo, this.offset = new i(0, 0), this.repeat = new i(1, 1), this.center = new i(0, 0),
			this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new o, this.generateMipmaps = !0, this
			.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== p ? p :
			bs, this.version = 0, this.onUpdate = null
	}

	function c(t, e, i, n) {
		this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
	}

	function h(t, e, i) {
		this.uuid = Ps.generateUUID(), this.width = t, this.height = e, this.scissor = new c(0, 0, t, e), this
			.scissorTest = !1, this.viewport = new c(0, 0, t, e), i = i || {}, void 0 === i.minFilter && (i
				.minFilter = Po), this.texture = new s((void 0), (void 0), i.wrapS, i.wrapT, i.magFilter, i
				.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.depthBuffer = void 0 === i
			.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this
			.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
	}

	function l(t, e, i) {
		h.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
	}

	function u(t, e, i, n, r, a, o, c, h, l, u, p) {
		s.call(this, null, a, o, c, h, l, n, r, u, p), this.image = {
				data: t,
				width: e,
				height: i
			}, this.magFilter = void 0 !== h ? h : Ao, this.minFilter = void 0 !== l ? l : Ao, this
			.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}

	function p(t, e, i, n, r, a, o, c, h, l) {
		t = void 0 !== t ? t : [], e = void 0 !== e ? e : vo, s.call(this, t, e, i, n, r, a, o, c, h, l), this
			.flipY = !1
	}

	function d() {
		this.seq = [], this.map = {}
	}

	function f(t, e, i) {
		var n = t[0];
		if (n <= 0 || n > 0) return t;
		var r = e * i,
			a = Ds[r];
		if (void 0 === a && (a = new Float32Array(r), Ds[r] = a), 0 !== e) {
			n.toArray(a, 0);
			for (var o = 1, s = 0; o !== e; ++o) s += i, t[o].toArray(a, s)
		}
		return a
	}

	function m(t, e) {
		var i = Os[e];
		void 0 === i && (i = new Int32Array(e), Os[e] = i);
		for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit();
		return i
	}

	function g(t, e) {
		t.uniform1f(this.addr, e)
	}

	function v(t, e) {
		t.uniform1i(this.addr, e)
	}

	function y(t, e) {
		void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
	}

	function x(t, e) {
		void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e
			.b) : t.uniform3fv(this.addr, e)
	}

	function b(t, e) {
		void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
	}

	function _(t, e) {
		t.uniformMatrix2fv(this.addr, !1, e.elements || e)
	}

	function w(t, e) {
		void 0 === e.elements ? t.uniformMatrix3fv(this.addr, !1, e) : (Fs.set(e.elements), t.uniformMatrix3fv(this
			.addr, !1, Fs))
	}

	function M(t, e) {
		void 0 === e.elements ? t.uniformMatrix4fv(this.addr, !1, e) : (Ns.set(e.elements), t.uniformMatrix4fv(this
			.addr, !1, Ns))
	}

	function E(t, e, i) {
		var n = i.allocTextureUnit();
		t.uniform1i(this.addr, n), i.setTexture2D(e || Is, n)
	}

	function T(t, e, i) {
		var n = i.allocTextureUnit();
		t.uniform1i(this.addr, n), i.setTextureCube(e || Us, n)
	}

	function S(t, e) {
		t.uniform2iv(this.addr, e)
	}

	function A(t, e) {
		t.uniform3iv(this.addr, e)
	}

	function R(t, e) {
		t.uniform4iv(this.addr, e)
	}

	function L(t) {
		switch (t) {
			case 5126:
				return g;
			case 35664:
				return y;
			case 35665:
				return x;
			case 35666:
				return b;
			case 35674:
				return _;
			case 35675:
				return w;
			case 35676:
				return M;
			case 35678:
			case 36198:
				return E;
			case 35680:
				return T;
			case 5124:
			case 35670:
				return v;
			case 35667:
			case 35671:
				return S;
			case 35668:
			case 35672:
				return A;
			case 35669:
			case 35673:
				return R
		}
	}

	function P(t, e) {
		t.uniform1fv(this.addr, e)
	}

	function C(t, e) {
		t.uniform1iv(this.addr, e)
	}

	function I(t, e) {
		t.uniform2fv(this.addr, f(e, this.size, 2))
	}

	function U(t, e) {
		t.uniform3fv(this.addr, f(e, this.size, 3))
	}

	function D(t, e) {
		t.uniform4fv(this.addr, f(e, this.size, 4))
	}

	function O(t, e) {
		t.uniformMatrix2fv(this.addr, !1, f(e, this.size, 4))
	}

	function N(t, e) {
		t.uniformMatrix3fv(this.addr, !1, f(e, this.size, 9))
	}

	function F(t, e) {
		t.uniformMatrix4fv(this.addr, !1, f(e, this.size, 16))
	}

	function B(t, e, i) {
		var n = e.length,
			r = m(i, n);
		t.uniform1iv(this.addr, r);
		for (var a = 0; a !== n; ++a) i.setTexture2D(e[a] || Is, r[a])
	}

	function z(t, e, i) {
		var n = e.length,
			r = m(i, n);
		t.uniform1iv(this.addr, r);
		for (var a = 0; a !== n; ++a) i.setTextureCube(e[a] || Us, r[a])
	}

	function G(t) {
		switch (t) {
			case 5126:
				return P;
			case 35664:
				return I;
			case 35665:
				return U;
			case 35666:
				return D;
			case 35674:
				return O;
			case 35675:
				return N;
			case 35676:
				return F;
			case 35678:
				return B;
			case 35680:
				return z;
			case 5124:
			case 35670:
				return C;
			case 35667:
			case 35671:
				return S;
			case 35668:
			case 35672:
				return A;
			case 35669:
			case 35673:
				return R
		}
	}

	function H(t, e, i) {
		this.id = t, this.addr = i, this.setValue = L(e.type)
	}

	function V(t, e, i) {
		this.id = t, this.addr = i, this.size = e.size, this.setValue = G(e.type)
	}

	function k(t) {
		this.id = t, d.call(this)
	}

	function j(t, e) {
		t.seq.push(e), t.map[e.id] = e
	}

	function W(t, e, i) {
		var n = t.name,
			r = n.length;
		for (Bs.lastIndex = 0;;) {
			var a = Bs.exec(n),
				o = Bs.lastIndex,
				s = a[1],
				c = "]" === a[2],
				h = a[3];
			if (c && (s = 0 | s), void 0 === h || "[" === h && o + 2 === r) {
				j(i, void 0 === h ? new H(s, t, e) : new V(s, t, e));
				break
			}
			var l = i.map,
				u = l[s];
			void 0 === u && (u = new k(s), j(i, u)), i = u
		}
	}

	function X(t, e, i) {
		d.call(this), this.renderer = i;
		for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < n; ++r) {
			var a = t.getActiveUniform(e, r),
				o = a.name,
				s = t.getUniformLocation(e, o);
			W(a, s, this)
		}
	}

	function q(t, e, i) {
		return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
	}

	function Y(t, e) {
		this.min = void 0 !== t ? t : new i((+(1 / 0)), (+(1 / 0))), this.max = void 0 !== e ? e : new i((-(1 / 0)),
			(-(1 / 0)))
	}

	function Z(t, e, n, r, o) {
		function s() {
			var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
				i = new Uint16Array([0, 1, 2, 0, 2, 3]);
			h = e.createBuffer(), l = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, h), e.bufferData(e
					.ARRAY_BUFFER, t, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, l), e.bufferData(e
					.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW), m = e.createTexture(), g = e.createTexture(), n
				.bindTexture(e.TEXTURE_2D, m), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, 16, 16, 0, e.RGB, e
					.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e
				.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e
					.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
				n.bindTexture(e.TEXTURE_2D, g), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e
					.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e
				.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e
					.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
				u = {
					vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;",
						"uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;",
						"attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;",
						"varying float vVisibility;", "void main() {", "\tvUV = uv;", "\tvec2 pos = position;",
						"\tif ( renderType == 2 ) {",
						"\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );",
						"\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );",
						"\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );",
						"\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );",
						"\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );",
						"\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );",
						"\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );",
						"\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );",
						"\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );",
						"\t\tvVisibility =        visibility.r / 9.0;",
						"\t\tvVisibility *= 1.0 - visibility.g / 9.0;",
						"\t\tvVisibility *=       visibility.b / 9.0;",
						"\t\tvVisibility *= 1.0 - visibility.a / 9.0;",
						"\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
						"\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "\t}",
						"\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",
						"}"
					].join("\n"),
					fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;",
						"uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;",
						"varying float vVisibility;", "void main() {", "\tif ( renderType == 0 ) {",
						"\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "\t} else if ( renderType == 1 ) {",
						"\t\tgl_FragColor = texture2D( map, vUV );", "\t} else {",
						"\t\tvec4 texture = texture2D( map, vUV );", "\t\ttexture.a *= opacity * vVisibility;",
						"\t\tgl_FragColor = texture;", "\t\tgl_FragColor.rgb *= color;", "\t}", "}"
					].join("\n")
				}, p = c(u), d = {
					vertex: e.getAttribLocation(p, "position"),
					uv: e.getAttribLocation(p, "uv")
				}, f = {
					renderType: e.getUniformLocation(p, "renderType"),
					map: e.getUniformLocation(p, "map"),
					occlusionMap: e.getUniformLocation(p, "occlusionMap"),
					opacity: e.getUniformLocation(p, "opacity"),
					color: e.getUniformLocation(p, "color"),
					scale: e.getUniformLocation(p, "scale"),
					rotation: e.getUniformLocation(p, "rotation"),
					screenPosition: e.getUniformLocation(p, "screenPosition")
				}
		}

		function c(t) {
			var i = e.createProgram(),
				n = e.createShader(e.FRAGMENT_SHADER),
				r = e.createShader(e.VERTEX_SHADER),
				a = "precision " + o.precision + " float;\n";
			return e.shaderSource(n, a + t.fragmentShader), e.shaderSource(r, a + t.vertexShader), e.compileShader(
				n), e.compileShader(r), e.attachShader(i, n), e.attachShader(i, r), e.linkProgram(i), i
		}
		var h, l, u, p, d, f, m, g;
		this.render = function(t, o, c, u) {
			if (0 !== t.length) {
				var v = new a,
					y = u.w / u.z,
					x = .5 * u.z,
					b = .5 * u.w,
					_ = 16 / u.w,
					w = new i(_ * y, _),
					M = new a(1, 1, 0),
					E = new i(1, 1),
					T = new Y;
				T.min.set(u.x, u.y), T.max.set(u.x + (u.z - 16), u.y + (u.w - 16)), void 0 === p && s(), n
					.useProgram(p), n.initAttributes(), n.enableAttribute(d.vertex), n.enableAttribute(d.uv), n
					.disableUnusedAttributes(), e.uniform1i(f.occlusionMap, 0), e.uniform1i(f.map, 1), e
					.bindBuffer(e.ARRAY_BUFFER, h), e.vertexAttribPointer(d.vertex, 2, e.FLOAT, !1, 16, 0), e
					.vertexAttribPointer(d.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, l),
					n.disable(e.CULL_FACE), n.buffers.depth.setMask(!1);
				for (var S = 0, A = t.length; S < A; S++) {
					_ = 16 / u.w, w.set(_ * y, _);
					var R = t[S];
					if (v.set(R.matrixWorld.elements[12], R.matrixWorld.elements[13], R.matrixWorld.elements[
							14]), v.applyMatrix4(c.matrixWorldInverse), v.applyMatrix4(c.projectionMatrix), M
						.copy(v), E.x = u.x + M.x * x + x - 8, E.y = u.y + M.y * b + b - 8, T.containsPoint(
							E) === !0) {
						n.activeTexture(e.TEXTURE0), n.bindTexture(e.TEXTURE_2D, null), n.activeTexture(e
								.TEXTURE1), n.bindTexture(e.TEXTURE_2D, m), e.copyTexImage2D(e.TEXTURE_2D, 0, e
								.RGB, E.x, E.y, 16, 16, 0), e.uniform1i(f.renderType, 0), e.uniform2f(f.scale, w
								.x, w.y), e.uniform3f(f.screenPosition, M.x, M.y, M.z), n.disable(e.BLEND), n
							.enable(e.DEPTH_TEST), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), n
							.activeTexture(e.TEXTURE0), n.bindTexture(e.TEXTURE_2D, g), e.copyTexImage2D(e
								.TEXTURE_2D, 0, e.RGBA, E.x, E.y, 16, 16, 0), e.uniform1i(f.renderType, 1), n
							.disable(e.DEPTH_TEST), n.activeTexture(e.TEXTURE1), n.bindTexture(e.TEXTURE_2D, m),
							e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), R.positionScreen.copy(M), R
							.customUpdateCallback ? R.customUpdateCallback(R) : R.updateLensFlares(), e
							.uniform1i(f.renderType, 2), n.enable(e.BLEND);
						for (var L = 0, P = R.lensFlares.length; L < P; L++) {
							var C = R.lensFlares[L];
							C.opacity > .001 && C.scale > .001 && (M.x = C.x, M.y = C.y, M.z = C.z, _ = C.size *
								C.scale / u.w, w.x = _ * y, w.y = _, e.uniform3f(f.screenPosition, M.x, M.y,
									M.z), e.uniform2f(f.scale, w.x, w.y), e.uniform1f(f.rotation, C
									.rotation), e.uniform1f(f.opacity, C.opacity), e.uniform3f(f.color, C
									.color.r, C.color.g, C.color.b), n.setBlending(C.blending, C
									.blendEquation, C.blendSrc, C.blendDst), r.setTexture2D(C.texture, 1), e
								.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0))
						}
					}
				}
				n.enable(e.CULL_FACE), n.enable(e.DEPTH_TEST), n.buffers.depth.setMask(!0), n.reset()
			}
		}
	}

	function J(t, e, i, n, r, a, o, c, h) {
		s.call(this, t, e, i, n, r, a, o, c, h), this.needsUpdate = !0
	}

	function Q(t, e, i, n, o) {
		function s() {
			var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
				i = new Uint16Array([0, 1, 2, 0, 2, 3]);
			l = e.createBuffer(), u = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e
				.ARRAY_BUFFER, t, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, u), e.bufferData(e
				.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW), p = c(), d = {
				position: e.getAttribLocation(p, "position"),
				uv: e.getAttribLocation(p, "uv")
			}, f = {
				uvOffset: e.getUniformLocation(p, "uvOffset"),
				uvScale: e.getUniformLocation(p, "uvScale"),
				rotation: e.getUniformLocation(p, "rotation"),
				scale: e.getUniformLocation(p, "scale"),
				color: e.getUniformLocation(p, "color"),
				map: e.getUniformLocation(p, "map"),
				opacity: e.getUniformLocation(p, "opacity"),
				modelViewMatrix: e.getUniformLocation(p, "modelViewMatrix"),
				projectionMatrix: e.getUniformLocation(p, "projectionMatrix"),
				fogType: e.getUniformLocation(p, "fogType"),
				fogDensity: e.getUniformLocation(p, "fogDensity"),
				fogNear: e.getUniformLocation(p, "fogNear"),
				fogFar: e.getUniformLocation(p, "fogFar"),
				fogColor: e.getUniformLocation(p, "fogColor"),
				fogDepth: e.getUniformLocation(p, "fogDepth"),
				alphaTest: e.getUniformLocation(p, "alphaTest")
			};
			var n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
			n.width = 8, n.height = 8;
			var r = n.getContext("2d");
			r.fillStyle = "white", r.fillRect(0, 0, 8, 8), m = new J(n)
		}

		function c() {
			var t = e.createProgram(),
				i = e.createShader(e.VERTEX_SHADER),
				n = e.createShader(e.FRAGMENT_SHADER);
			return e.shaderSource(i, ["precision " + o.precision + " float;", "#define SHADER_NAME SpriteMaterial",
					"uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;",
					"uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;",
					"uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;",
					"varying vec2 vUV;", "varying float fogDepth;", "void main() {",
					"\tvUV = uvOffset + uv * uvScale;", "\tvec2 alignedPosition = position * scale;",
					"\tvec2 rotatedPosition;",
					"\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;",
					"\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;",
					"\tvec4 mvPosition;", "\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );",
					"\tmvPosition.xy += rotatedPosition;", "\tgl_Position = projectionMatrix * mvPosition;",
					"\tfogDepth = - mvPosition.z;", "}"
				].join("\n")), e.shaderSource(n, ["precision " + o.precision + " float;",
					"#define SHADER_NAME SpriteMaterial", "uniform vec3 color;", "uniform sampler2D map;",
					"uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;",
					"uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;",
					"uniform float alphaTest;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {",
					"\tvec4 texture = texture2D( map, vUV );",
					"\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );",
					"\tif ( gl_FragColor.a < alphaTest ) discard;", "\tif ( fogType > 0 ) {",
					"\t\tfloat fogFactor = 0.0;", "\t\tif ( fogType == 1 ) {",
					"\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );", "\t\t} else {",
					"\t\t\tconst float LOG2 = 1.442695;",
					"\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );",
					"\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "\t\t}",
					"\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );", "\t}", "}"
				].join("\n")), e.compileShader(i), e.compileShader(n), e.attachShader(t, i), e.attachShader(t, n), e
				.linkProgram(t), t
		}

		function h(t, e) {
			return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e
				.id - t.id
		}
		var l, u, p, d, f, m, g = new a,
			v = new r,
			y = new a;
		this.render = function(r, a, o) {
			if (0 !== r.length) {
				void 0 === p && s(), i.useProgram(p), i.initAttributes(), i.enableAttribute(d.position), i
					.enableAttribute(d.uv), i.disableUnusedAttributes(), i.disable(e.CULL_FACE), i.enable(e
						.BLEND), e.bindBuffer(e.ARRAY_BUFFER, l), e.vertexAttribPointer(d.position, 2, e.FLOAT,
						!1, 16, 0), e.vertexAttribPointer(d.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e
						.ELEMENT_ARRAY_BUFFER, u), e.uniformMatrix4fv(f.projectionMatrix, !1, o.projectionMatrix
						.elements), i.activeTexture(e.TEXTURE0), e.uniform1i(f.map, 0);
				var c = 0,
					x = 0,
					b = a.fog;
				b ? (e.uniform3f(f.fogColor, b.color.r, b.color.g, b.color.b), b.isFog ? (e.uniform1f(f.fogNear,
						b.near), e.uniform1f(f.fogFar, b.far), e.uniform1i(f.fogType, 1), c = 1, x = 1) : b
					.isFogExp2 && (e.uniform1f(f.fogDensity, b.density), e.uniform1i(f.fogType, 2), c = 2,
						x = 2)) : (e.uniform1i(f.fogType, 0), c = 0, x = 0);
				for (var _ = 0, w = r.length; _ < w; _++) {
					var M = r[_];
					M.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, M.matrixWorld), M.z = -M
						.modelViewMatrix.elements[14]
				}
				r.sort(h);
				for (var E = [], _ = 0, w = r.length; _ < w; _++) {
					var M = r[_],
						T = M.material;
					if (T.visible !== !1) {
						M.onBeforeRender(t, a, o, void 0, T, void 0), e.uniform1f(f.alphaTest, T.alphaTest), e
							.uniformMatrix4fv(f.modelViewMatrix, !1, M.modelViewMatrix.elements), M.matrixWorld
							.decompose(g, v, y), E[0] = y.x, E[1] = y.y;
						var S = 0;
						a.fog && T.fog && (S = x), c !== S && (e.uniform1i(f.fogType, S), c = S), null !== T
							.map ? (e.uniform2f(f.uvOffset, T.map.offset.x, T.map.offset.y), e.uniform2f(f
								.uvScale, T.map.repeat.x, T.map.repeat.y)) : (e.uniform2f(f.uvOffset, 0, 0), e
								.uniform2f(f.uvScale, 1, 1)), e.uniform1f(f.opacity, T.opacity), e.uniform3f(f
								.color, T.color.r, T.color.g, T.color.b), e.uniform1f(f.rotation, T.rotation), e
							.uniform2fv(f.scale, E), i.setBlending(T.blending, T.blendEquation, T.blendSrc, T
								.blendDst, T.blendEquationAlpha, T.blendSrcAlpha, T.blendDstAlpha, T
								.premultipliedAlpha), i.buffers.depth.setTest(T.depthTest), i.buffers.depth
							.setMask(T.depthWrite), i.buffers.color.setMask(T.colorWrite), n.setTexture2D(T
								.map || m, 0), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), M
							.onAfterRender(t, a, o, void 0, T, void 0)
					}
				}
				i.enable(e.CULL_FACE), i.reset()
			}
		}
	}

	function K() {
		Object.defineProperty(this, "id", {
				value: Wh++
			}), this.uuid = Ps.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this
			.lights = !0, this.blending = Ia, this.side = Ma, this.flatShading = !1, this.vertexColors = Ra, this
			.opacity = 1, this.transparent = !1, this.blendSrc = Xa, this.blendDst = qa, this.blendEquation = Fa,
			this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc =
			io, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1,
			this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this
			.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this
			.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !
			0
	}

	function $(t) {
		K.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Rs, this.skinning = !1, this
			.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this
			.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1,
			this.fog = !1, this.lights = !1, this.setValues(t)
	}

	function tt(t) {
		K.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new a, this.nearDistance = 1,
			this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap =
			null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1,
			this.lights = !1, this.setValues(t)
	}

	function et(t, e) {
		this.min = void 0 !== t ? t : new a((+(1 / 0)), (+(1 / 0)), (+(1 / 0))), this.max = void 0 !== e ? e :
			new a((-(1 / 0)), (-(1 / 0)), (-(1 / 0)))
	}

	function it(t, e) {
		this.center = void 0 !== t ? t : new a, this.radius = void 0 !== e ? e : 0
	}

	function nt(t, e) {
		this.normal = void 0 !== t ? t : new a(1, 0, 0), this.constant = void 0 !== e ? e : 0
	}

	function rt(t, e, i, n, r, a) {
		this.planes = [void 0 !== t ? t : new nt, void 0 !== e ? e : new nt, void 0 !== i ? i : new nt, void 0 !==
			n ? n : new nt, void 0 !== r ? r : new nt, void 0 !== a ? a : new nt
		]
	}

	function at(t, e, r) {
		function o(e, i, n, r, a, o) {
			var s = e.geometry,
				c = null,
				h = x,
				l = e.customDepthMaterial;
			if (n && (h = b, l = e.customDistanceMaterial), l) c = l;
			else {
				var u = !1;
				i.morphTargets && (s && s.isBufferGeometry ? u = s.morphAttributes && s.morphAttributes.position &&
					s.morphAttributes.position.length > 0 : s && s.isGeometry && (u = s.morphTargets && s
						.morphTargets.length > 0)), e.isSkinnedMesh && i.skinning === !1 && console.warn(
					"THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
				var p = e.isSkinnedMesh && i.skinning,
					d = 0;
				u && (d |= g), p && (d |= v), c = h[d]
			}
			if (t.localClippingEnabled && i.clipShadows === !0 && 0 !== i.clippingPlanes.length) {
				var f = c.uuid,
					m = i.uuid,
					y = _[f];
				void 0 === y && (y = {}, _[f] = y);
				var w = y[m];
				void 0 === w && (w = c.clone(), y[m] = w), c = w
			}
			c.visible = i.visible, c.wireframe = i.wireframe;
			var M = i.side;
			return P.renderSingleSided && M == Ta && (M = Ma), P.renderReverseSided && (M === Ma ? M = Ea : M ===
					Ea && (M = Ma)), c.side = M, c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes,
				c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth =
				i.linewidth, n && c.isMeshDistanceMaterial && (c.referencePosition.copy(r), c.nearDistance = a, c
					.farDistance = o), c
		}

		function s(i, n, r, a) {
			if (i.visible !== !1) {
				var c = i.layers.test(n.layers);
				if (c && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || l
						.intersectsObject(i))) {
					i.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, i.matrixWorld);
					var h = e.update(i),
						u = i.material;
					if (Array.isArray(u))
						for (var p = h.groups, d = 0, f = p.length; d < f; d++) {
							var g = p[d],
								v = u[g.materialIndex];
							if (v && v.visible) {
								var y = o(i, v, a, m, r.near, r.far);
								t.renderBufferDirect(r, null, h, y, i, g)
							}
						} else if (u.visible) {
							var y = o(i, u, a, m, r.near, r.far);
							t.renderBufferDirect(r, null, h, y, i, null)
						}
				}
				for (var x = i.children, b = 0, _ = x.length; b < _; b++) s(x[b], n, r, a)
			}
		}
		for (var l = new rt, u = new n, p = new i, d = new i(r, r), f = new a, m = new a, g = 1, v = 2, y = (g |
				v) + 1, x = new Array(y), b = new Array(y), _ = {}, w = [new a(1, 0, 0), new a((-1), 0, 0),
				new a(0,
					0, 1), new a(0, 0, (-1)), new a(0, 1, 0), new a(0, (-1), 0)
			], M = [new a(0, 1, 0), new a(0, 1,
				0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 0, 1), new a(0, 0, (-1))], E = [new c, new c,
				new c, new c, new c, new c
			], T = 0; T !== y; ++T) {
			var S = 0 !== (T & g),
				A = 0 !== (T & v),
				R = new $({
					depthPacking: Ls,
					morphTargets: S,
					skinning: A
				});
			x[T] = R;
			var L = new tt({
				morphTargets: S,
				skinning: A
			});
			b[T] = L
		}
		var P = this;
		this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = _a, this.renderReverseSided = !
			0, this.renderSingleSided = !0, this.render = function(e, i, n) {
				if (P.enabled !== !1 && (P.autoUpdate !== !1 || P.needsUpdate !== !1) && 0 !== e.length) {
					var r = t.context,
						a = t.state;
					a.disable(r.BLEND), a.buffers.color.setClear(1, 1, 1, 1), a.buffers.depth.setTest(!0), a
						.setScissorTest(!1);
					for (var o, c = 0, g = e.length; c < g; c++) {
						var v = e[c],
							y = v.shadow,
							x = v && v.isPointLight;
						if (void 0 !== y) {
							var b = y.camera;
							if (p.copy(y.mapSize), p.min(d), x) {
								var _ = p.x,
									T = p.y;
								E[0].set(2 * _, T, _, T), E[1].set(0, T, _, T), E[2].set(3 * _, T, _, T), E[3].set(
										_, T, _, T), E[4].set(3 * _, 0, _, T), E[5].set(_, 0, _, T), p.x *= 4, p
									.y *= 2
							}
							if (null === y.map) {
								var S = {
									minFilter: Ao,
									magFilter: Ao,
									format: qo
								};
								y.map = new h(p.x, p.y, S), y.map.texture.name = v.name + ".shadowMap", b
									.updateProjectionMatrix()
							}
							y.isSpotLightShadow && y.update(v);
							var A = y.map,
								R = y.matrix;
							m.setFromMatrixPosition(v.matrixWorld), b.position.copy(m), x ? (o = 6, R
								.makeTranslation(-m.x, -m.y, -m.z)) : (o = 1, f.setFromMatrixPosition(v.target
									.matrixWorld), b.lookAt(f), b.updateMatrixWorld(), R.set(.5, 0, 0, .5, 0,
									.5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), R.multiply(b.projectionMatrix), R
								.multiply(b.matrixWorldInverse)), t.setRenderTarget(A), t.clear();
							for (var L = 0; L < o; L++) {
								if (x) {
									f.copy(b.position), f.add(w[L]), b.up.copy(M[L]), b.lookAt(f), b
										.updateMatrixWorld();
									var C = E[L];
									a.viewport(C)
								}
								u.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse), l.setFromMatrix(u), s(
									i, n, b, x)
							}
						} else console.warn("THREE.WebGLShadowMap:", v, "has no shadow.")
					}
					P.needsUpdate = !1
				}
			}
	}

	function ot(t) {
		function e(e, i) {
			var n = e.array,
				r = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
				a = t.createBuffer();
			t.bindBuffer(i, a), t.bufferData(i, n, r), e.onUploadCallback();
			var o = t.FLOAT;
			return n instanceof Float32Array ? o = t.FLOAT : n instanceof Float64Array ? console.warn(
					"THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") :
				n instanceof Uint16Array ? o = t.UNSIGNED_SHORT : n instanceof Int16Array ? o = t.SHORT :
				n instanceof Uint32Array ? o = t.UNSIGNED_INT : n instanceof Int32Array ? o = t.INT :
				n instanceof Int8Array ? o = t.BYTE : n instanceof Uint8Array && (o = t.UNSIGNED_BYTE), {
					buffer: a,
					type: o,
					bytesPerElement: n.BYTES_PER_ELEMENT,
					version: e.version
				}
		}

		function i(e, i, n) {
			var r = i.array,
				a = i.updateRange;
			t.bindBuffer(n, e), i.dynamic === !1 ? t.bufferData(n, r, t.STATIC_DRAW) : a.count === -1 ? t
				.bufferSubData(n, 0, r) : 0 === a.count ? console.error(
					"THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."
				) : (t.bufferSubData(n, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a
					.count)), a.count = -1)
		}

		function n(t) {
			return t.isInterleavedBufferAttribute && (t = t.data), o[t.uuid]
		}

		function r(e) {
			e.isInterleavedBufferAttribute && (e = e.data);
			var i = o[e.uuid];
			i && (t.deleteBuffer(i.buffer), delete o[e.uuid])
		}

		function a(t, n) {
			t.isInterleavedBufferAttribute && (t = t.data);
			var r = o[t.uuid];
			void 0 === r ? o[t.uuid] = e(t, n) : r.version < t.version && (i(r.buffer, t, n), r.version = t.version)
		}
		var o = {};
		return {
			get: n,
			remove: r,
			update: a
		}
	}

	function st(t, e, i, n) {
		this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || st.DefaultOrder
	}

	function ct() {
		this.mask = 1
	}

	function ht() {
		function t() {
			c.setFromEuler(s, !1)
		}

		function e() {
			s.setFromQuaternion(c, void 0, !1)
		}
		Object.defineProperty(this, "id", {
				value: Xh++
			}), this.uuid = Ps.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this
			.children = [], this.up = ht.DefaultUp.clone();
		var i = new a,
			s = new st,
			c = new r,
			h = new a(1, 1, 1);
		s.onChange(t), c.onChange(e), Object.defineProperties(this, {
				position: {
					enumerable: !0,
					value: i
				},
				rotation: {
					enumerable: !0,
					value: s
				},
				quaternion: {
					enumerable: !0,
					value: c
				},
				scale: {
					enumerable: !0,
					value: h
				},
				modelViewMatrix: {
					value: new n
				},
				normalMatrix: {
					value: new o
				}
			}), this.matrix = new n, this.matrixWorld = new n, this.matrixAutoUpdate = ht.DefaultMatrixAutoUpdate,
			this.matrixWorldNeedsUpdate = !1, this.layers = new ct, this.visible = !0, this.castShadow = !1, this
			.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
	}

	function lt() {
		ht.call(this), this.type = "Camera", this.matrixWorldInverse = new n, this.projectionMatrix = new n
	}

	function ut(t, e, i, n, r, a) {
		lt.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this
			.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ?
			a : 2e3, this.updateProjectionMatrix()
	}

	function pt(t, e, i, n, r, o) {
		this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new a, this.vertexNormals = Array
			.isArray(n) ? n : [], this.color = r && r.isColor ? r : new q, this.vertexColors = Array.isArray(r) ?
			r : [], this.materialIndex = void 0 !== o ? o : 0
	}

	function dt() {
		Object.defineProperty(this, "id", {
				value: qh += 2
			}), this.uuid = Ps.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this
			.colors = [], this.faces = [], this.faceVertexUvs = [
				[]
			], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this
			.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1,
			this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this
			.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
	}

	function ft(t, e, i) {
		if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.uuid = Ps.generateUUID(), this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !==
			t ? t.length / e : 0, this.normalized = i === !0, this.dynamic = !1, this.updateRange = {
				offset: 0,
				count: -1
			}, this.onUploadCallback = function() {}, this.version = 0
	}

	function mt(t, e, i) {
		ft.call(this, new Int8Array(t), e, i)
	}

	function gt(t, e, i) {
		ft.call(this, new Uint8Array(t), e, i)
	}

	function vt(t, e, i) {
		ft.call(this, new Uint8ClampedArray(t), e, i)
	}

	function yt(t, e, i) {
		ft.call(this, new Int16Array(t), e, i)
	}

	function xt(t, e, i) {
		ft.call(this, new Uint16Array(t), e, i)
	}

	function bt(t, e, i) {
		ft.call(this, new Int32Array(t), e, i)
	}

	function _t(t, e, i) {
		ft.call(this, new Uint32Array(t), e, i)
	}

	function wt(t, e, i) {
		ft.call(this, new Float32Array(t), e, i)
	}

	function Mt(t, e, i) {
		ft.call(this, new Float64Array(t), e, i)
	}

	function Et() {
		this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [],
			this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this
			.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this
			.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
	}

	function Tt(t) {
		if (0 === t.length) return -(1 / 0);
		for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
		return e
	}

	function St() {
		Object.defineProperty(this, "id", {
				value: Yh += 2
			}), this.uuid = Ps.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this
			.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this
			.boundingSphere = null, this.drawRange = {
				start: 0,
				count: 1 / 0
			}
	}

	function At(t, e, i, n, r, a) {
		dt.call(this), this.type = "BoxGeometry", this.parameters = {
			width: t,
			height: e,
			depth: i,
			widthSegments: n,
			heightSegments: r,
			depthSegments: a
		}, this.fromBufferGeometry(new Rt(t, e, i, n, r, a)), this.mergeVertices()
	}

	function Rt(t, e, i, n, r, o) {
		function s(t, e, i, n, r, o, s, m, g, v, y) {
			var x, b, _ = o / g,
				w = s / v,
				M = o / 2,
				E = s / 2,
				T = m / 2,
				S = g + 1,
				A = v + 1,
				R = 0,
				L = 0,
				P = new a;
			for (b = 0; b < A; b++) {
				var C = b * w - E;
				for (x = 0; x < S; x++) {
					var I = x * _ - M;
					P[t] = I * n, P[e] = C * r, P[i] = T, l.push(P.x, P.y, P.z), P[t] = 0, P[e] = 0, P[i] = m > 0 ?
						1 : -1, u.push(P.x, P.y, P.z), p.push(x / g), p.push(1 - b / v), R += 1
				}
			}
			for (b = 0; b < v; b++)
				for (x = 0; x < g; x++) {
					var U = d + x + S * b,
						D = d + x + S * (b + 1),
						O = d + (x + 1) + S * (b + 1),
						N = d + (x + 1) + S * b;
					h.push(U, D, N), h.push(D, O, N), L += 6
				}
			c.addGroup(f, L, y), f += L, d += R
		}
		St.call(this), this.type = "BoxBufferGeometry", this.parameters = {
			width: t,
			height: e,
			depth: i,
			widthSegments: n,
			heightSegments: r,
			depthSegments: o
		};
		var c = this;
		t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, o = Math.floor(o) || 1;
		var h = [],
			l = [],
			u = [],
			p = [],
			d = 0,
			f = 0;
		s("z", "y", "x", -1, -1, i, e, t, o, r, 0), s("z", "y", "x", 1, -1, i, e, -t, o, r, 1), s("x", "z", "y", 1,
			1, t, i, e, n, o, 2), s("x", "z", "y", 1, -1, t, i, -e, n, o, 3), s("x", "y", "z", 1, -1, t, e, i,
			n, r, 4), s("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(h), this.addAttribute(
			"position", new wt(l, 3)), this.addAttribute("normal", new wt(u, 3)), this.addAttribute("uv",
			new wt(p, 2))
	}

	function Lt(t, e, i, n) {
		dt.call(this), this.type = "PlaneGeometry", this.parameters = {
			width: t,
			height: e,
			widthSegments: i,
			heightSegments: n
		}, this.fromBufferGeometry(new Pt(t, e, i, n)), this.mergeVertices()
	}

	function Pt(t, e, i, n) {
		St.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
			width: t,
			height: e,
			widthSegments: i,
			heightSegments: n
		}, t = t || 1, e = e || 1;
		var r, a, o = t / 2,
			s = e / 2,
			c = Math.floor(i) || 1,
			h = Math.floor(n) || 1,
			l = c + 1,
			u = h + 1,
			p = t / c,
			d = e / h,
			f = [],
			m = [],
			g = [],
			v = [];
		for (a = 0; a < u; a++) {
			var y = a * d - s;
			for (r = 0; r < l; r++) {
				var x = r * p - o;
				m.push(x, -y, 0), g.push(0, 0, 1), v.push(r / c), v.push(1 - a / h)
			}
		}
		for (a = 0; a < h; a++)
			for (r = 0; r < c; r++) {
				var b = r + l * a,
					_ = r + l * (a + 1),
					w = r + 1 + l * (a + 1),
					M = r + 1 + l * a;
				f.push(b, _, M), f.push(_, w, M)
			}
		this.setIndex(f), this.addAttribute("position", new wt(m, 3)), this.addAttribute("normal", new wt(g, 3)),
			this.addAttribute("uv", new wt(v, 2))
	}

	function Ct(t) {
		K.call(this), this.type = "MeshBasicMaterial", this.color = new q(16777215), this.map = null, this
			.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this
			.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = so, this.reflectivity = 1,
			this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap =
			"round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1,
			this.setValues(t)
	}

	function It(t) {
		K.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader =
			"void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this
			.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1,
			this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1,
			this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
				derivatives: !1,
				fragDepth: !1,
				drawBuffers: !1,
				shaderTextureLOD: !1
			}, this.defaultAttributeValues = {
				color: [1, 1, 1],
				uv: [0, 0],
				uv2: [0, 0]
			}, this.index0AttributeName = void 0, void 0 !== t && (void 0 !== t.attributes && console.error(
					"THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this
				.setValues(t))
	}

	function Ut(t, e) {
		this.origin = void 0 !== t ? t : new a, this.direction = void 0 !== e ? e : new a
	}

	function Dt(t, e) {
		this.start = void 0 !== t ? t : new a, this.end = void 0 !== e ? e : new a
	}

	function Ot(t, e, i) {
		this.a = void 0 !== t ? t : new a, this.b = void 0 !== e ? e : new a, this.c = void 0 !== i ? i : new a
	}

	function Nt(t, e) {
		ht.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new St,
			this.material = void 0 !== e ? e : new Ct({
				color: 16777215 * Math.random()
			}), this.drawMode = vs, this.updateMorphTargets()
	}

	function Ft(t, e, i, n) {
		function r(e, n, r, u) {
			var p = n.background;
			null === p ? a(h, l) : p && p.isColor && (a(p, 1), u = !0), (t.autoClear || u) && t.clear(t
				.autoClearColor, t.autoClearDepth, t.autoClearStencil), p && p.isCubeTexture ? (void 0 === c &&
				(c = new Nt(new Rt(1, 1, 1), new It({
						uniforms: jh.cube.uniforms,
						vertexShader: jh.cube.vertexShader,
						fragmentShader: jh.cube.fragmentShader,
						side: Ea,
						depthTest: !0,
						depthWrite: !1,
						fog: !1
					})), c.geometry.removeAttribute("normal"), c.geometry.removeAttribute("uv"), c
					.onBeforeRender = function(t, e, i) {
						this.matrixWorld.copyPosition(i.matrixWorld)
					}, i.update(c.geometry)), c.material.uniforms.tCube.value = p, e.push(c, c.geometry, c
					.material, 0, null)) : p && p.isTexture && (void 0 === o && (o = new ut((-1), 1, 1, (-1), 0,
				1), s = new Nt(new Pt(2, 2), new Ct({
				depthTest: !1,
				depthWrite: !1,
				fog: !1
			})), i.update(s.geometry)), s.material.map = p, t.renderBufferDirect(o, null, s.geometry, s
				.material, s, null))
		}

		function a(t, i) {
			e.buffers.color.setClear(t.r, t.g, t.b, i, n)
		}
		var o, s, c, h = new q(0),
			l = 0;
		return {
			getClearColor: function() {
				return h
			},
			setClearColor: function(t, e) {
				h.set(t), l = void 0 !== e ? e : 1, a(h, l)
			},
			getClearAlpha: function() {
				return l
			},
			setClearAlpha: function(t) {
				l = t, a(h, l)
			},
			render: r
		}
	}

	function Bt(t, e) {
		return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t
			.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id -
			e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
	}

	function zt(t, e) {
		return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e
			.id
	}

	function Gt() {
		function t() {
			r = 0, a.length = 0, o.length = 0
		}

		function e(t, e, i, s, c) {
			var h = n[r];
			void 0 === h ? (h = {
				id: t.id,
				object: t,
				geometry: e,
				material: i,
				program: i.program,
				renderOrder: t.renderOrder,
				z: s,
				group: c
			}, n[r] = h) : (h.id = t.id, h.object = t, h.geometry = e, h.material = i, h.program = i.program, h
				.renderOrder = t.renderOrder, h.z = s, h.group = c), (i.transparent === !0 ? o : a).push(h), r++
		}

		function i() {
			a.length > 1 && a.sort(Bt), o.length > 1 && o.sort(zt)
		}
		var n = [],
			r = 0,
			a = [],
			o = [];
		return {
			opaque: a,
			transparent: o,
			init: t,
			push: e,
			sort: i
		}
	}

	function Ht() {
		function t(t, e) {
			var n = t.id + "," + e.id,
				r = i[n];
			return void 0 === r && (r = new Gt, i[n] = r), r
		}

		function e() {
			i = {}
		}
		var i = {};
		return {
			get: t,
			dispose: e
		}
	}

	function Vt(t, e) {
		return Math.abs(e[1]) - Math.abs(t[1])
	}

	function kt(t) {
		function e(e, r, a, o) {
			var s = e.morphTargetInfluences,
				c = s.length,
				h = i[r.id];
			if (void 0 === h) {
				h = [];
				for (var l = 0; l < c; l++) h[l] = [l, 0];
				i[r.id] = h
			}
			for (var u = a.morphTargets && r.morphAttributes.position, p = a.morphNormals && r.morphAttributes
					.normal, l = 0; l < c; l++) {
				var d = h[l];
				0 !== d[1] && (u && r.removeAttribute("morphTarget" + l), p && r.removeAttribute("morphNormal" + l))
			}
			for (var l = 0; l < c; l++) {
				var d = h[l];
				d[0] = l, d[1] = s[l]
			}
			h.sort(Vt);
			for (var l = 0; l < 8; l++) {
				var d = h[l];
				if (d) {
					var f = d[0],
						m = d[1];
					if (m) {
						u && r.addAttribute("morphTarget" + l, u[f]), p && r.addAttribute("morphNormal" + l, p[f]),
							n[l] = m;
						continue
					}
				}
				n[l] = 0
			}
			o.getUniforms().setValue(t, "morphTargetInfluences", n)
		}
		var i = {},
			n = new Float32Array(8);
		return {
			update: e
		}
	}

	function jt(t, e, i) {
		function n(t) {
			s = t
		}

		function r(t) {
			c = t.type, h = t.bytesPerElement
		}

		function a(e, n) {
			t.drawElements(s, n, c, e * h), i.calls++, i.vertices += n, s === t.TRIANGLES ? i.faces += n / 3 : s ===
				t.POINTS && (i.points += n)
		}

		function o(n, r, a) {
			var o = e.get("ANGLE_instanced_arrays");
			return null === o ? void console.error(
				"THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
			) : (o.drawElementsInstancedANGLE(s, a, c, r * h, n.maxInstancedCount), i.calls++, i.vertices +=
				a * n.maxInstancedCount, void(s === t.TRIANGLES ? i.faces += n.maxInstancedCount * a / 3 : s ===
					t.POINTS && (i.points += n.maxInstancedCount * a)))
		}
		var s, c, h;
		this.setMode = n, this.setIndex = r, this.render = a, this.renderInstances = o
	}

	function Wt(t, e, i) {
		function n(t) {
			o = t
		}

		function r(e, n) {
			t.drawArrays(o, e, n), i.calls++, i.vertices += n, o === t.TRIANGLES ? i.faces += n / 3 : o === t
				.POINTS && (i.points += n)
		}

		function a(n, r, a) {
			var s = e.get("ANGLE_instanced_arrays");
			if (null === s) return void console.error(
				"THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
			);
			var c = n.attributes.position;
			c.isInterleavedBufferAttribute ? (a = c.data.count, s.drawArraysInstancedANGLE(o, 0, a, n
					.maxInstancedCount)) : s.drawArraysInstancedANGLE(o, r, a, n.maxInstancedCount), i.calls++, i
				.vertices += a * n.maxInstancedCount, o === t.TRIANGLES ? i.faces += n.maxInstancedCount * a / 3 :
				o === t.POINTS && (i.points += n.maxInstancedCount * a)
		}
		var o;
		this.setMode = n, this.render = r, this.renderInstances = a
	}

	function Xt(t, e, i) {
		function n(t) {
			var r = t.target,
				a = s[r.id];
			null !== a.index && e.remove(a.index);
			for (var o in a.attributes) e.remove(a.attributes[o]);
			r.removeEventListener("dispose", n), delete s[r.id];
			var h = c[r.id];
			h && (e.remove(h), delete c[r.id]), h = c[a.id], h && (e.remove(h), delete c[a.id]), i.geometries--
		}

		function r(t, e) {
			var r = s[e.id];
			return r ? r : (e.addEventListener("dispose", n), e.isBufferGeometry ? r = e : e.isGeometry && (
				void 0 === e._bufferGeometry && (e._bufferGeometry = (new St).setFromObject(t)), r = e
				._bufferGeometry), s[e.id] = r, i.geometries++, r)
		}

		function a(i) {
			var n = i.index,
				r = i.attributes;
			null !== n && e.update(n, t.ELEMENT_ARRAY_BUFFER);
			for (var a in r) e.update(r[a], t.ARRAY_BUFFER);
			var o = i.morphAttributes;
			for (var a in o)
				for (var s = o[a], c = 0, h = s.length; c < h; c++) e.update(s[c], t.ARRAY_BUFFER)
		}

		function o(i) {
			var n = c[i.id];
			if (n) return n;
			var r = [],
				a = i.index,
				o = i.attributes;
			if (null !== a)
				for (var s = a.array, h = 0, l = s.length; h < l; h += 3) {
					var u = s[h + 0],
						p = s[h + 1],
						d = s[h + 2];
					r.push(u, p, p, d, d, u)
				} else
					for (var s = o.position.array, h = 0, l = s.length / 3 - 1; h < l; h += 3) {
						var u = h + 0,
							p = h + 1,
							d = h + 2;
						r.push(u, p, p, d, d, u)
					}
			return n = new(Tt(r) > 65535 ? _t : xt)(r, 1), e.update(n, t.ELEMENT_ARRAY_BUFFER), c[i.id] = n, n
		}
		var s = {},
			c = {};
		return {
			get: r,
			update: a,
			getWireframeAttribute: o
		}
	}

	function qt() {
		var t = {};
		return {
			get: function(e) {
				if (void 0 !== t[e.id]) return t[e.id];
				var n;
				switch (e.type) {
					case "DirectionalLight":
						n = {
							direction: new a,
							color: new q,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i
						};
						break;
					case "SpotLight":
						n = {
							position: new a,
							direction: new a,
							color: new q,
							distance: 0,
							coneCos: 0,
							penumbraCos: 0,
							decay: 0,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i
						};
						break;
					case "PointLight":
						n = {
							position: new a,
							color: new q,
							distance: 0,
							decay: 0,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i,
							shadowCameraNear: 1,
							shadowCameraFar: 1e3
						};
						break;
					case "HemisphereLight":
						n = {
							direction: new a,
							skyColor: new q,
							groundColor: new q
						};
						break;
					case "RectAreaLight":
						n = {
							color: new q,
							position: new a,
							halfWidth: new a,
							halfHeight: new a
						}
				}
				return t[e.id] = n, n
			}
		}
	}

	function Yt() {
		function t(t, n, a) {
			for (var c = 0, h = 0, l = 0, u = 0, p = 0, d = 0, f = 0, m = 0, g = a.matrixWorldInverse, v = 0, y = t
					.length; v < y; v++) {
				var x = t[v],
					b = x.color,
					_ = x.intensity,
					w = x.distance,
					M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
				if (x.isAmbientLight) c += b.r * _, h += b.g * _, l += b.b * _;
				else if (x.isDirectionalLight) {
					var E = e.get(x);
					if (E.color.copy(x.color).multiplyScalar(x.intensity), E.direction.setFromMatrixPosition(x
							.matrixWorld), r.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(r), E
						.direction.transformDirection(g), E.shadow = x.castShadow, x.castShadow) {
						var T = x.shadow;
						E.shadowBias = T.bias, E.shadowRadius = T.radius, E.shadowMapSize = T.mapSize
					}
					i.directionalShadowMap[u] = M, i.directionalShadowMatrix[u] = x.shadow.matrix, i.directional[
						u] = E, u++
				} else if (x.isSpotLight) {
					var E = e.get(x);
					if (E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(b)
						.multiplyScalar(_), E.distance = w, E.direction.setFromMatrixPosition(x.matrixWorld), r
						.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(r), E.direction
						.transformDirection(g), E.coneCos = Math.cos(x.angle), E.penumbraCos = Math.cos(x.angle * (
							1 - x.penumbra)), E.decay = 0 === x.distance ? 0 : x.decay, E.shadow = x.castShadow, x
						.castShadow) {
						var T = x.shadow;
						E.shadowBias = T.bias, E.shadowRadius = T.radius, E.shadowMapSize = T.mapSize
					}
					i.spotShadowMap[d] = M, i.spotShadowMatrix[d] = x.shadow.matrix, i.spot[d] = E, d++
				} else if (x.isRectAreaLight) {
					var E = e.get(x);
					E.color.copy(b).multiplyScalar(_ / (x.width * x.height)), E.position.setFromMatrixPosition(x
							.matrixWorld), E.position.applyMatrix4(g), s.identity(), o.copy(x.matrixWorld), o
						.premultiply(g), s.extractRotation(o), E.halfWidth.set(.5 * x.width, 0, 0), E.halfHeight
						.set(0, .5 * x.height, 0), E.halfWidth.applyMatrix4(s), E.halfHeight.applyMatrix4(s), i
						.rectArea[f] = E, f++
				} else if (x.isPointLight) {
					var E = e.get(x);
					if (E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(g), E.color.copy(x
							.color).multiplyScalar(x.intensity), E.distance = x.distance, E.decay = 0 === x
						.distance ? 0 : x.decay, E.shadow = x.castShadow, x.castShadow) {
						var T = x.shadow;
						E.shadowBias = T.bias, E.shadowRadius = T.radius, E.shadowMapSize = T.mapSize, E
							.shadowCameraNear = T.camera.near, E.shadowCameraFar = T.camera.far
					}
					i.pointShadowMap[p] = M, i.pointShadowMatrix[p] = x.shadow.matrix, i.point[p] = E, p++
				} else if (x.isHemisphereLight) {
					var E = e.get(x);
					E.direction.setFromMatrixPosition(x.matrixWorld), E.direction.transformDirection(g), E.direction
						.normalize(), E.skyColor.copy(x.color).multiplyScalar(_), E.groundColor.copy(x.groundColor)
						.multiplyScalar(_), i.hemi[m] = E, m++
				}
			}
			i.ambient[0] = c, i.ambient[1] = h, i.ambient[2] = l, i.directional.length = u, i.spot.length = d, i
				.rectArea.length = f, i.point.length = p, i.hemi.length = m, i.hash = u + "," + p + "," + d + "," +
				f + "," + m + "," + n.length
		}
		var e = new qt,
			i = {
				hash: "",
				ambient: [0, 0, 0],
				directional: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				rectArea: [],
				point: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: []
			},
			r = new a,
			o = new n,
			s = new n;
		return {
			setup: t,
			state: i
		}
	}

	function Zt(t, e) {
		function i(i) {
			var n = e.frame,
				a = i.geometry,
				o = t.get(i, a);
			return r[o.id] !== n && (a.isGeometry && o.updateFromObject(i), t.update(o), r[o.id] = n), o
		}

		function n() {
			r = {}
		}
		var r = {};
		return {
			update: i,
			clear: n
		}
	}

	function Jt(t) {
		for (var e = t.split("\n"), i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i];
		return e.join("\n")
	}

	function Qt(t, e, i) {
		var n = t.createShader(e);
		return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) === !1 && console
			.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn(
				"THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t
				.getShaderInfoLog(n), Jt(i)), n
	}

	function Kt(t) {
		switch (t) {
			case bs:
				return ["Linear", "( value )"];
			case _s:
				return ["sRGB", "( value )"];
			case Ms:
				return ["RGBE", "( value )"];
			case Ts:
				return ["RGBM", "( value, 7.0 )"];
			case Ss:
				return ["RGBM", "( value, 16.0 )"];
			case As:
				return ["RGBD", "( value, 256.0 )"];
			case ws:
				return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
			default:
				throw new Error("unsupported encoding: " + t)
		}
	}

	function $t(t, e) {
		var i = Kt(e);
		return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
	}

	function te(t, e) {
		var i = Kt(e);
		return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
	}

	function ee(t, e) {
		var i;
		switch (e) {
			case uo:
				i = "Linear";
				break;
			case po:
				i = "Reinhard";
				break;
			case fo:
				i = "Uncharted2";
				break;
			case mo:
				i = "OptimizedCineon";
				break;
			default:
				throw new Error("unsupported toneMapping: " + e)
		}
		return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
	}

	function ie(t, e, i) {
		t = t || {};
		var n = [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ?
			"#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) &&
			i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get(
				"WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD ||
				e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" :
			""
		];
		return n.filter(ae).join("\n")
	}

	function ne(t) {
		var e = [];
		for (var i in t) {
			var n = t[i];
			n !== !1 && e.push("#define " + i + " " + n)
		}
		return e.join("\n")
	}

	function re(t, e) {
		for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++) {
			var a = t.getActiveAttrib(e, r),
				o = a.name;
			i[o] = t.getAttribLocation(e, o)
		}
		return i
	}

	function ae(t) {
		return "" !== t
	}

	function oe(t, e) {
		return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(
				/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
			.replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
	}

	function se(t) {
		function e(t, e) {
			var i = kh[e];
			if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
			return se(i)
		}
		var i = /^[ \t]*#include +<([\w\d.]+)>/gm;
		return t.replace(i, e)
	}

	function ce(t) {
		function e(t, e, i, n) {
			for (var r = "", a = parseInt(e); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]");
			return r
		}
		var i = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
		return t.replace(i, e)
	}

	function he(t, e, i, n, r, a) {
		var o = t.context,
			s = n.defines,
			c = r.vertexShader,
			h = r.fragmentShader,
			l = "SHADOWMAP_TYPE_BASIC";
		a.shadowMapType === _a ? l = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === wa && (l =
			"SHADOWMAP_TYPE_PCF_SOFT");
		var u = "ENVMAP_TYPE_CUBE",
			p = "ENVMAP_MODE_REFLECTION",
			d = "ENVMAP_BLENDING_MULTIPLY";
		if (a.envMap) {
			switch (n.envMap.mapping) {
				case vo:
				case yo:
					u = "ENVMAP_TYPE_CUBE";
					break;
				case wo:
				case Mo:
					u = "ENVMAP_TYPE_CUBE_UV";
					break;
				case xo:
				case bo:
					u = "ENVMAP_TYPE_EQUIREC";
					break;
				case _o:
					u = "ENVMAP_TYPE_SPHERE"
			}
			switch (n.envMap.mapping) {
				case yo:
				case bo:
					p = "ENVMAP_MODE_REFRACTION"
			}
			switch (n.combine) {
				case so:
					d = "ENVMAP_BLENDING_MULTIPLY";
					break;
				case co:
					d = "ENVMAP_BLENDING_MIX";
					break;
				case ho:
					d = "ENVMAP_BLENDING_ADD"
			}
		}
		var f, m, g = t.gammaFactor > 0 ? t.gammaFactor : 1,
			v = ie(n.extensions, a, e),
			y = ne(s),
			x = o.createProgram();
		n.isRawShaderMaterial ? (f = [y].filter(ae).join("\n"), f.length > 0 && (f += "\n"), m = [v, y].filter(ae)
			.join("\n"), m.length > 0 && (m += "\n")) : (f = ["precision " + a.precision + " float;",
			"precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, y, a
			.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g,
			"#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a
			.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ?
			"#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.lightMap ? "#define USE_LIGHTMAP" :
			"", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a
			.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a
			.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a
			.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
			a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a
			.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a
			.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a
			.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && a.flatShading === !1 ?
			"#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ?
			"#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + a.numClippingPlanes, a
			.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + l : "", a
			.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ?
			"#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ?
			"#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;",
			"uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;",
			"uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;",
			"attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;",
			"#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;",
			"\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;",
			"\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS",
			"\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;",
			"\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else",
			"\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;",
			"\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif",
			"#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif",
			"\n"
		].filter(ae).join("\n"), m = [v, "precision " + a.precision + " float;", "precision " + a
			.precision + " int;", "#define SHADER_NAME " + r.name, y, a.alphaTest ? "#define ALPHATEST " + a
			.alphaTest : "", "#define GAMMA_FACTOR " + g, a.useFog && a.fog ? "#define USE_FOG" : "", a
			.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ?
			"#define USE_ENVMAP" : "", a.envMap ? "#define " + u : "", a.envMap ? "#define " + p : "", a
			.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ?
			"#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ?
			"#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.specularMap ?
			"#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a
			.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a
			.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a
			.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a
			.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + a.numClippingPlanes,
			"#define UNION_CLIPPING_PLANES " + (a.numClippingPlanes - a.numClipIntersection), a
			.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + l : "", a
			.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ?
			"#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" :
			"", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", a
			.envMap && e.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "",
			"uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== lo ?
			"#define TONE_MAPPING" : "", a.toneMapping !== lo ? kh.tonemapping_pars_fragment : "", a
			.toneMapping !== lo ? ee("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" :
			"", a.outputEncoding || a.mapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? kh
			.encodings_pars_fragment : "", a.mapEncoding ? $t("mapTexelToLinear", a.mapEncoding) : "", a
			.envMapEncoding ? $t("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? $t(
				"emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? te(
				"linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + n
			.depthPacking : "", "\n"
		].filter(ae).join("\n")), c = se(c), c = oe(c, a), h = se(h), h = oe(h, a), n.isShaderMaterial || (c =
			ce(c), h = ce(h));
		var b = f + c,
			_ = m + h,
			w = Qt(o, o.VERTEX_SHADER, b),
			M = Qt(o, o.FRAGMENT_SHADER, _);
		o.attachShader(x, w), o.attachShader(x, M), void 0 !== n.index0AttributeName ? o.bindAttribLocation(x, 0, n
				.index0AttributeName) : a.morphTargets === !0 && o.bindAttribLocation(x, 0, "position"), o
			.linkProgram(x);
		var E = o.getProgramInfoLog(x),
			T = o.getShaderInfoLog(w),
			S = o.getShaderInfoLog(M),
			A = !0,
			R = !0;
		o.getProgramParameter(x, o.LINK_STATUS) === !1 ? (A = !1, console.error(
			"THREE.WebGLProgram: shader error: ", o.getError(), "gl.VALIDATE_STATUS", o.getProgramParameter(
				x, o.VALIDATE_STATUS), "gl.getProgramInfoLog", E, T, S)) : "" !== E ? console.warn(
			"THREE.WebGLProgram: gl.getProgramInfoLog()", E) : "" !== T && "" !== S || (R = !1), R && (this
			.diagnostics = {
				runnable: A,
				material: n,
				programLog: E,
				vertexShader: {
					log: T,
					prefix: f
				},
				fragmentShader: {
					log: S,
					prefix: m
				}
			}), o.deleteShader(w), o.deleteShader(M);
		var L;
		this.getUniforms = function() {
			return void 0 === L && (L = new X(o, x, t)), L
		};
		var P;
		return this.getAttributes = function() {
				return void 0 === P && (P = re(o, x)), P
			}, this.destroy = function() {
				o.deleteProgram(x), this.program = void 0
			}, Object.defineProperties(this, {
				uniforms: {
					get: function() {
						return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this
							.getUniforms()
					}
				},
				attributes: {
					get: function() {
						return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
							this.getAttributes()
					}
				}
			}), this.id = Zh++, this.code = i, this.usedTimes = 1, this.program = x, this.vertexShader = w, this
			.fragmentShader = M, this
	}

	function le(t, e, i) {
		function n(t) {
			var e = t.skeleton,
				n = e.bones;
			if (i.floatVertexTextures) return 1024;
			var r = i.maxVertexUniforms,
				a = Math.floor((r - 20) / 4),
				o = Math.min(a, n.length);
			return o < n.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + n.length +
				" bones. This GPU supports " + o + "."), 0) : o
		}

		function r(t, e) {
			var i;
			return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn(
				"THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
			), i = t.texture.encoding) : i = bs, i === bs && e && (i = ws), i
		}
		var a = [],
			o = {
				MeshDepthMaterial: "depth",
				MeshDistanceMaterial: "distanceRGBA",
				MeshNormalMaterial: "normal",
				MeshBasicMaterial: "basic",
				MeshLambertMaterial: "lambert",
				MeshPhongMaterial: "phong",
				MeshToonMaterial: "phong",
				MeshStandardMaterial: "physical",
				MeshPhysicalMaterial: "physical",
				LineBasicMaterial: "basic",
				LineDashedMaterial: "dashed",
				PointsMaterial: "points",
				ShadowMaterial: "shadow"
			},
			s = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode",
				"envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap",
				"displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap",
				"combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation",
				"logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets",
				"morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights",
				"numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled",
				"shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided",
				"numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"
			];
		this.getParameters = function(e, a, s, c, h, l, u) {
			var p = o[e.type],
				d = u.isSkinnedMesh ? n(u) : 0,
				f = i.precision;
			null !== e.precision && (f = i.getMaxPrecision(e.precision), f !== e.precision && console.warn(
				"THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", f, "instead."
			));
			var m = t.getRenderTarget(),
				g = {
					shaderID: p,
					precision: f,
					supportsVertexTextures: i.vertexTextures,
					outputEncoding: r(m ? m.texture : null, t.gammaOutput),
					map: !!e.map,
					mapEncoding: r(e.map, t.gammaInput),
					envMap: !!e.envMap,
					envMapMode: e.envMap && e.envMap.mapping,
					envMapEncoding: r(e.envMap, t.gammaInput),
					envMapCubeUV: !!e.envMap && (e.envMap.mapping === wo || e.envMap.mapping === Mo),
					lightMap: !!e.lightMap,
					aoMap: !!e.aoMap,
					emissiveMap: !!e.emissiveMap,
					emissiveMapEncoding: r(e.emissiveMap, t.gammaInput),
					bumpMap: !!e.bumpMap,
					normalMap: !!e.normalMap,
					displacementMap: !!e.displacementMap,
					roughnessMap: !!e.roughnessMap,
					metalnessMap: !!e.metalnessMap,
					specularMap: !!e.specularMap,
					alphaMap: !!e.alphaMap,
					gradientMap: !!e.gradientMap,
					combine: e.combine,
					vertexColors: e.vertexColors,
					fog: !!c,
					useFog: e.fog,
					fogExp: c && c.isFogExp2,
					flatShading: e.flatShading,
					sizeAttenuation: e.sizeAttenuation,
					logarithmicDepthBuffer: i.logarithmicDepthBuffer,
					skinning: e.skinning && d > 0,
					maxBones: d,
					useVertexTexture: i.floatVertexTextures,
					morphTargets: e.morphTargets,
					morphNormals: e.morphNormals,
					maxMorphTargets: t.maxMorphTargets,
					maxMorphNormals: t.maxMorphNormals,
					numDirLights: a.directional.length,
					numPointLights: a.point.length,
					numSpotLights: a.spot.length,
					numRectAreaLights: a.rectArea.length,
					numHemiLights: a.hemi.length,
					numClippingPlanes: h,
					numClipIntersection: l,
					dithering: e.dithering,
					shadowMapEnabled: t.shadowMap.enabled && u.receiveShadow && s.length > 0,
					shadowMapType: t.shadowMap.type,
					toneMapping: t.toneMapping,
					physicallyCorrectLights: t.physicallyCorrectLights,
					premultipliedAlpha: e.premultipliedAlpha,
					alphaTest: e.alphaTest,
					doubleSided: e.side === Ta,
					flipSided: e.side === Ea,
					depthPacking: void 0 !== e.depthPacking && e.depthPacking
				};
			return g
		}, this.getProgramCode = function(e, i) {
			var n = [];
			if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !==
				e.defines)
				for (var r in e.defines) n.push(r), n.push(e.defines[r]);
			for (var a = 0; a < s.length; a++) n.push(i[s[a]]);
			return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.join()
		}, this.acquireProgram = function(i, n, r, o) {
			for (var s, c = 0, h = a.length; c < h; c++) {
				var l = a[c];
				if (l.code === o) {
					s = l, ++s.usedTimes;
					break
				}
			}
			return void 0 === s && (s = new he(t, e, o, i, n, r), a.push(s)), s
		}, this.releaseProgram = function(t) {
			if (0 === --t.usedTimes) {
				var e = a.indexOf(t);
				a[e] = a[a.length - 1], a.pop(), t.destroy()
			}
		}, this.programs = a
	}

	function ue(t, e, i, n, r, a, o) {
		function s(t, e) {
			if (t.width > e || t.height > e) {
				var i = e / Math.max(t.width, t.height),
					n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i);
				var r = n.getContext("2d");
				return r.drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), console.warn(
					"THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n
					.width + "x" + n.height, t), n
			}
			return t
		}

		function c(t) {
			return Ps.isPowerOfTwo(t.width) && Ps.isPowerOfTwo(t.height)
		}

		function h(t) {
			if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
				var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				e.width = Ps.floorPowerOfTwo(t.width), e.height = Ps.floorPowerOfTwo(t.height);
				var i = e.getContext("2d");
				return i.drawImage(t, 0, 0, e.width, e.height), console.warn(
					"THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height +
					"). Resized to " + e.width + "x" + e.height, t), e
			}
			return t
		}

		function l(t) {
			return t.wrapS !== To || t.wrapT !== To || t.minFilter !== Ao && t.minFilter !== Po
		}

		function u(t, e) {
			return t.generateMipmaps && e && t.minFilter !== Ao && t.minFilter !== Po
		}

		function p(e) {
			return e === Ao || e === Ro || e === Lo ? t.NEAREST : t.LINEAR
		}

		function d(t) {
			var e = t.target;
			e.removeEventListener("dispose", d), m(e), o.textures--
		}

		function f(t) {
			var e = t.target;
			e.removeEventListener("dispose", f), g(e), o.textures--
		}

		function m(e) {
			var i = n.get(e);
			if (e.image && i.__image__webglTextureCube) t.deleteTexture(i.__image__webglTextureCube);
			else {
				if (void 0 === i.__webglInit) return;
				t.deleteTexture(i.__webglTexture)
			}
			n.remove(e)
		}

		function g(e) {
			var i = n.get(e),
				r = n.get(e.texture);
			if (e) {
				if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e
					.depthTexture.dispose(), e.isWebGLRenderTargetCube)
					for (var a = 0; a < 6; a++) t.deleteFramebuffer(i.__webglFramebuffer[a]), i
						.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[a]);
				else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i
					.__webglDepthbuffer);
				n.remove(e.texture), n.remove(e)
			}
		}

		function v(e, r) {
			var a = n.get(e);
			if (e.version > 0 && a.__version !== e.version) {
				var o = e.image;
				if (void 0 === o) console.warn(
					"THREE.WebGLRenderer: Texture marked for update but image is undefined", e);
				else {
					if (o.complete !== !1) return void _(a, e, r);
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
				}
			}
			i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_2D, a.__webglTexture)
		}

		function y(e, h) {
			var l = n.get(e);
			if (6 === e.image.length)
				if (e.version > 0 && l.__version !== e.version) {
					l.__image__webglTextureCube || (e.addEventListener("dispose", d), l.__image__webglTextureCube =
						t.createTexture(), o.textures++), i.activeTexture(t.TEXTURE0 + h), i.bindTexture(t
						.TEXTURE_CUBE_MAP, l.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e
						.flipY);
					for (var p = e && e.isCompressedTexture, f = e.image[0] && e.image[0].isDataTexture, m = [], g =
							0; g < 6; g++) p || f ? m[g] = f ? e.image[g].image : e.image[g] : m[g] = s(e.image[g],
						r.maxCubemapSize);
					var v = m[0],
						y = c(v),
						x = a.convert(e.format),
						_ = a.convert(e.type);
					b(t.TEXTURE_CUBE_MAP, e, y);
					for (var g = 0; g < 6; g++)
						if (p)
							for (var w, M = m[g].mipmaps, E = 0, T = M.length; E < T; E++) w = M[E], e.format !==
								qo && e.format !== Xo ? i.getCompressedTextureFormats().indexOf(x) > -1 ? i
								.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, E, x, w.width, w.height, 0,
									w.data) : console.warn(
									"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
								) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, E, x, w.width, w.height, 0,
									x, _, w.data);
						else f ? i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, x, m[g].width, m[g].height, 0,
							x, _, m[g].data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, x, x, _, m[g]);
					u(e, y) && t.generateMipmap(t.TEXTURE_CUBE_MAP), l.__version = e.version, e.onUpdate && e
						.onUpdate(e)
				} else i.activeTexture(t.TEXTURE0 + h), i.bindTexture(t.TEXTURE_CUBE_MAP, l
					.__image__webglTextureCube)
		}

		function x(e, r) {
			i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_CUBE_MAP, n.get(e).__webglTexture)
		}

		function b(i, o, s) {
			var c;
			if (s ? (t.texParameteri(i, t.TEXTURE_WRAP_S, a.convert(o.wrapS)), t.texParameteri(i, t.TEXTURE_WRAP_T,
						a.convert(o.wrapT)), t.texParameteri(i, t.TEXTURE_MAG_FILTER, a.convert(o.magFilter)), t
					.texParameteri(i, t.TEXTURE_MIN_FILTER, a.convert(o.minFilter))) : (t.texParameteri(i, t
						.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), o
					.wrapS === To && o.wrapT === To || console.warn(
						"THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",
						o), t.texParameteri(i, t.TEXTURE_MAG_FILTER, p(o.magFilter)), t.texParameteri(i, t
						.TEXTURE_MIN_FILTER, p(o.minFilter)), o.minFilter !== Ao && o.minFilter !== Po && console
					.warn(
						"THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",
						o)), c = e.get("EXT_texture_filter_anisotropic")) {
				if (o.type === zo && null === e.get("OES_texture_float_linear")) return;
				if (o.type === Go && null === e.get("OES_texture_half_float_linear")) return;
				(o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (t.texParameterf(i, c
						.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), n.get(o)
					.__currentAnisotropy = o.anisotropy)
			}
		}

		function _(e, n, p) {
			void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", d), e.__webglTexture = t
				.createTexture(), o.textures++), i.activeTexture(t.TEXTURE0 + p), i.bindTexture(t.TEXTURE_2D, e
				.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY), t.pixelStorei(t
				.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, n
				.unpackAlignment);
			var f = s(n.image, r.maxTextureSize);
			l(n) && c(f) === !1 && (f = h(f));
			var m = c(f),
				g = a.convert(n.format),
				v = a.convert(n.type);
			b(t.TEXTURE_2D, n, m);
			var y, x = n.mipmaps;
			if (n.isDepthTexture) {
				var _ = t.DEPTH_COMPONENT;
				if (n.type === zo) {
					if (!R) throw new Error("Float Depth Texture only supported in WebGL2.0");
					_ = t.DEPTH_COMPONENT32F
				} else R && (_ = t.DEPTH_COMPONENT16);
				n.format === Qo && _ === t.DEPTH_COMPONENT && n.type !== No && n.type !== Bo && (console.warn(
					"THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
				), n.type = No, v = a.convert(n.type)), n.format === Ko && (_ = t.DEPTH_STENCIL, n.type !==
					jo && (console.warn(
							"THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
						n.type = jo, v = a.convert(n.type))), i.texImage2D(t.TEXTURE_2D, 0, _, f.width, f
					.height, 0, g, v, null)
			} else if (n.isDataTexture)
				if (x.length > 0 && m) {
					for (var w = 0, M = x.length; w < M; w++) y = x[w], i.texImage2D(t.TEXTURE_2D, w, g, y.width, y
						.height, 0, g, v, y.data);
					n.generateMipmaps = !1
				} else i.texImage2D(t.TEXTURE_2D, 0, g, f.width, f.height, 0, g, v, f.data);
			else if (n.isCompressedTexture)
				for (var w = 0, M = x.length; w < M; w++) y = x[w], n.format !== qo && n.format !== Xo ? i
					.getCompressedTextureFormats().indexOf(g) > -1 ? i.compressedTexImage2D(t.TEXTURE_2D, w, g, y
						.width, y.height, 0, y.data) : console.warn(
						"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
					) : i.texImage2D(t.TEXTURE_2D, w, g, y.width, y.height, 0, g, v, y.data);
			else if (x.length > 0 && m) {
				for (var w = 0, M = x.length; w < M; w++) y = x[w], i.texImage2D(t.TEXTURE_2D, w, g, g, v, y);
				n.generateMipmaps = !1
			} else "undefined" != typeof AVR.__fixHlsRender ? (void 0 === n.fixCanvas && (n.fixCanvas = document
					.createElement("canvas"), n.fixCanvasCtx = n.fixCanvas.getContext("2d")), n.fixCanvas
				.width = f.videoWidth || f.width, n.fixCanvas.height = f.videoHeight || f.height, n.fixCanvasCtx
				.drawImage(f, 0, 0, n.fixCanvas.width, n.fixCanvas.height), i.texImage2D(t.TEXTURE_2D, 0, g, g,
					v, n.fixCanvas)) : i.texImage2D(t.TEXTURE_2D, 0, g, g, v, f);
			u(n, m) && t.generateMipmap(t.TEXTURE_2D), e.__version = n.version, n.onUpdate && n.onUpdate(n)
		}

		function w(e, r, o, s) {
			var c = a.convert(r.texture.format),
				h = a.convert(r.texture.type);
			i.texImage2D(s, 0, c, r.width, r.height, 0, c, h, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t
				.framebufferTexture2D(t.FRAMEBUFFER, o, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t
					.FRAMEBUFFER, null)
		}

		function M(e, i) {
			t.bindRenderbuffer(t.RENDERBUFFER, e), i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(t
					.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height), t.framebufferRenderbuffer(t
					.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : i.depthBuffer && i.stencilBuffer ? (t
					.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height), t
					.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t
				.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i.width, i.height), t.bindRenderbuffer(t.RENDERBUFFER,
					null)
		}

		function E(e, i) {
			var r = i && i.isWebGLRenderTargetCube;
			if (r) throw new Error("Depth Texture with cube render targets is not supported");
			if (t.bindFramebuffer(t.FRAMEBUFFER, e), !i.depthTexture || !i.depthTexture.isDepthTexture)
				throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
			n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image
				.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i
					.height, i.depthTexture.needsUpdate = !0), v(i.depthTexture, 0);
			var a = n.get(i.depthTexture).__webglTexture;
			if (i.depthTexture.format === Qo) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t
				.TEXTURE_2D, a, 0);
			else {
				if (i.depthTexture.format !== Ko) throw new Error("Unknown depthTexture format");
				t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, a, 0)
			}
		}

		function T(e) {
			var i = n.get(e),
				r = e.isWebGLRenderTargetCube === !0;
			if (e.depthTexture) {
				if (r) throw new Error("target.depthTexture not supported in Cube render targets");
				E(i.__webglFramebuffer, e)
			} else if (r) {
				i.__webglDepthbuffer = [];
				for (var a = 0; a < 6; a++) t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer[a]), i
					.__webglDepthbuffer[a] = t.createRenderbuffer(), M(i.__webglDepthbuffer[a], e)
			} else t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer = t
				.createRenderbuffer(), M(i.__webglDepthbuffer, e);
			t.bindFramebuffer(t.FRAMEBUFFER, null)
		}

		function S(e) {
			var r = n.get(e),
				a = n.get(e.texture);
			e.addEventListener("dispose", f), a.__webglTexture = t.createTexture(), o.textures++;
			var s = e.isWebGLRenderTargetCube === !0,
				h = c(e);
			if (s) {
				r.__webglFramebuffer = [];
				for (var l = 0; l < 6; l++) r.__webglFramebuffer[l] = t.createFramebuffer()
			} else r.__webglFramebuffer = t.createFramebuffer();
			if (s) {
				i.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture), b(t.TEXTURE_CUBE_MAP, e.texture, h);
				for (var l = 0; l < 6; l++) w(r.__webglFramebuffer[l], e, t.COLOR_ATTACHMENT0, t
					.TEXTURE_CUBE_MAP_POSITIVE_X + l);
				u(e.texture, h) && t.generateMipmap(t.TEXTURE_CUBE_MAP), i.bindTexture(t.TEXTURE_CUBE_MAP, null)
			} else i.bindTexture(t.TEXTURE_2D, a.__webglTexture), b(t.TEXTURE_2D, e.texture, h), w(r
				.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), u(e.texture, h) && t.generateMipmap(
				t.TEXTURE_2D), i.bindTexture(t.TEXTURE_2D, null);
			e.depthBuffer && T(e)
		}

		function A(e) {
			var r = e.texture,
				a = c(e);
			if (u(r, a)) {
				var o = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
					s = n.get(r).__webglTexture;
				i.bindTexture(o, s), t.generateMipmap(o), i.bindTexture(o, null)
			}
		}
		var R = "undefined" != typeof WebGL2RenderingContext && t instanceof window.WebGL2RenderingContext;
		this.setTexture2D = v, this.setTextureCube = y, this.setTextureCubeDynamic = x, this.setupRenderTarget = S,
			this.updateRenderTargetMipmap = A
	}

	function pe() {
		function t(t) {
			var e = t.uuid,
				i = n[e];
			return void 0 === i && (i = {}, n[e] = i), i
		}

		function e(t) {
			delete n[t.uuid]
		}

		function i() {
			n = {}
		}
		var n = {};
		return {
			get: t,
			remove: e,
			clear: i
		}
	}

	function de(t, e, i) {
		function n() {
			var e = !1,
				i = new c,
				n = null,
				r = new c(0, 0, 0, 0);
			return {
				setMask: function(i) {
					n === i || e || (t.colorMask(i, i, i, i), n = i)
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e, n, a, o, s) {
					s === !0 && (e *= o, n *= o, a *= o), i.set(e, n, a, o), r.equals(i) === !1 && (t
						.clearColor(e, n, a, o), r.copy(i))
				},
				reset: function() {
					e = !1, n = null, r.set(-1, 0, 0, 0)
				}
			}
		}

		function r() {
			var e = !1,
				i = null,
				n = null,
				r = null;
			return {
				setTest: function(e) {
					e ? p(t.DEPTH_TEST) : d(t.DEPTH_TEST)
				},
				setMask: function(n) {
					i === n || e || (t.depthMask(n), i = n)
				},
				setFunc: function(e) {
					if (n !== e) {
						if (e) switch (e) {
							case $a:
								t.depthFunc(t.NEVER);
								break;
							case to:
								t.depthFunc(t.ALWAYS);
								break;
							case eo:
								t.depthFunc(t.LESS);
								break;
							case io:
								t.depthFunc(t.LEQUAL);
								break;
							case no:
								t.depthFunc(t.EQUAL);
								break;
							case ro:
								t.depthFunc(t.GEQUAL);
								break;
							case ao:
								t.depthFunc(t.GREATER);
								break;
							case oo:
								t.depthFunc(t.NOTEQUAL);
								break;
							default:
								t.depthFunc(t.LEQUAL)
						} else t.depthFunc(t.LEQUAL);
						n = e
					}
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e) {
					r !== e && (t.clearDepth(e), r = e)
				},
				reset: function() {
					e = !1, i = null, n = null, r = null
				}
			}
		}

		function a() {
			var e = !1,
				i = null,
				n = null,
				r = null,
				a = null,
				o = null,
				s = null,
				c = null,
				h = null;
			return {
				setTest: function(e) {
					e ? p(t.STENCIL_TEST) : d(t.STENCIL_TEST)
				},
				setMask: function(n) {
					i === n || e || (t.stencilMask(n), i = n)
				},
				setFunc: function(e, i, o) {
					n === e && r === i && a === o || (t.stencilFunc(e, i, o), n = e, r = i, a = o)
				},
				setOp: function(e, i, n) {
					o === e && s === i && c === n || (t.stencilOp(e, i, n), o = e, s = i, c = n)
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e) {
					h !== e && (t.clearStencil(e), h = e)
				},
				reset: function() {
					e = !1, i = null, n = null, r = null, a = null, o = null, s = null, c = null, h = null
				}
			}
		}

		function o(e, i, n) {
			var r = new Uint8Array(4),
				a = t.createTexture();
			t.bindTexture(e, a), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t
				.TEXTURE_MAG_FILTER, t.NEAREST);
			for (var o = 0; o < n; o++) t.texImage2D(i + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
			return a
		}

		function s() {
			for (var t = 0, e = D.length; t < e; t++) D[t] = 0
		}

		function h(i) {
			if (D[i] = 1, 0 === O[i] && (t.enableVertexAttribArray(i), O[i] = 1), 0 !== N[i]) {
				var n = e.get("ANGLE_instanced_arrays");
				n.vertexAttribDivisorANGLE(i, 0), N[i] = 0
			}
		}

		function l(i, n) {
			if (D[i] = 1, 0 === O[i] && (t.enableVertexAttribArray(i), O[i] = 1), N[i] !== n) {
				var r = e.get("ANGLE_instanced_arrays");
				r.vertexAttribDivisorANGLE(i, n), N[i] = n
			}
		}

		function u() {
			for (var e = 0, i = O.length; e !== i; ++e) O[e] !== D[e] && (t.disableVertexAttribArray(e), O[e] = 0)
		}

		function p(e) {
			F[e] !== !0 && (t.enable(e), F[e] = !0)
		}

		function d(e) {
			F[e] !== !1 && (t.disable(e), F[e] = !1)
		}

		function f() {
			if (null === B && (B = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get(
					"WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
				for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++) B.push(i[n]);
			return B
		}

		function m(e) {
			return z !== e && (t.useProgram(e), z = e, !0)
		}

		function g(e, n, r, a, o, s, c, h) {
			if (e !== Ca ? p(t.BLEND) : d(t.BLEND), e !== Na) {
				if (e !== G || h !== q) switch (e) {
					case Ua:
						h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE,
							t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE));
						break;
					case Da:
						h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t
							.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t
							.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR));
						break;
					case Oa:
						h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t
							.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t
							.ZERO, t.SRC_COLOR));
						break;
					default:
						h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t
							.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(
							t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t
							.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA))
				}
				H = null, V = null, k = null, j = null, W = null, X = null
			} else o = o || n, s = s || r, c = c || a, n === H && o === j || (t.blendEquationSeparate(i.convert(n),
				i.convert(o)), H = n, j = o), r === V && a === k && s === W && c === X || (t.blendFuncSeparate(i
				.convert(r), i.convert(a), i.convert(s), i.convert(c)), V = r, k = a, W = s, X = c);
			G = e, q = h
		}

		function v(e) {
			e.side === Ta ? d(t.CULL_FACE) : p(t.CULL_FACE), y(e.side === Ea), e.transparent === !0 ? g(e.blending,
				e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha,
				e.premultipliedAlpha) : g(Ca), C.setFunc(e.depthFunc), C.setTest(e.depthTest), C.setMask(e
				.depthWrite), P.setMask(e.colorWrite), _(e.polygonOffset, e.polygonOffsetFactor, e
				.polygonOffsetUnits)
		}

		function y(e) {
			Y !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), Y = e)
		}

		function x(e) {
			e !== fa ? (p(t.CULL_FACE), e !== Z && (e === ma ? t.cullFace(t.BACK) : e === ga ? t.cullFace(t.FRONT) :
				t.cullFace(t.FRONT_AND_BACK))) : d(t.CULL_FACE), Z = e
		}

		function b(e) {
			e !== J && (et && t.lineWidth(e), J = e)
		}

		function _(e, i, n) {
			e ? (p(t.POLYGON_OFFSET_FILL), Q === i && K === n || (t.polygonOffset(i, n), Q = i, K = n)) : d(t
				.POLYGON_OFFSET_FILL)
		}

		function w(e) {
			e ? p(t.SCISSOR_TEST) : d(t.SCISSOR_TEST)
		}

		function M(e) {
			void 0 === e && (e = t.TEXTURE0 + $ - 1), it !== e && (t.activeTexture(e), it = e)
		}

		function E(e, i) {
			null === it && M();
			var n = nt[it];
			void 0 === n && (n = {
				type: void 0,
				texture: void 0
			}, nt[it] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || ot[e]), n.type = e, n
				.texture = i)
		}

		function T() {
			try {
				t.compressedTexImage2D.apply(t, arguments)
			} catch (e) {
				console.error("THREE.WebGLState:", e)
			}
		}

		function S() {
			try {
				t.texImage2D.apply(t, arguments)
			} catch (e) {
				console.error("THREE.WebGLState:", e)
			}
		}

		function A(e) {
			rt.equals(e) === !1 && (t.scissor(e.x, e.y, e.z, e.w), rt.copy(e))
		}

		function R(e) {
			at.equals(e) === !1 && (t.viewport(e.x, e.y, e.z, e.w), at.copy(e))
		}

		function L() {
			for (var e = 0; e < O.length; e++) 1 === O[e] && (t.disableVertexAttribArray(e), O[e] = 0);
			F = {}, B = null, it = null, nt = {}, z = null, G = null, Y = null, Z = null, P.reset(), C.reset(), I
				.reset()
		}
		var P = new n,
			C = new r,
			I = new a,
			U = t.getParameter(t.MAX_VERTEX_ATTRIBS),
			D = new Uint8Array(U),
			O = new Uint8Array(U),
			N = new Uint8Array(U),
			F = {},
			B = null,
			z = null,
			G = null,
			H = null,
			V = null,
			k = null,
			j = null,
			W = null,
			X = null,
			q = !1,
			Y = null,
			Z = null,
			J = null,
			Q = null,
			K = null,
			$ = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
			tt = parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]),
			et = parseFloat(tt) >= 1,
			it = null,
			nt = {},
			rt = new c,
			at = new c,
			ot = {};
		return ot[t.TEXTURE_2D] = o(t.TEXTURE_2D, t.TEXTURE_2D, 1), ot[t.TEXTURE_CUBE_MAP] = o(t.TEXTURE_CUBE_MAP, t
			.TEXTURE_CUBE_MAP_POSITIVE_X, 6), P.setClear(0, 0, 0, 1), C.setClear(1), I.setClear(0), p(t
			.DEPTH_TEST), C.setFunc(io), y(!1), x(ma), p(t.CULL_FACE), p(t.BLEND), g(Ia), {
			buffers: {
				color: P,
				depth: C,
				stencil: I
			},
			initAttributes: s,
			enableAttribute: h,
			enableAttributeAndDivisor: l,
			disableUnusedAttributes: u,
			enable: p,
			disable: d,
			getCompressedTextureFormats: f,
			useProgram: m,
			setBlending: g,
			setMaterial: v,
			setFlipSided: y,
			setCullFace: x,
			setLineWidth: b,
			setPolygonOffset: _,
			setScissorTest: w,
			activeTexture: M,
			bindTexture: E,
			compressedTexImage2D: T,
			texImage2D: S,
			scissor: A,
			viewport: R,
			reset: L
		}
	}

	function fe(t, e, i) {
		function n() {
			if (void 0 !== a) return a;
			var i = e.get("EXT_texture_filter_anisotropic");
			return a = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
		}

		function r(e) {
			if ("highp" === e) {
				if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t
					.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
				e = "mediump"
			}
			return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t
				.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
		}
		var a, o = void 0 !== i.precision ? i.precision : "highp",
			s = r(o);
		s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
		var c = i.logarithmicDepthBuffer === !0,
			h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
			l = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
			u = t.getParameter(t.MAX_TEXTURE_SIZE),
			p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
			d = t.getParameter(t.MAX_VERTEX_ATTRIBS),
			f = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
			m = t.getParameter(t.MAX_VARYING_VECTORS),
			g = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
			v = l > 0,
			y = !!e.get("OES_texture_float"),
			x = v && y;
		return {
			getMaxAnisotropy: n,
			getMaxPrecision: r,
			precision: o,
			logarithmicDepthBuffer: c,
			maxTextures: h,
			maxVertexTextures: l,
			maxTextureSize: u,
			maxCubemapSize: p,
			maxAttributes: d,
			maxVertexUniforms: f,
			maxVaryings: m,
			maxFragmentUniforms: g,
			vertexTextures: v,
			floatFragmentTextures: y,
			floatVertexTextures: x
		}
	}

	function me(t, e, i, n) {
		lt.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near =
			void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ?
			e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
	}

	function ge(t) {
		me.call(this), this.cameras = t || []
	}

	function ve(t) {
		function e() {
			if (null !== r && r.isPresenting) {
				var e = r.getEyeParameters("left"),
					n = e.renderWidth,
					a = e.renderHeight;
				f = t.getPixelRatio(), d = t.getSize(), t.setDrawingBufferSize(2 * n, a, 1)
			} else i.enabled && t.setDrawingBufferSize(d.width, d.height, f)
		}
		var i = this,
			r = null,
			a = null;
		"undefined" != typeof window && "VRFrameData" in window && (a = new window.VRFrameData);
		var o = new n,
			s = new n,
			h = new n,
			l = new me;
		l.bounds = new c(0, 0, .5, 1), l.layers.enable(1);
		var u = new me;
		u.bounds = new c(.5, 0, .5, 1), u.layers.enable(2);
		var p = new ge([l, u]);
		p.layers.enable(1), p.layers.enable(2);
		var d, f;
		"undefined" != typeof window && window.addEventListener("vrdisplaypresentchange", e, !1), this.enabled = !1,
			this.standing = !1, this.getDevice = function() {
				return r
			}, this.setDevice = function(t) {
				void 0 !== t && (r = t)
			}, this.getCamera = function(t) {
				if (null === r) return t;
				r.depthNear = t.near, r.depthFar = t.far, r.getFrameData(a);
				var e = a.pose;
				null !== e.position ? t.position.fromArray(e.position) : t.position.set(0, 0, 0), null !== e
					.orientation && t.quaternion.fromArray(e.orientation), t.updateMatrixWorld();
				var i = r.stageParameters;
				if (this.standing && i && (s.fromArray(i.sittingToStandingTransform), h.getInverse(s), t.matrixWorld
						.multiply(s), t.matrixWorldInverse.multiply(h)), r.isPresenting === !1) return t;
				l.near = t.near, u.near = t.near, l.far = t.far, u.far = t.far, p.matrixWorld.copy(t.matrixWorld), p
					.matrixWorldInverse.copy(t.matrixWorldInverse), l.matrixWorldInverse.fromArray(a
						.leftViewMatrix), u.matrixWorldInverse.fromArray(a.rightViewMatrix), this.standing && i && (
						l
						.matrixWorldInverse.multiply(h), u.matrixWorldInverse.multiply(h));
				var n = t.parent;
				null !== n && (o.getInverse(n.matrixWorld), l.matrixWorldInverse.multiply(o), u.matrixWorldInverse
						.multiply(o)), l.matrixWorld.getInverse(l.matrixWorldInverse), u.matrixWorld.getInverse(u
						.matrixWorldInverse), l.projectionMatrix.fromArray(a.leftProjectionMatrix), u
					.projectionMatrix.fromArray(a.rightProjectionMatrix), p.projectionMatrix.copy(l
						.projectionMatrix);
				var c = r.getLayers();
				if (c.length) {
					var d = c[0];
					null !== d.leftBounds && 4 === d.leftBounds.length && l.bounds.fromArray(d.leftBounds), null !==
						d.rightBounds && 4 === d.rightBounds.length && u.bounds.fromArray(d.rightBounds)
				}
				return p
			}, this.getStandingMatrix = function() {
				return s
			}, this.submitFrame = function() {
				r && r.isPresenting && r.submitFrame()
			}, this.dispose = function() {
				"undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", e)
			}
	}

	function ye(t) {
		var e = {};
		return {
			get: function(i) {
				if (void 0 !== e[i]) return e[i];
				var n;
				switch (i) {
					case "WEBGL_depth_texture":
						n = t.getExtension("WEBGL_depth_texture") || t.getExtension(
							"MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
						break;
					case "EXT_texture_filter_anisotropic":
						n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension(
							"MOZ_EXT_texture_filter_anisotropic") || t.getExtension(
							"WEBKIT_EXT_texture_filter_anisotropic");
						break;
					case "WEBGL_compressed_texture_s3tc":
						n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension(
							"MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension(
							"WEBKIT_WEBGL_compressed_texture_s3tc");
						break;
					case "WEBGL_compressed_texture_pvrtc":
						n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension(
							"WEBKIT_WEBGL_compressed_texture_pvrtc");
						break;
					case "WEBGL_compressed_texture_etc1":
						n = t.getExtension("WEBGL_compressed_texture_etc1");
						break;
					default:
						n = t.getExtension(i)
				}
				return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), e[
					i] = n, n
			}
		}
	}

	function xe() {
		function t() {
			l.value !== n && (l.value = n, l.needsUpdate = r > 0), i.numPlanes = r, i.numIntersection = 0
		}

		function e(t, e, n, r) {
			var a = null !== t ? t.length : 0,
				o = null;
			if (0 !== a) {
				if (o = l.value, r !== !0 || null === o) {
					var s = n + 4 * a,
						u = e.matrixWorldInverse;
					h.getNormalMatrix(u), (null === o || o.length < s) && (o = new Float32Array(s));
					for (var p = 0, d = n; p !== a; ++p, d += 4) c.copy(t[p]).applyMatrix4(u, h), c.normal.toArray(
						o, d), o[d + 3] = c.constant
				}
				l.value = o, l.needsUpdate = !0
			}
			return i.numPlanes = a, o
		}
		var i = this,
			n = null,
			r = 0,
			a = !1,
			s = !1,
			c = new nt,
			h = new o,
			l = {
				value: null,
				needsUpdate: !1
			};
		this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, i, o) {
			var s = 0 !== t.length || i || 0 !== r || a;
			return a = i, n = e(t, o, 0), r = t.length, s
		}, this.beginShadows = function() {
			s = !0, e(null)
		}, this.endShadows = function() {
			s = !1, t()
		}, this.setState = function(i, o, c, h, u, p) {
			if (!a || null === i || 0 === i.length || s && !c) s ? e(null) : t();
			else {
				var d = s ? 0 : r,
					f = 4 * d,
					m = u.clippingState || null;
				l.value = m, m = e(i, h, f, p);
				for (var g = 0; g !== f; ++g) m[g] = n[g];
				u.clippingState = m, this.numIntersection = o ? this.numPlanes : 0, this.numPlanes += d
			}
		}
	}

	function be(t, e) {
		function i(i) {
			var n;
			if (i === Eo) return t.REPEAT;
			if (i === To) return t.CLAMP_TO_EDGE;
			if (i === So) return t.MIRRORED_REPEAT;
			if (i === Ao) return t.NEAREST;
			if (i === Ro) return t.NEAREST_MIPMAP_NEAREST;
			if (i === Lo) return t.NEAREST_MIPMAP_LINEAR;
			if (i === Po) return t.LINEAR;
			if (i === Co) return t.LINEAR_MIPMAP_NEAREST;
			if (i === Io) return t.LINEAR_MIPMAP_LINEAR;
			if (i === Uo) return t.UNSIGNED_BYTE;
			if (i === Ho) return t.UNSIGNED_SHORT_4_4_4_4;
			if (i === Vo) return t.UNSIGNED_SHORT_5_5_5_1;
			if (i === ko) return t.UNSIGNED_SHORT_5_6_5;
			if (i === Do) return t.BYTE;
			if (i === Oo) return t.SHORT;
			if (i === No) return t.UNSIGNED_SHORT;
			if (i === Fo) return t.INT;
			if (i === Bo) return t.UNSIGNED_INT;
			if (i === zo) return t.FLOAT;
			if (i === Go && (n = e.get("OES_texture_half_float"), null !== n)) return n.HALF_FLOAT_OES;
			if (i === Wo) return t.ALPHA;
			if (i === Xo) return t.RGB;
			if (i === qo) return t.RGBA;
			if (i === Yo) return t.LUMINANCE;
			if (i === Zo) return t.LUMINANCE_ALPHA;
			if (i === Qo) return t.DEPTH_COMPONENT;
			if (i === Ko) return t.DEPTH_STENCIL;
			if (i === Fa) return t.FUNC_ADD;
			if (i === Ba) return t.FUNC_SUBTRACT;
			if (i === za) return t.FUNC_REVERSE_SUBTRACT;
			if (i === Va) return t.ZERO;
			if (i === ka) return t.ONE;
			if (i === ja) return t.SRC_COLOR;
			if (i === Wa) return t.ONE_MINUS_SRC_COLOR;
			if (i === Xa) return t.SRC_ALPHA;
			if (i === qa) return t.ONE_MINUS_SRC_ALPHA;
			if (i === Ya) return t.DST_ALPHA;
			if (i === Za) return t.ONE_MINUS_DST_ALPHA;
			if (i === Ja) return t.DST_COLOR;
			if (i === Qa) return t.ONE_MINUS_DST_COLOR;
			if (i === Ka) return t.SRC_ALPHA_SATURATE;
			if ((i === $o || i === ts || i === es || i === is) && (n = e.get("WEBGL_compressed_texture_s3tc"),
					null !== n)) {
				if (i === $o) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (i === ts) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (i === es) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (i === is) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
			}
			if ((i === ns || i === rs || i === as || i === os) && (n = e.get("WEBGL_compressed_texture_pvrtc"),
					null !== n)) {
				if (i === ns) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (i === rs) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (i === as) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (i === os) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
			}
			if (i === ss && (n = e.get("WEBGL_compressed_texture_etc1"), null !== n)) return n
				.COMPRESSED_RGB_ETC1_WEBGL;
			if ((i === Ga || i === Ha) && (n = e.get("EXT_blend_minmax"), null !== n)) {
				if (i === Ga) return n.MIN_EXT;
				if (i === Ha) return n.MAX_EXT
			}
			return i === jo && (n = e.get("WEBGL_depth_texture"), null !== n) ? n.UNSIGNED_INT_24_8_WEBGL : 0
		}
		return {
			convert: i
		}
	}

	function _e(t) {
		function e() {
			return null === tt ? mt : 1
		}

		function i() {
			Pt = new ye(At), Pt.get("WEBGL_depth_texture"), Pt.get("OES_texture_float"), Pt.get(
					"OES_texture_float_linear"), Pt.get("OES_texture_half_float"), Pt.get(
					"OES_texture_half_float_linear"), Pt.get("OES_standard_derivatives"), Pt.get(
					"OES_element_index_uint"), Pt.get("ANGLE_instanced_arrays"), ee = new be(At, Pt), Ct = new fe(
					At, Pt, t), It = new de(At, Pt, ee), It.scissor(lt.copy(vt).multiplyScalar(mt)), It.viewport(ht
					.copy(gt).multiplyScalar(mt)), Ut = new pe, Dt = new ue(At, Pt, It, Ut, Ct, ee, Tt), Ot =
				new ot(At), Nt = new Xt(At, Ot, Tt), Bt = new Zt(Nt, St), Jt = new kt(At), Gt = new le(K, Pt, Ct),
				zt = new Yt, Vt = new Ht, qt = new Ft(K, It, Nt, V), Qt = new Wt(At, Pt, St), Kt = new jt(At, Pt,
					St), $t = new Z(K, At, It, Dt, Ct), te = new Q(K, At, It, Dt, Ct), K.info.programs = Gt
				.programs, K.context = At, K.capabilities = Ct, K.extensions = Pt, K.properties = Ut, K
				.renderLists = Vt, K.state = It
		}

		function r(t) {
			t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), $ = !0
		}

		function o() {
			console.log("THREE.WebGLRenderer: Context Restored."), $ = !1, i()
		}

		function s(t) {
			var e = t.target;
			e.removeEventListener("dispose", s), h(e)
		}

		function h(t) {
			l(t), Ut.remove(t)
		}

		function l(t) {
			var e = Ut.get(t).program;
			t.program = void 0, void 0 !== e && Gt.releaseProgram(e)
		}

		function p(t, e, i) {
			t.render(function(t) {
				K.renderBufferImmediate(t, e, i)
			})
		}

		function d(t, e, i, n) {
			if (i && i.isInstancedBufferGeometry && null === Pt.get("ANGLE_instanced_arrays")) return void console
				.error(
					"THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
				);
			void 0 === n && (n = 0), It.initAttributes();
			var r = i.attributes,
				a = e.getAttributes(),
				o = t.defaultAttributeValues;
			for (var s in a) {
				var c = a[s];
				if (c >= 0) {
					var h = r[s];
					if (void 0 !== h) {
						var l = h.normalized,
							u = h.itemSize,
							p = Ot.get(h);
						if (void 0 === p) continue;
						var d = p.buffer,
							f = p.type,
							m = p.bytesPerElement;
						if (h.isInterleavedBufferAttribute) {
							var g = h.data,
								v = g.stride,
								y = h.offset;
							g && g.isInstancedInterleavedBuffer ? (It.enableAttributeAndDivisor(c, g
								.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount =
								g.meshPerAttribute * g.count)) : It.enableAttribute(c), At.bindBuffer(At
								.ARRAY_BUFFER, d), At.vertexAttribPointer(c, u, f, l, v * m, (n * v + y) * m)
						} else h.isInstancedBufferAttribute ? (It.enableAttributeAndDivisor(c, h.meshPerAttribute),
								void 0 === i.maxInstancedCount && (i.maxInstancedCount = h.meshPerAttribute * h
									.count)) : It.enableAttribute(c), At.bindBuffer(At.ARRAY_BUFFER, d), At
							.vertexAttribPointer(c, u, f, l, 0, n * u * m)
					} else if (void 0 !== o) {
						var x = o[s];
						if (void 0 !== x) switch (x.length) {
							case 2:
								At.vertexAttrib2fv(c, x);
								break;
							case 3:
								At.vertexAttrib3fv(c, x);
								break;
							case 4:
								At.vertexAttrib4fv(c, x);
								break;
							default:
								At.vertexAttrib1fv(c, x)
						}
					}
				}
			}
			It.disableUnusedAttributes()
		}

		function f() {
			if (!re) {
				var t = ie.getDevice();
				t && t.isPresenting ? t.requestAnimationFrame(m) : window.requestAnimationFrame(m), re = !0
			}
		}

		function m(t) {
			null !== ae && ae(t);
			var e = ie.getDevice();
			e && e.isPresenting ? e.requestAnimationFrame(m) : window.requestAnimationFrame(m)
		}

		function g(t, e, i) {
			if (t.visible !== !1) {
				var n = t.layers.test(e.layers);
				if (n)
					if (t.isLight) j.push(t), t.castShadow && W.push(t);
					else if (t.isSprite) t.frustumCulled && !xt.intersectsSprite(t) || Y.push(t);
				else if (t.isLensFlare) J.push(t);
				else if (t.isImmediateRenderObject) i && Et.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Mt), q
					.push(t, null, t.material, Et.z, null);
				else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t
						.frustumCulled || xt.intersectsObject(t))) {
					i && Et.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Mt);
					var r = Bt.update(t),
						a = t.material;
					if (Array.isArray(a))
						for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
							var h = o[s],
								l = a[h.materialIndex];
							l && l.visible && q.push(t, r, l, Et.z, h)
						} else a.visible && q.push(t, r, a, Et.z, null)
				}
				for (var u = t.children, s = 0, c = u.length; s < c; s++) g(u[s], e, i)
			}
		}

		function v(t, e, i, n) {
			for (var r = 0, a = t.length; r < a; r++) {
				var o = t[r],
					s = o.object,
					c = o.geometry,
					h = void 0 === n ? o.material : n,
					l = o.group;
				if (i.isArrayCamera) {
					ct = i;
					for (var u = i.cameras, p = 0, d = u.length; p < d; p++) {
						var f = u[p];
						if (s.layers.test(f.layers)) {
							var m = f.bounds,
								g = m.x * dt,
								v = m.y * ft,
								x = m.z * dt,
								b = m.w * ft;
							It.viewport(ht.set(g, v, x, b).multiplyScalar(mt)), y(s, e, f, c, h, l)
						}
					}
				} else ct = null, y(s, e, i, c, h, l)
			}
		}

		function y(t, e, i, n, r, a) {
			if (t.onBeforeRender(K, e, i, n, r, a), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t
					.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
				It.setMaterial(r);
				var o = b(i, e.fog, r, t);
				nt = "", p(t, o, r)
			} else K.renderBufferDirect(i, e.fog, n, r, t, a);
			t.onAfterRender(K, e, i, n, r, a)
		}

		function x(t, e, i) {
			var n = Ut.get(t),
				r = Gt.getParameters(t, zt.state, W, e, bt.numPlanes, bt.numIntersection, i),
				a = Gt.getProgramCode(t, r),
				o = n.program,
				c = !0;
			if (void 0 === o) t.addEventListener("dispose", s);
			else if (o.code !== a) l(t);
			else {
				if (void 0 !== r.shaderID) return;
				c = !1
			}
			if (c) {
				if (r.shaderID) {
					var h = jh[r.shaderID];
					n.shader = {
						name: t.type,
						uniforms: Hs.clone(h.uniforms),
						vertexShader: h.vertexShader,
						fragmentShader: h.fragmentShader
					}
				} else n.shader = {
					name: t.type,
					uniforms: t.uniforms,
					vertexShader: t.vertexShader,
					fragmentShader: t.fragmentShader
				};
				t.onBeforeCompile(n.shader), o = Gt.acquireProgram(t, n.shader, r, a), n.program = o, t.program = o
			}
			var u = o.getAttributes();
			if (t.morphTargets) {
				t.numSupportedMorphTargets = 0;
				for (var p = 0; p < K.maxMorphTargets; p++) u["morphTarget" + p] >= 0 && t
					.numSupportedMorphTargets++
			}
			if (t.morphNormals) {
				t.numSupportedMorphNormals = 0;
				for (var p = 0; p < K.maxMorphNormals; p++) u["morphNormal" + p] >= 0 && t
					.numSupportedMorphNormals++
			}
			var d = n.shader.uniforms;
			(t.isShaderMaterial || t.isRawShaderMaterial) && t.clipping !== !0 || (n.numClippingPlanes = bt
					.numPlanes, n.numIntersection = bt.numIntersection, d.clippingPlanes = bt.uniform), n.fog = e, n
				.lightsHash = zt.state.hash, t.lights && (d.ambientLightColor.value = zt.state.ambient, d
					.directionalLights.value = zt.state.directional, d.spotLights.value = zt.state.spot, d
					.rectAreaLights.value = zt.state.rectArea, d.pointLights.value = zt.state.point, d
					.hemisphereLights.value = zt.state.hemi, d.directionalShadowMap.value = zt.state
					.directionalShadowMap, d.directionalShadowMatrix.value = zt.state.directionalShadowMatrix, d
					.spotShadowMap.value = zt.state.spotShadowMap, d.spotShadowMatrix.value = zt.state
					.spotShadowMatrix, d.pointShadowMap.value = zt.state.pointShadowMap, d.pointShadowMatrix.value =
					zt.state.pointShadowMatrix);
			var f = n.program.getUniforms(),
				m = X.seqWithValue(f.seq, d);
			n.uniformsList = m
		}

		function b(t, e, i, n) {
			pt = 0;
			var r = Ut.get(i);
			if (_t && (wt || t !== st)) {
				var a = t === st && i.id === it;
				bt.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, a)
			}
			i.needsUpdate === !1 && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i
				.needsUpdate = !0 : i.lights && r.lightsHash !== zt.state.hash ? i.needsUpdate = !0 : void 0 ===
				r.numClippingPlanes || r.numClippingPlanes === bt.numPlanes && r.numIntersection === bt
				.numIntersection || (i.needsUpdate = !0)), i.needsUpdate && (x(i, e, n), i.needsUpdate = !1);
			var o = !1,
				s = !1,
				c = !1,
				h = r.program,
				l = h.getUniforms(),
				p = r.shader.uniforms;
			if (It.useProgram(h.program) && (o = !0, s = !0, c = !0), i.id !== it && (it = i.id, s = !0), o || t !==
				st) {
				if (l.setValue(At, "projectionMatrix", t.projectionMatrix), Ct.logarithmicDepthBuffer && l.setValue(
						At, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), st !== (ct || t) && (st = ct ||
						t, s = !0, c = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i
					.isMeshStandardMaterial || i.envMap) {
					var d = l.map.cameraPosition;
					void 0 !== d && d.setValue(At, Et.setFromMatrixPosition(t.matrixWorld))
				}(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i
					.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && l.setValue(At, "viewMatrix", t
					.matrixWorldInverse)
			}
			if (i.skinning) {
				l.setOptional(At, n, "bindMatrix"), l.setOptional(At, n, "bindMatrixInverse");
				var f = n.skeleton;
				if (f) {
					var m = f.bones;
					if (Ct.floatVertexTextures) {
						if (void 0 === f.boneTexture) {
							var g = Math.sqrt(4 * m.length);
							g = Ps.ceilPowerOfTwo(g), g = Math.max(g, 4);
							var v = new Float32Array(g * g * 4);
							v.set(f.boneMatrices);
							var y = new u(v, g, g, qo, zo);
							f.boneMatrices = v, f.boneTexture = y, f.boneTextureSize = g
						}
						l.setValue(At, "boneTexture", f.boneTexture), l.setValue(At, "boneTextureSize", f
							.boneTextureSize)
					} else l.setOptional(At, f, "boneMatrices")
				}
			}
			return s && (l.setValue(At, "toneMappingExposure", K.toneMappingExposure), l.setValue(At,
						"toneMappingWhitePoint", K.toneMappingWhitePoint), i.lights && D(p, c), e && i.fog && T(p,
						e), i.isMeshBasicMaterial ? _(p, i) : i.isMeshLambertMaterial ? (_(p, i), S(p, i)) : i
					.isMeshPhongMaterial ? (_(p, i), i.isMeshToonMaterial ? R(p, i) : A(p, i)) : i
					.isMeshStandardMaterial ? (_(p, i), i.isMeshPhysicalMaterial ? P(p, i) : L(p, i)) : i
					.isMeshDepthMaterial ? (_(p, i), C(p, i)) : i.isMeshDistanceMaterial ? (_(p, i), I(p, i)) : i
					.isMeshNormalMaterial ? (_(p, i), U(p, i)) : i.isLineBasicMaterial ? (w(p, i), i
						.isLineDashedMaterial && M(p, i)) : i.isPointsMaterial ? E(p, i) : i.isShadowMaterial && (p
						.color.value = i.color, p.opacity.value = i.opacity), void 0 !== p.ltcMat && (p.ltcMat
						.value = Gs.LTC_MAT_TEXTURE), void 0 !== p.ltcMag && (p.ltcMag.value = Gs.LTC_MAG_TEXTURE),
					X.upload(At, r.uniformsList, p, K)), l.setValue(At, "modelViewMatrix", n.modelViewMatrix), l
				.setValue(At, "normalMatrix", n.normalMatrix), l.setValue(At, "modelMatrix", n.matrixWorld), h
		}

		function _(t, e) {
			t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value
				.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap &&
				(t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap &&
				(t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t
					.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio), e
				.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e
				.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
			var i;
			if (e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap :
				e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e
				.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e
					.emissiveMap), void 0 !== i) {
				if (i.isWebGLRenderTarget && (i = i.texture), i.matrixAutoUpdate === !0) {
					var n = i.offset,
						r = i.repeat,
						a = i.rotation,
						o = i.center;
					i.matrix.setUvTransform(n.x, n.y, r.x, r.y, a, o.x, o.y)
				}
				t.uvTransform.value.copy(i.matrix)
			}
		}

		function w(t, e) {
			t.diffuse.value = e.color, t.opacity.value = e.opacity
		}

		function M(t, e) {
			t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
		}

		function E(t, e) {
			if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * mt, t.scale.value =
				.5 * ft, t.map.value = e.map, null !== e.map) {
				if (e.map.matrixAutoUpdate === !0) {
					var i = e.map.offset,
						n = e.map.repeat,
						r = e.map.rotation,
						a = e.map.center;
					e.map.matrix.setUvTransform(i.x, i.y, n.x, n.y, r, a.x, a.y)
				}
				t.uvTransform.value.copy(e.map.matrix)
			}
		}

		function T(t, e) {
			t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e
				.isFogExp2 && (t.fogDensity.value = e.density)
		}

		function S(t, e) {
			e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
		}

		function A(t, e) {
			t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t
				.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale
				.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value
				.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t
				.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
		}

		function R(t, e) {
			A(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
		}

		function L(t, e) {
			t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap
					.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e
				.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t
					.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale
					.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap,
					t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias),
				e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
		}

		function P(t, e) {
			t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness, L(t, e)
		}

		function C(t, e) {
			e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e
				.displacementScale, t.displacementBias.value = e.displacementBias)
		}

		function I(t, e) {
			e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e
					.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value
				.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e
				.farDistance
		}

		function U(t, e) {
			e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap
				.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t
				.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t
				.displacementBias.value = e.displacementBias)
		}

		function D(t, e) {
			t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e,
				t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
		}

		function O() {
			var t = pt;
			return t >= Ct.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t +
				" texture units while this GPU supports only " + Ct.maxTextures), pt += 1, t
		}
		console.log("THREE.WebGLRenderer", pa), t = t || {};
		var N = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
			F = void 0 !== t.context ? t.context : null,
			B = void 0 !== t.alpha && t.alpha,
			z = void 0 === t.depth || t.depth,
			G = void 0 === t.stencil || t.stencil,
			H = void 0 !== t.antialias && t.antialias,
			V = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
			k = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
			j = [],
			W = [],
			q = null,
			Y = [],
			J = [];
		this.domElement = N, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this
			.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this
			.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this
			.physicallyCorrectLights = !1, this.toneMapping = uo, this.toneMappingExposure = 1, this
			.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
		var K = this,
			$ = !1,
			tt = null,
			et = null,
			it = -1,
			nt = "",
			st = null,
			ct = null,
			ht = new c,
			lt = new c,
			ut = null,
			pt = 0,
			dt = N.width,
			ft = N.height,
			mt = 1,
			gt = new c(0, 0, dt, ft),
			vt = new c(0, 0, dt, ft),
			yt = !1,
			xt = new rt,
			bt = new xe,
			_t = !1,
			wt = !1,
			Mt = new n,
			Et = new a,
			Tt = {
				geometries: 0,
				textures: 0
			},
			St = {
				frame: 0,
				calls: 0,
				vertices: 0,
				faces: 0,
				points: 0
			};
		this.info = {
			render: St,
			memory: Tt,
			programs: null
		};
		var At;
		try {
			var Rt = {
				alpha: B,
				depth: z,
				stencil: G,
				antialias: H,
				premultipliedAlpha: V,
				preserveDrawingBuffer: k
			};
			if (At = F || N.getContext("webgl", Rt) || N.getContext("experimental-webgl", Rt), null === At)
				throw null !== N.getContext("webgl") ?
					"Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
			void 0 === At.getShaderPrecisionFormat && (At.getShaderPrecisionFormat = function() {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				}
			}), N.addEventListener("webglcontextlost", r, !1), N.addEventListener("webglcontextrestored", o, !1)
		} catch (Lt) {
			console.error("THREE.WebGLRenderer: " + Lt)
		}
		var Pt, Ct, It, Ut, Dt, Ot, Nt, Bt, zt, Gt, Vt, qt, Jt, Qt, Kt, $t, te, ee;
		i();
		var ie = new ve(K);
		this.vr = ie;
		var ne = new at(K, Bt, Ct.maxTextureSize);
		this.shadowMap = ne, this.getContext = function() {
			return At
		}, this.getContextAttributes = function() {
			return At.getContextAttributes()
		}, this.forceContextLoss = function() {
			var t = Pt.get("WEBGL_lose_context");
			t && t.loseContext()
		}, this.forceContextRestore = function() {
			var t = Pt.get("WEBGL_lose_context");
			t && t.restoreContext()
		}, this.getPixelRatio = function() {
			return mt
		}, this.setPixelRatio = function(t) {
			void 0 !== t && (mt = t, this.setSize(dt, ft, !1))
		}, this.getSize = function() {
			return {
				width: dt,
				height: ft
			}
		}, this.setSize = function(t, e, i) {
			var n = ie.getDevice();
			return n && n.isPresenting ? void console.warn(
				"THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (dt = t, ft = e,
				N.width = t * mt, N.height = e * mt, i !== !1 && (N.style.width = t + "px", N.style.height =
					e + "px"), void this.setViewport(0, 0, t, e))
		}, this.getDrawingBufferSize = function() {
			return {
				width: dt * mt,
				height: ft * mt
			}
		}, this.setDrawingBufferSize = function(t, e, i) {
			dt = t, ft = e, mt = i, N.width = t * i, N.height = e * i, this.setViewport(0, 0, t, e)
		}, this.setViewport = function(t, e, i, n) {
			gt.set(t, ft - e - n, i, n), It.viewport(ht.copy(gt).multiplyScalar(mt))
		}, this.setScissor = function(t, e, i, n) {
			vt.set(t, ft - e - n, i, n), It.scissor(lt.copy(vt).multiplyScalar(mt))
		}, this.setScissorTest = function(t) {
			It.setScissorTest(yt = t)
		}, this.getClearColor = function() {
			return qt.getClearColor()
		}, this.setClearColor = function() {
			qt.setClearColor.apply(qt, arguments)
		}, this.getClearAlpha = function() {
			return qt.getClearAlpha()
		}, this.setClearAlpha = function() {
			qt.setClearAlpha.apply(qt, arguments)
		}, this.clear = function(t, e, i) {
			var n = 0;
			(void 0 === t || t) && (n |= At.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= At
				.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= At.STENCIL_BUFFER_BIT), At.clear(n)
		}, this.clearColor = function() {
			this.clear(!0, !1, !1)
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1)
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0)
		}, this.clearTarget = function(t, e, i, n) {
			this.setRenderTarget(t), this.clear(e, i, n)
		}, this.dispose = function() {
			N.removeEventListener("webglcontextlost", r, !1), N.removeEventListener("webglcontextrestored", o, !
				1), Vt.dispose(), ie.dispose()
		}, this.renderBufferImmediate = function(t, e, i) {
			It.initAttributes();
			var n = Ut.get(t);
			t.hasPositions && !n.position && (n.position = At.createBuffer()), t.hasNormals && !n.normal && (n
					.normal = At.createBuffer()), t.hasUvs && !n.uv && (n.uv = At.createBuffer()), t
				.hasColors && !n.color && (n.color = At.createBuffer());
			var r = e.getAttributes();
			if (t.hasPositions && (At.bindBuffer(At.ARRAY_BUFFER, n.position), At.bufferData(At.ARRAY_BUFFER, t
						.positionArray, At.DYNAMIC_DRAW), It.enableAttribute(r.position), At
					.vertexAttribPointer(r.position, 3, At.FLOAT, !1, 0, 0)), t.hasNormals) {
				if (At.bindBuffer(At.ARRAY_BUFFER, n.normal), !i.isMeshPhongMaterial && !i
					.isMeshStandardMaterial && !i.isMeshNormalMaterial && i.flatShading === !0)
					for (var a = 0, o = 3 * t.count; a < o; a += 9) {
						var s = t.normalArray,
							c = (s[a + 0] + s[a + 3] + s[a + 6]) / 3,
							h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3,
							l = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
						s[a + 0] = c, s[a + 1] = h, s[a + 2] = l, s[a + 3] = c, s[a + 4] = h, s[a + 5] = l, s[
							a + 6] = c, s[a + 7] = h, s[a + 8] = l
					}
				At.bufferData(At.ARRAY_BUFFER, t.normalArray, At.DYNAMIC_DRAW), It.enableAttribute(r.normal), At
					.vertexAttribPointer(r.normal, 3, At.FLOAT, !1, 0, 0)
			}
			t.hasUvs && i.map && (At.bindBuffer(At.ARRAY_BUFFER, n.uv), At.bufferData(At.ARRAY_BUFFER, t
					.uvArray, At.DYNAMIC_DRAW), It.enableAttribute(r.uv), At.vertexAttribPointer(r.uv, 2, At
					.FLOAT, !1, 0, 0)), t.hasColors && i.vertexColors !== Ra && (At.bindBuffer(At.ARRAY_BUFFER,
						n.color), At.bufferData(At.ARRAY_BUFFER, t.colorArray, At.DYNAMIC_DRAW), It
					.enableAttribute(r.color), At.vertexAttribPointer(r.color, 3, At.FLOAT, !1, 0, 0)), It
				.disableUnusedAttributes(), At.drawArrays(At.TRIANGLES, 0, t.count), t.count = 0
		}, this.renderBufferDirect = function(t, i, n, r, a, o) {
			It.setMaterial(r);
			var s = b(t, i, r, a),
				c = n.id + "_" + s.id + "_" + (r.wireframe === !0),
				h = !1;
			c !== nt && (nt = c, h = !0), a.morphTargetInfluences && (Jt.update(a, n, r, s), h = !0);
			var l = n.index,
				u = n.attributes.position,
				p = 1;
			r.wireframe === !0 && (l = Nt.getWireframeAttribute(n), p = 2);
			var f, m = Qt;
			null !== l && (f = Ot.get(l), m = Kt, m.setIndex(f)), h && (d(r, s, n), null !== l && At.bindBuffer(
				At.ELEMENT_ARRAY_BUFFER, f.buffer));
			var g = 0;
			null !== l ? g = l.count : void 0 !== u && (g = u.count);
			var v = n.drawRange.start * p,
				y = n.drawRange.count * p,
				x = null !== o ? o.start * p : 0,
				_ = null !== o ? o.count * p : 1 / 0,
				w = Math.max(v, x),
				M = Math.min(g, v + y, x + _) - 1,
				E = Math.max(0, M - w + 1);
			if (0 !== E) {
				if (a.isMesh)
					if (r.wireframe === !0) It.setLineWidth(r.wireframeLinewidth * e()), m.setMode(At.LINES);
					else switch (a.drawMode) {
						case vs:
							m.setMode(At.TRIANGLES);
							break;
						case ys:
							m.setMode(At.TRIANGLE_STRIP);
							break;
						case xs:
							m.setMode(At.TRIANGLE_FAN)
					} else if (a.isLine) {
						var T = r.linewidth;
						void 0 === T && (T = 1), It.setLineWidth(T * e()), a.isLineSegments ? m.setMode(At
							.LINES) : a.isLineLoop ? m.setMode(At.LINE_LOOP) : m.setMode(At.LINE_STRIP)
					} else a.isPoints && m.setMode(At.POINTS);
				n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && m.renderInstances(n, w, E) : m
					.render(w, E)
			}
		}, this.compile = function(t, e) {
			j.length = 0, W.length = 0, t.traverse(function(t) {
				t.isLight && (j.push(t), t.castShadow && W.push(t))
			}), zt.setup(j, W, e), t.traverse(function(e) {
				if (e.material)
					if (Array.isArray(e.material))
						for (var i = 0; i < e.material.length; i++) x(e.material[i], t.fog, e);
					else x(e.material, t.fog, e)
			})
		};
		var re = !1,
			ae = null;
		this.animate = function(t) {
			ae = t, f()
		}, this.render = function(t, e, i, n) {
			if (!e || !e.isCamera) return void console.error(
				"THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
			if (!$) {
				nt = "", it = -1, st = null, t.autoUpdate === !0 && t.updateMatrixWorld(), null === e.parent &&
					e.updateMatrixWorld(), ie.enabled && (e = ie.getCamera(e)), Mt.multiplyMatrices(e
						.projectionMatrix, e.matrixWorldInverse), xt.setFromMatrix(Mt), j.length = 0, W.length =
					0, Y.length = 0, J.length = 0, wt = this.localClippingEnabled, _t = bt.init(this
						.clippingPlanes, wt, e), q = Vt.get(t, e), q.init(), g(t, e, K.sortObjects), K
					.sortObjects === !0 && q.sort(), _t && bt.beginShadows(), ne.render(W, t, e), zt.setup(j, W,
						e), _t && bt.endShadows(), St.frame++, St.calls = 0, St.vertices = 0, St.faces = 0, St
					.points = 0, void 0 === i && (i = null), this.setRenderTarget(i), qt.render(q, t, e, n);
				var r = q.opaque,
					a = q.transparent;
				if (t.overrideMaterial) {
					var o = t.overrideMaterial;
					r.length && v(r, t, e, o), a.length && v(a, t, e, o)
				} else r.length && v(r, t, e), a.length && v(a, t, e);
				te.render(Y, t, e), $t.render(J, t, e, ht), i && Dt.updateRenderTargetMipmap(i), It.buffers
					.depth.setTest(!0), It.buffers.depth.setMask(!0), It.buffers.color.setMask(!0), It
					.setPolygonOffset(!1), ie.enabled && ie.submitFrame()
			}
		}, this.setFaceCulling = function(t, e) {
			It.setCullFace(t), It.setFlipSided(e === ya)
		}, this.allocTextureUnit = O, this.setTexture2D = function() {
			var t = !1;
			return function(e, i) {
				e && e.isWebGLRenderTarget && (t || (console.warn(
					"THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."
				), t = !0), e = e.texture), Dt.setTexture2D(e, i)
			}
		}(), this.setTexture = function() {
			var t = !1;
			return function(e, i) {
				t || (console.warn(
						"THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
					t = !0), Dt.setTexture2D(e, i)
			}
		}(), this.setTextureCube = function() {
			var t = !1;
			return function(e, i) {
				e && e.isWebGLRenderTargetCube && (t || (console.warn(
						"THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."
					), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 ===
					e.image.length ? Dt.setTextureCube(e, i) : Dt.setTextureCubeDynamic(e, i)
			}
		}(), this.getRenderTarget = function() {
			return tt
		}, this.setRenderTarget = function(t) {
			tt = t, t && void 0 === Ut.get(t).__webglFramebuffer && Dt.setupRenderTarget(t);
			var e = null,
				i = !1;
			if (t) {
				var n = Ut.get(t).__webglFramebuffer;
				t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], i = !0) : e = n, ht.copy(t.viewport), lt
					.copy(t.scissor), ut = t.scissorTest
			} else ht.copy(gt).multiplyScalar(mt), lt.copy(vt).multiplyScalar(mt), ut = yt;
			if (et !== e && (At.bindFramebuffer(At.FRAMEBUFFER, e), et = e), It.viewport(ht), It.scissor(lt), It
				.setScissorTest(ut), i) {
				var r = Ut.get(t.texture);
				At.framebufferTexture2D(At.FRAMEBUFFER, At.COLOR_ATTACHMENT0, At.TEXTURE_CUBE_MAP_POSITIVE_X + t
					.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
			}
		}, this.readRenderTargetPixels = function(t, e, i, n, r, a) {
			if (!t || !t.isWebGLRenderTarget) return void console.error(
				"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
			);
			var o = Ut.get(t).__webglFramebuffer;
			if (o) {
				var s = !1;
				o !== et && (At.bindFramebuffer(At.FRAMEBUFFER, o), s = !0);
				try {
					var c = t.texture,
						h = c.format,
						l = c.type;
					if (h !== qo && ee.convert(h) !== At.getParameter(At.IMPLEMENTATION_COLOR_READ_FORMAT))
						return void console.error(
							"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
						);
					if (!(l === Uo || ee.convert(l) === At.getParameter(At.IMPLEMENTATION_COLOR_READ_TYPE) ||
							l === zo && (Pt.get("OES_texture_float") || Pt.get("WEBGL_color_buffer_float")) ||
							l === Go && Pt.get("EXT_color_buffer_half_float"))) return void console.error(
						"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
					);
					At.checkFramebufferStatus(At.FRAMEBUFFER) === At.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t
						.width - n && i >= 0 && i <= t.height - r && At.readPixels(e, i, n, r, ee.convert(h), ee
							.convert(l), a) : console.error(
							"THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
						)
				} finally {
					s && At.bindFramebuffer(At.FRAMEBUFFER, et)
				}
			}
		}
	}

	function we(t, e) {
		this.name = "", this.color = new q(t), this.density = void 0 !== e ? e : 25e-5
	}

	function Me(t, e, i) {
		this.name = "", this.color = new q(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
	}

	function Ee() {
		ht.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null,
			this.autoUpdate = !0
	}

	function Te(t, e, i, n, r) {
		ht.call(this), this.lensFlares = [], this.positionScreen = new a, this.customUpdateCallback = void 0,
			void 0 !== t && this.add(t, e, i, n, r)
	}

	function Se(t) {
		K.call(this), this.type = "SpriteMaterial", this.color = new q(16777215), this.map = null, this.rotation =
			0, this.fog = !1, this.lights = !1, this.setValues(t)
	}

	function Ae(t) {
		ht.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new Se
	}

	function Re() {
		ht.call(this), this.type = "LOD", Object.defineProperties(this, {
			levels: {
				enumerable: !0,
				value: []
			}
		})
	}

	function Le(t, e) {
		if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length),
			void 0 === e) this.calculateInverses();
		else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
		else {
			console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
			for (var i = 0, r = this.bones.length; i < r; i++) this.boneInverses.push(new n)
		}
	}

	function Pe() {
		ht.call(this), this.type = "Bone"
	}

	function Ce(t, e) {
		Nt.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new n, this
			.bindMatrixInverse = new n;
		var i = this.initBones(),
			r = new Le(i);
		this.bind(r, this.matrixWorld), this.normalizeSkinWeights()
	}

	function Ie(t) {
		K.call(this), this.type = "LineBasicMaterial", this.color = new q(16777215), this.linewidth = 1, this
			.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
	}

	function Ue(t, e, i) {
		return 1 === i ? (console.warn(
			"THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."
		), new De(t, e)) : (ht.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new St,
			void(this.material = void 0 !== e ? e : new Ie({
				color: 16777215 * Math.random()
			})))
	}

	function De(t, e) {
		Ue.call(this, t, e), this.type = "LineSegments"
	}

	function Oe(t, e) {
		Ue.call(this, t, e), this.type = "LineLoop"
	}

	function Ne(t) {
		K.call(this), this.type = "PointsMaterial", this.color = new q(16777215), this.map = null, this.size = 1,
			this.sizeAttenuation = !0, this.lights = !1, this.setValues(t)
	}

	function Fe(t, e) {
		ht.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new St, this.material = void 0 !==
			e ? e : new Ne({
				color: 16777215 * Math.random()
			})
	}

	function Be() {
		ht.call(this), this.type = "Group"
	}

	function ze(t, e, i, n, r, a, o, c, h) {
		function l() {
			var t = u.image;
			t.readyState >= t.HAVE_CURRENT_DATA && (u.needsUpdate = !0), requestAnimationFrame(l)
		}
		s.call(this, t, e, i, n, r, a, o, c, h), this.generateMipmaps = !1;
		var u = this;
		requestAnimationFrame(l)
	}

	function Ge(t, e, i, n, r, a, o, c, h, l, u, p) {
		s.call(this, null, a, o, c, h, l, n, r, u, p), this.image = {
			width: e,
			height: i
		}, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
	}

	function He(t, e, i, n, r, a, o, c, h, l) {
		if (l = void 0 !== l ? l : Qo, l !== Qo && l !== Ko) throw new Error(
			"DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		void 0 === i && l === Qo && (i = No), void 0 === i && l === Ko && (i = jo), s.call(this, null, n, r, a, o,
				c, l, i, h), this.image = {
				width: t,
				height: e
			}, this.magFilter = void 0 !== o ? o : Ao, this.minFilter = void 0 !== c ? c : Ao, this.flipY = !1, this
			.generateMipmaps = !1
	}

	function Ve(t) {
		St.call(this), this.type = "WireframeGeometry";
		var e, i, n, r, o, s, c, h, l, u, p = [],
			d = [0, 0],
			f = {},
			m = ["a", "b", "c"];
		if (t && t.isGeometry) {
			var g = t.faces;
			for (e = 0, n = g.length; e < n; e++) {
				var v = g[e];
				for (i = 0; i < 3; i++) c = v[m[i]], h = v[m[(i + 1) % 3]], d[0] = Math.min(c, h), d[1] = Math.max(
					c, h), l = d[0] + "," + d[1], void 0 === f[l] && (f[l] = {
					index1: d[0],
					index2: d[1]
				})
			}
			for (l in f) s = f[l], u = t.vertices[s.index1], p.push(u.x, u.y, u.z), u = t.vertices[s.index2], p
				.push(u.x, u.y, u.z)
		} else if (t && t.isBufferGeometry) {
			var y, x, b, _, w, M, E, T;
			if (u = new a, null !== t.index) {
				for (y = t.attributes.position, x = t.index, b = t.groups, 0 === b.length && (b = [{
						start: 0,
						count: x.count,
						materialIndex: 0
					}]), r = 0, o = b.length; r < o; ++r)
					for (_ = b[r], w = _.start, M = _.count, e = w, n = w + M; e < n; e += 3)
						for (i = 0; i < 3; i++) c = x.getX(e + i), h = x.getX(e + (i + 1) % 3), d[0] = Math.min(c,
							h), d[1] = Math.max(c, h), l = d[0] + "," + d[1], void 0 === f[l] && (f[l] = {
							index1: d[0],
							index2: d[1]
						});
				for (l in f) s = f[l], u.fromBufferAttribute(y, s.index1), p.push(u.x, u.y, u.z), u
					.fromBufferAttribute(y, s.index2), p.push(u.x, u.y, u.z)
			} else
				for (y = t.attributes.position, e = 0, n = y.count / 3; e < n; e++)
					for (i = 0; i < 3; i++) E = 3 * e + i, u.fromBufferAttribute(y, E), p.push(u.x, u.y, u.z), T =
						3 * e + (i + 1) % 3, u.fromBufferAttribute(y, T), p.push(u.x, u.y, u.z)
		}
		this.addAttribute("position", new wt(p, 3))
	}

	function ke(t, e, i) {
		dt.call(this), this.type = "ParametricGeometry", this.parameters = {
			func: t,
			slices: e,
			stacks: i
		}, this.fromBufferGeometry(new je(t, e, i)), this.mergeVertices()
	}

	function je(t, e, i) {
		St.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
			func: t,
			slices: e,
			stacks: i
		};
		var n, r, o = [],
			s = [],
			c = [],
			h = [],
			l = 1e-5,
			u = new a,
			p = new a,
			d = new a,
			f = new a,
			m = new a,
			g = e + 1;
		for (n = 0; n <= i; n++) {
			var v = n / i;
			for (r = 0; r <= e; r++) {
				var y = r / e;
				p = t(y, v, p), s.push(p.x, p.y, p.z), y - l >= 0 ? (d = t(y - l, v, d), f.subVectors(p, d)) : (d =
						t(y + l, v, d), f.subVectors(d, p)), v - l >= 0 ? (d = t(y, v - l, d), m.subVectors(p, d)) :
					(d = t(y, v + l, d), m.subVectors(d, p)), u.crossVectors(f, m).normalize(), c.push(u.x, u.y, u
						.z), h.push(y, v)
			}
		}
		for (n = 0; n < i; n++)
			for (r = 0; r < e; r++) {
				var x = n * g + r,
					b = n * g + r + 1,
					_ = (n + 1) * g + r + 1,
					w = (n + 1) * g + r;
				o.push(x, b, w), o.push(b, _, w)
			}
		this.setIndex(o), this.addAttribute("position", new wt(s, 3)), this.addAttribute("normal", new wt(c, 3)),
			this.addAttribute("uv", new wt(h, 2))
	}

	function We(t, e, i, n) {
		dt.call(this), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: t,
			indices: e,
			radius: i,
			detail: n
		}, this.fromBufferGeometry(new Xe(t, e, i, n)), this.mergeVertices()
	}

	function Xe(t, e, n, r) {
		function o(t) {
			for (var i = new a, n = new a, r = new a, o = 0; o < e.length; o += 3) p(e[o + 0], i), p(e[o + 1], n),
				p(e[o + 2], r), s(i, n, r, t)
		}

		function s(t, e, i, n) {
			var r, a, o = Math.pow(2, n),
				s = [];
			for (r = 0; r <= o; r++) {
				s[r] = [];
				var c = t.clone().lerp(i, r / o),
					h = e.clone().lerp(i, r / o),
					l = o - r;
				for (a = 0; a <= l; a++) 0 === a && r === o ? s[r][a] = c : s[r][a] = c.clone().lerp(h, a / l)
			}
			for (r = 0; r < o; r++)
				for (a = 0; a < 2 * (o - r) - 1; a++) {
					var p = Math.floor(a / 2);
					a % 2 === 0 ? (u(s[r][p + 1]), u(s[r + 1][p]), u(s[r][p])) : (u(s[r][p + 1]), u(s[r + 1][p +
						1
					]), u(s[r + 1][p]))
				}
		}

		function c(t) {
			for (var e = new a, i = 0; i < v.length; i += 3) e.x = v[i + 0], e.y = v[i + 1], e.z = v[i + 2], e
				.normalize().multiplyScalar(t), v[i + 0] = e.x, v[i + 1] = e.y, v[i + 2] = e.z
		}

		function h() {
			for (var t = new a, e = 0; e < v.length; e += 3) {
				t.x = v[e + 0], t.y = v[e + 1], t.z = v[e + 2];
				var i = m(t) / 2 / Math.PI + .5,
					n = g(t) / Math.PI + .5;
				y.push(i, 1 - n)
			}
			d(), l()
		}

		function l() {
			for (var t = 0; t < y.length; t += 6) {
				var e = y[t + 0],
					i = y[t + 2],
					n = y[t + 4],
					r = Math.max(e, i, n),
					a = Math.min(e, i, n);
				r > .9 && a < .1 && (e < .2 && (y[t + 0] += 1), i < .2 && (y[t + 2] += 1), n < .2 && (y[t + 4] +=
					1))
			}
		}

		function u(t) {
			v.push(t.x, t.y, t.z)
		}

		function p(e, i) {
			var n = 3 * e;
			i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
		}

		function d() {
			for (var t = new a, e = new a, n = new a, r = new a, o = new i, s = new i, c = new i, h = 0, l = 0; h <
				v.length; h += 9, l += 6) {
				t.set(v[h + 0], v[h + 1], v[h + 2]), e.set(v[h + 3], v[h + 4], v[h + 5]), n.set(v[h + 6], v[h + 7],
						v[h + 8]), o.set(y[l + 0], y[l + 1]), s.set(y[l + 2], y[l + 3]), c.set(y[l + 4], y[l + 5]),
					r.copy(t).add(e).add(n).divideScalar(3);
				var u = m(r);
				f(o, l + 0, t, u), f(s, l + 2, e, u), f(c, l + 4, n, u)
			}
		}

		function f(t, e, i, n) {
			n < 0 && 1 === t.x && (y[e] = t.x - 1), 0 === i.x && 0 === i.z && (y[e] = n / 2 / Math.PI + .5)
		}

		function m(t) {
			return Math.atan2(t.z, -t.x)
		}

		function g(t) {
			return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
		}
		St.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
			vertices: t,
			indices: e,
			radius: n,
			detail: r
		}, n = n || 1, r = r || 0;
		var v = [],
			y = [];
		o(r), c(n), h(), this.addAttribute("position", new wt(v, 3)), this.addAttribute("normal", new wt(v.slice(),
				3)), this.addAttribute("uv", new wt(y, 2)), 0 === r ? this.computeVertexNormals() : this
			.normalizeNormals()
	}

	function qe(t, e) {
		dt.call(this), this.type = "TetrahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new Ye(t, e)), this.mergeVertices()
	}

	function Ye(t, e) {
		var i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
			n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
		Xe.call(this, i, n, t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function Ze(t, e) {
		dt.call(this), this.type = "OctahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new Je(t, e)), this.mergeVertices()
	}

	function Je(t, e) {
		var i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
			n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
		Xe.call(this, i, n, t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function Qe(t, e) {
		dt.call(this), this.type = "IcosahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new Ke(t, e)), this.mergeVertices()
	}

	function Ke(t, e) {
		var i = (1 + Math.sqrt(5)) / 2,
			n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1,
				-i, 0, -1, -i, 0, 1
			],
			r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8,
				3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1
			];
		Xe.call(this, n, r, t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function $e(t, e) {
		dt.call(this), this.type = "DodecahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new ti(t, e)), this.mergeVertices()
	}

	function ti(t, e) {
		var i = (1 + Math.sqrt(5)) / 2,
			n = 1 / i,
			r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -
				n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i,
				0, n
			],
			a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0,
				16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2,
				18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19,
				11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9
			];
		Xe.call(this, r, a, t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function ei(t, e, i, n, r, a) {
		dt.call(this), this.type = "TubeGeometry", this.parameters = {
			path: t,
			tubularSegments: e,
			radius: i,
			radialSegments: n,
			closed: r
		}, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
		var o = new ii(t, e, i, n, r);
		this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(
			o), this.mergeVertices()
	}

	function ii(t, e, n, r, o) {
		function s() {
			for (p = 0; p < e; p++) c(p);
			c(o === !1 ? e : 0), l(), h()
		}

		function c(i) {
			v = t.getPointAt(i / e, v);
			var a = u.normals[i],
				o = u.binormals[i];
			for (d = 0; d <= r; d++) {
				var s = d / r * Math.PI * 2,
					c = Math.sin(s),
					h = -Math.cos(s);
				m.x = h * a.x + c * o.x, m.y = h * a.y + c * o.y, m.z = h * a.z + c * o.z, m.normalize(), x.push(m
					.x, m.y, m.z), f.x = v.x + n * m.x, f.y = v.y + n * m.y, f.z = v.z + n * m.z, y.push(f.x, f
					.y, f.z)
			}
		}

		function h() {
			for (d = 1; d <= e; d++)
				for (p = 1; p <= r; p++) {
					var t = (r + 1) * (d - 1) + (p - 1),
						i = (r + 1) * d + (p - 1),
						n = (r + 1) * d + p,
						a = (r + 1) * (d - 1) + p;
					_.push(t, i, a), _.push(i, n, a)
				}
		}

		function l() {
			for (p = 0; p <= e; p++)
				for (d = 0; d <= r; d++) g.x = p / e, g.y = d / r, b.push(g.x, g.y)
		}
		St.call(this), this.type = "TubeBufferGeometry", this.parameters = {
			path: t,
			tubularSegments: e,
			radius: n,
			radialSegments: r,
			closed: o
		}, e = e || 64, n = n || 1, r = r || 8, o = o || !1;
		var u = t.computeFrenetFrames(e, o);
		this.tangents = u.tangents, this.normals = u.normals, this.binormals = u.binormals;
		var p, d, f = new a,
			m = new a,
			g = new i,
			v = new a,
			y = [],
			x = [],
			b = [],
			_ = [];
		s(), this.setIndex(_), this.addAttribute("position", new wt(y, 3)), this.addAttribute("normal", new wt(x,
			3)), this.addAttribute("uv", new wt(b, 2))
	}

	function ni(t, e, i, n, r, a, o) {
		dt.call(this), this.type = "TorusKnotGeometry", this.parameters = {
				radius: t,
				tube: e,
				tubularSegments: i,
				radialSegments: n,
				p: r,
				q: a
			}, void 0 !== o && console.warn(
				"THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this
			.fromBufferGeometry(new ri(t, e, i, n, r, a)), this.mergeVertices()
	}

	function ri(t, e, i, n, r, o) {
		function s(t, e, i, n, r) {
			var a = Math.cos(t),
				o = Math.sin(t),
				s = i / e * t,
				c = Math.cos(s);
			r.x = n * (2 + c) * .5 * a, r.y = n * (2 + c) * o * .5, r.z = n * Math.sin(s) * .5
		}
		St.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
			radius: t,
			tube: e,
			tubularSegments: i,
			radialSegments: n,
			p: r,
			q: o
		}, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, o = o || 3;
		var c, h, l = [],
			u = [],
			p = [],
			d = [],
			f = new a,
			m = new a,
			g = new a,
			v = new a,
			y = new a,
			x = new a,
			b = new a;
		for (c = 0; c <= i; ++c) {
			var _ = c / i * r * Math.PI * 2;
			for (s(_, r, o, t, g), s(_ + .01, r, o, t, v), x.subVectors(v, g), b.addVectors(v, g), y.crossVectors(x,
					b), b.crossVectors(y, x), y.normalize(), b.normalize(), h = 0; h <= n; ++h) {
				var w = h / n * Math.PI * 2,
					M = -e * Math.cos(w),
					E = e * Math.sin(w);
				f.x = g.x + (M * b.x + E * y.x), f.y = g.y + (M * b.y + E * y.y), f.z = g.z + (M * b.z + E * y.z), u
					.push(f.x, f.y, f.z), m.subVectors(f, g).normalize(), p.push(m.x, m.y, m.z), d.push(c / i), d
					.push(h / n)
			}
		}
		for (h = 1; h <= i; h++)
			for (c = 1; c <= n; c++) {
				var T = (n + 1) * (h - 1) + (c - 1),
					S = (n + 1) * h + (c - 1),
					A = (n + 1) * h + c,
					R = (n + 1) * (h - 1) + c;
				l.push(T, S, R), l.push(S, A, R)
			}
		this.setIndex(l), this.addAttribute("position", new wt(u, 3)), this.addAttribute("normal", new wt(p, 3)),
			this.addAttribute("uv", new wt(d, 2))
	}

	function ai(t, e, i, n, r) {
		dt.call(this), this.type = "TorusGeometry", this.parameters = {
			radius: t,
			tube: e,
			radialSegments: i,
			tubularSegments: n,
			arc: r
		}, this.fromBufferGeometry(new oi(t, e, i, n, r)), this.mergeVertices()
	}

	function oi(t, e, i, n, r) {
		St.call(this), this.type = "TorusBufferGeometry", this.parameters = {
			radius: t,
			tube: e,
			radialSegments: i,
			tubularSegments: n,
			arc: r
		}, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
		var o, s, c = [],
			h = [],
			l = [],
			u = [],
			p = new a,
			d = new a,
			f = new a;
		for (o = 0; o <= i; o++)
			for (s = 0; s <= n; s++) {
				var m = s / n * r,
					g = o / i * Math.PI * 2;
				d.x = (t + e * Math.cos(g)) * Math.cos(m), d.y = (t + e * Math.cos(g)) * Math.sin(m), d.z = e * Math
					.sin(g), h.push(d.x, d.y, d.z), p.x = t * Math.cos(m), p.y = t * Math.sin(m), f.subVectors(d, p)
					.normalize(), l.push(f.x, f.y, f.z), u.push(s / n), u.push(o / i)
			}
		for (o = 1; o <= i; o++)
			for (s = 1; s <= n; s++) {
				var v = (n + 1) * o + s - 1,
					y = (n + 1) * (o - 1) + s - 1,
					x = (n + 1) * (o - 1) + s,
					b = (n + 1) * o + s;
				c.push(v, y, b), c.push(y, x, b)
			}
		this.setIndex(c), this.addAttribute("position", new wt(h, 3)), this.addAttribute("normal", new wt(l, 3)),
			this.addAttribute("uv", new wt(u, 2))
	}

	function si(t, e) {
		dt.call(this), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: t,
			options: e
		}, this.fromBufferGeometry(new ci(t, e)), this.mergeVertices()
	}

	function ci(t, e) {
		"undefined" != typeof t && (St.call(this), this.type = "ExtrudeBufferGeometry", t = Array.isArray(t) ? t : [
			t
		], this.addShapeList(t, e), this.computeVertexNormals())
	}

	function hi(t, e) {
		dt.call(this), this.type = "TextGeometry", this.parameters = {
			text: t,
			parameters: e
		}, this.fromBufferGeometry(new li(t, e)), this.mergeVertices()
	}

	function li(t, e) {
		e = e || {};
		var i = e.font;
		if (!i || !i.isFont) return console.error(
			"THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new dt;
		var n = i.generateShapes(t, e.size, e.curveSegments);
		e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10),
			void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), ci
			.call(this, n, e), this.type = "TextBufferGeometry"
	}

	function ui(t, e, i, n, r, a, o) {
		dt.call(this), this.type = "SphereGeometry", this.parameters = {
			radius: t,
			widthSegments: e,
			heightSegments: i,
			phiStart: n,
			phiLength: r,
			thetaStart: a,
			thetaLength: o
		}, this.fromBufferGeometry(new pi(t, e, i, n, r, a, o)), this.mergeVertices()
	}

	function pi(t, e, i, n, r, o, s) {
		St.call(this), this.type = "SphereBufferGeometry", this.parameters = {
				radius: t,
				widthSegments: e,
				heightSegments: i,
				phiStart: n,
				phiLength: r,
				thetaStart: o,
				thetaLength: s
			}, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !==
			n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : Math.PI;
		var c, h, l = o + s,
			u = 0,
			p = [],
			d = new a,
			f = new a,
			m = [],
			g = [],
			v = [],
			y = [];
		for (h = 0; h <= i; h++) {
			var x = [],
				b = h / i;
			for (c = 0; c <= e; c++) {
				var _ = c / e;
				d.x = -t * Math.cos(n + _ * r) * Math.sin(o + b * s), d.y = t * Math.cos(o + b * s), d.z = t * Math
					.sin(n + _ * r) * Math.sin(o + b * s), g.push(d.x, d.y, d.z), f.set(d.x, d.y, d.z).normalize(),
					v.push(f.x, f.y, f.z), y.push(_, 1 - b), x.push(u++)
			}
			p.push(x)
		}
		for (h = 0; h < i; h++)
			for (c = 0; c < e; c++) {
				var w = p[h][c + 1],
					M = p[h][c],
					E = p[h + 1][c],
					T = p[h + 1][c + 1];
				(0 !== h || o > 0) && m.push(w, M, T), (h !== i - 1 || l < Math.PI) && m.push(M, E, T)
			}
		this.setIndex(m), this.addAttribute("position", new wt(g, 3)), this.addAttribute("normal", new wt(v, 3)),
			this.addAttribute("uv", new wt(y, 2))
	}

	function di(t, e, i, n, r, a) {
		dt.call(this), this.type = "RingGeometry", this.parameters = {
			innerRadius: t,
			outerRadius: e,
			thetaSegments: i,
			phiSegments: n,
			thetaStart: r,
			thetaLength: a
		}, this.fromBufferGeometry(new fi(t, e, i, n, r, a)), this.mergeVertices()
	}

	function fi(t, e, n, r, o, s) {
		St.call(this), this.type = "RingBufferGeometry", this.parameters = {
				innerRadius: t,
				outerRadius: e,
				thetaSegments: n,
				phiSegments: r,
				thetaStart: o,
				thetaLength: s
			}, t = t || .5, e = e || 1, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI, n = void 0 !==
			n ? Math.max(3, n) : 8, r = void 0 !== r ? Math.max(1, r) : 1;
		var c, h, l, u = [],
			p = [],
			d = [],
			f = [],
			m = t,
			g = (e - t) / r,
			v = new a,
			y = new i;
		for (h = 0; h <= r; h++) {
			for (l = 0; l <= n; l++) c = o + l / n * s, v.x = m * Math.cos(c), v.y = m * Math.sin(c), p.push(v.x, v
				.y, v.z), d.push(0, 0, 1), y.x = (v.x / e + 1) / 2, y.y = (v.y / e + 1) / 2, f.push(y.x, y.y);
			m += g
		}
		for (h = 0; h < r; h++) {
			var x = h * (n + 1);
			for (l = 0; l < n; l++) {
				c = l + x;
				var b = c,
					_ = c + n + 1,
					w = c + n + 2,
					M = c + 1;
				u.push(b, _, M), u.push(_, w, M)
			}
		}
		this.setIndex(u), this.addAttribute("position", new wt(p, 3)), this.addAttribute("normal", new wt(d, 3)),
			this.addAttribute("uv", new wt(f, 2))
	}

	function mi(t, e, i, n) {
		dt.call(this), this.type = "LatheGeometry", this.parameters = {
			points: t,
			segments: e,
			phiStart: i,
			phiLength: n
		}, this.fromBufferGeometry(new gi(t, e, i, n)), this.mergeVertices()
	}

	function gi(t, e, n, r) {
		St.call(this), this.type = "LatheBufferGeometry", this.parameters = {
			points: t,
			segments: e,
			phiStart: n,
			phiLength: r
		}, e = Math.floor(e) || 12, n = n || 0, r = r || 2 * Math.PI, r = Ps.clamp(r, 0, 2 * Math.PI);
		var o, s, c, h = [],
			l = [],
			u = [],
			p = 1 / e,
			d = new a,
			f = new i;
		for (s = 0; s <= e; s++) {
			var m = n + s * p * r,
				g = Math.sin(m),
				v = Math.cos(m);
			for (c = 0; c <= t.length - 1; c++) d.x = t[c].x * g, d.y = t[c].y, d.z = t[c].x * v, l.push(d.x, d.y, d
				.z), f.x = s / e, f.y = c / (t.length - 1), u.push(f.x, f.y)
		}
		for (s = 0; s < e; s++)
			for (c = 0; c < t.length - 1; c++) {
				o = c + s * t.length;
				var y = o,
					x = o + t.length,
					b = o + t.length + 1,
					_ = o + 1;
				h.push(y, x, _), h.push(x, b, _)
			}
		if (this.setIndex(h), this.addAttribute("position", new wt(l, 3)), this.addAttribute("uv", new wt(u, 2)),
			this.computeVertexNormals(), r === 2 * Math.PI) {
			var w = this.attributes.normal.array,
				M = new a,
				E = new a,
				T = new a;
			for (o = e * t.length * 3, s = 0, c = 0; s < t.length; s++, c += 3) M.x = w[c + 0], M.y = w[c + 1], M
				.z = w[c + 2], E.x = w[o + c + 0], E.y = w[o + c + 1], E.z = w[o + c + 2], T.addVectors(M, E)
				.normalize(), w[c + 0] = w[o + c + 0] = T.x, w[c + 1] = w[o + c + 1] = T.y, w[c + 2] = w[o + c +
					2] = T.z
		}
	}

	function vi(t, e) {
		dt.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn(
				"THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this
			.parameters = {
				shapes: t,
				curveSegments: e
			}, this.fromBufferGeometry(new yi(t, e)), this.mergeVertices()
	}

	function yi(t, e) {
		function i(t) {
			var i, s, h, l = r.length / 3,
				u = t.extractPoints(e),
				p = u.shape,
				d = u.holes;
			if (Jh.isClockWise(p) === !1)
				for (p = p.reverse(), i = 0, s = d.length; i < s; i++) h = d[i], Jh.isClockWise(h) === !0 && (d[i] =
					h.reverse());
			var f = Jh.triangulateShape(p, d);
			for (i = 0, s = d.length; i < s; i++) h = d[i], p = p.concat(h);
			for (i = 0, s = p.length; i < s; i++) {
				var m = p[i];
				r.push(m.x, m.y, 0), a.push(0, 0, 1), o.push(m.x, m.y)
			}
			for (i = 0, s = f.length; i < s; i++) {
				var g = f[i],
					v = g[0] + l,
					y = g[1] + l,
					x = g[2] + l;
				n.push(v, y, x), c += 3
			}
		}
		St.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
			shapes: t,
			curveSegments: e
		}, e = e || 12;
		var n = [],
			r = [],
			a = [],
			o = [],
			s = 0,
			c = 0;
		if (Array.isArray(t) === !1) i(t);
		else
			for (var h = 0; h < t.length; h++) i(t[h]), this.addGroup(s, c, h), s += c, c = 0;
		this.setIndex(n), this.addAttribute("position", new wt(r, 3)), this.addAttribute("normal", new wt(a, 3)),
			this.addAttribute("uv", new wt(o, 2))
	}

	function xi(t, e) {
		St.call(this), this.type = "EdgesGeometry", this.parameters = {
			thresholdAngle: e
		}, e = void 0 !== e ? e : 1;
		var i, n, r, a, o = [],
			s = Math.cos(Ps.DEG2RAD * e),
			c = [0, 0],
			h = {},
			l = ["a", "b", "c"];
		t.isBufferGeometry ? (a = new dt, a.fromBufferGeometry(t)) : a = t.clone(), a.mergeVertices(), a
			.computeFaceNormals();
		for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
			for (var m = p[d], g = 0; g < 3; g++) i = m[l[g]], n = m[l[(g + 1) % 3]], c[0] = Math.min(i, n), c[1] =
				Math.max(i, n), r = c[0] + "," + c[1], void 0 === h[r] ? h[r] = {
					index1: c[0],
					index2: c[1],
					face1: d,
					face2: void 0
				} : h[r].face2 = d;
		for (r in h) {
			var v = h[r];
			if (void 0 === v.face2 || p[v.face1].normal.dot(p[v.face2].normal) <= s) {
				var y = u[v.index1];
				o.push(y.x, y.y, y.z), y = u[v.index2], o.push(y.x, y.y, y.z)
			}
		}
		this.addAttribute("position", new wt(o, 3))
	}

	function bi(t, e, i, n, r, a, o, s) {
		dt.call(this), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: t,
			radiusBottom: e,
			height: i,
			radialSegments: n,
			heightSegments: r,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		}, this.fromBufferGeometry(new _i(t, e, i, n, r, a, o, s)), this.mergeVertices()
	}

	function _i(t, e, n, r, o, s, c, h) {
		function l() {
			var i, s, l = new a,
				u = new a,
				_ = 0,
				w = (e - t) / n;
			for (s = 0; s <= o; s++) {
				var M = [],
					E = s / o,
					T = E * (e - t) + t;
				for (i = 0; i <= r; i++) {
					var S = i / r,
						A = S * h + c,
						R = Math.sin(A),
						L = Math.cos(A);
					u.x = T * R, u.y = -E * n + x, u.z = T * L, f.push(u.x, u.y, u.z), l.set(R, w, L).normalize(), m
						.push(l.x, l.y, l.z), g.push(S, 1 - E), M.push(v++)
				}
				y.push(M)
			}
			for (i = 0; i < r; i++)
				for (s = 0; s < o; s++) {
					var P = y[s][i],
						C = y[s + 1][i],
						I = y[s + 1][i + 1],
						U = y[s][i + 1];
					d.push(P, C, U), d.push(C, I, U), _ += 6
				}
			p.addGroup(b, _, 0), b += _
		}

		function u(n) {
			var o, s, l, u = new i,
				y = new a,
				_ = 0,
				w = n === !0 ? t : e,
				M = n === !0 ? 1 : -1;
			for (s = v, o = 1; o <= r; o++) f.push(0, x * M, 0), m.push(0, M, 0), g.push(.5, .5), v++;
			for (l = v, o = 0; o <= r; o++) {
				var E = o / r,
					T = E * h + c,
					S = Math.cos(T),
					A = Math.sin(T);
				y.x = w * A, y.y = x * M, y.z = w * S, f.push(y.x, y.y, y.z), m.push(0, M, 0), u.x = .5 * S + .5, u
					.y = .5 * A * M + .5, g.push(u.x, u.y), v++
			}
			for (o = 0; o < r; o++) {
				var R = s + o,
					L = l + o;
				n === !0 ? d.push(L, L + 1, R) : d.push(L + 1, L, R), _ += 3
			}
			p.addGroup(b, _, n === !0 ? 1 : 2), b += _
		}
		St.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
			radiusTop: t,
			radiusBottom: e,
			height: n,
			radialSegments: r,
			heightSegments: o,
			openEnded: s,
			thetaStart: c,
			thetaLength: h
		};
		var p = this;
		t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, n = n || 1, r = Math.floor(r) || 8, o = Math.floor(o) ||
			1, s = void 0 !== s && s, c = void 0 !== c ? c : 0, h = void 0 !== h ? h : 2 * Math.PI;
		var d = [],
			f = [],
			m = [],
			g = [],
			v = 0,
			y = [],
			x = n / 2,
			b = 0;
		l(), s === !1 && (t > 0 && u(!0), e > 0 && u(!1)), this.setIndex(d), this.addAttribute("position", new wt(f,
			3)), this.addAttribute("normal", new wt(m, 3)), this.addAttribute("uv", new wt(g, 2))
	}

	function wi(t, e, i, n, r, a, o) {
		bi.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: t,
			height: e,
			radialSegments: i,
			heightSegments: n,
			openEnded: r,
			thetaStart: a,
			thetaLength: o
		}
	}

	function Mi(t, e, i, n, r, a, o) {
		_i.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
			radius: t,
			height: e,
			radialSegments: i,
			heightSegments: n,
			openEnded: r,
			thetaStart: a,
			thetaLength: o
		}
	}

	function Ei(t, e, i, n) {
		dt.call(this), this.type = "CircleGeometry", this.parameters = {
			radius: t,
			segments: e,
			thetaStart: i,
			thetaLength: n
		}, this.fromBufferGeometry(new Ti(t, e, i, n)), this.mergeVertices()
	}

	function Ti(t, e, n, r) {
		St.call(this), this.type = "CircleBufferGeometry", this.parameters = {
				radius: t,
				segments: e,
				thetaStart: n,
				thetaLength: r
			}, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r :
			2 * Math.PI;
		var o, s, c = [],
			h = [],
			l = [],
			u = [],
			p = new a,
			d = new i;
		for (h.push(0, 0, 0), l.push(0, 0, 1), u.push(.5, .5), s = 0, o = 3; s <= e; s++, o += 3) {
			var f = n + s / e * r;
			p.x = t * Math.cos(f), p.y = t * Math.sin(f), h.push(p.x, p.y, p.z), l.push(0, 0, 1), d.x = (h[o] / t +
				1) / 2, d.y = (h[o + 1] / t + 1) / 2, u.push(d.x, d.y)
		}
		for (o = 1; o <= e; o++) c.push(o, o + 1, 0);
		this.setIndex(c), this.addAttribute("position", new wt(h, 3)), this.addAttribute("normal", new wt(l, 3)),
			this.addAttribute("uv", new wt(u, 2))
	}

	function Si(t) {
		K.call(this), this.type = "ShadowMaterial", this.color = new q(0), this.opacity = 1, this.lights = !0, this
			.transparent = !0, this.setValues(t)
	}

	function Ai(t) {
		It.call(this, t), this.type = "RawShaderMaterial"
	}

	function Ri(t) {
		K.call(this), this.defines = {
				STANDARD: ""
			}, this.type = "MeshStandardMaterial", this.color = new q(16777215), this.roughness = .5, this
			.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null,
			this.aoMapIntensity = 1, this.emissive = new q(0), this.emissiveIntensity = 1, this.emissiveMap = null,
			this.bumpMap = null, this.bumpScale = 1,
			this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this
			.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null,
			this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this
			.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin =
			"round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function Li(t) {
		Ri.call(this), this.defines = {
				PHYSICAL: ""
			}, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this
			.clearCoatRoughness = 0, this.setValues(t)
	}

	function Pi(t) {
		K.call(this), this.type = "MeshPhongMaterial", this.color = new q(16777215), this.specular = new q(1118481),
			this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap =
			null, this.aoMapIntensity = 1, this.emissive = new q(0), this.emissiveIntensity = 1, this.emissiveMap =
			null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1),
			this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap =
			null, this.alphaMap = null, this.envMap = null, this.combine = so, this.reflectivity = 1, this
			.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap =
			"round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this
			.morphNormals = !1, this.setValues(t)
	}

	function Ci(t) {
		Pi.call(this), this.defines = {
			TOON: ""
		}, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
	}

	function Ii(t) {
		K.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap =
			null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this
			.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !
			1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function Ui(t) {
		K.call(this), this.type = "MeshLambertMaterial", this.color = new q(16777215), this.map = null, this
			.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this
			.emissive = new q(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this
			.alphaMap = null, this.envMap = null, this.combine = so, this.reflectivity = 1, this.refractionRatio =
			.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this
			.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this
			.setValues(t)
	}

	function Di(t) {
		Ie.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this
			.setValues(t)
	}

	function Oi(t, e, i) {
		var n = this,
			r = !1,
			a = 0,
			o = 0,
			s = void 0;
		this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(
			t) {
			o++, r === !1 && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
		}, this.itemEnd = function(t) {
			a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n
				.onLoad())
		}, this.itemError = function(t) {
			void 0 !== n.onError && n.onError(t)
		}, this.resolveURL = function(t) {
			return s ? s(t) : t
		}, this.setURLModifier = function(t) {
			s = t
		}
	}

	function Ni(t) {
		this.manager = void 0 !== t ? t : tl
	}

	function Fi(t) {
		this.manager = void 0 !== t ? t : tl, this._parser = null
	}

	function Bi(t) {
		this.manager = void 0 !== t ? t : tl, this._parser = null
	}

	function zi(t) {
		this.manager = void 0 !== t ? t : tl
	}

	function Gi(t) {
		this.manager = void 0 !== t ? t : tl
	}

	function Hi(t) {
		this.manager = void 0 !== t ? t : tl
	}

	function Vi(t, e) {
		ht.call(this), this.type = "Light", this.color = new q(t), this.intensity = void 0 !== e ? e : 1, this
			.receiveShadow = void 0
	}

	function ki(t, e, i) {
		Vi.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(ht
			.DefaultUp), this.updateMatrix(), this.groundColor = new q(e)
	}

	function ji(t) {
		this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new i(512, 512), this.map = null, this
			.matrix = new n
	}

	function Wi() {
		ji.call(this, new me(50, 1, .5, 500))
	}

	function Xi(t, e, i, n, r, a) {
		Vi.call(this, t, e), this.type = "SpotLight", this.position.copy(ht.DefaultUp), this.updateMatrix(), this
			.target = new ht, Object.defineProperty(this, "power", {
				get: function() {
					return this.intensity * Math.PI
				},
				set: function(t) {
					this.intensity = t / Math.PI
				}
			}), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra =
			void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Wi
	}

	function qi(t, e, i, n) {
		Vi.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
			get: function() {
				return 4 * this.intensity * Math.PI
			},
			set: function(t) {
				this.intensity = t / (4 * Math.PI)
			}
		}), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new ji(
			new me(90, 1, .5, 500))
	}

	function Yi() {
		ji.call(this, new ut((-5), 5, 5, (-5), .5, 500))
	}

	function Zi(t, e) {
		Vi.call(this, t, e), this.type = "DirectionalLight", this.position.copy(ht.DefaultUp), this.updateMatrix(),
			this.target = new ht, this.shadow = new Yi
	}

	function Ji(t, e) {
		Vi.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
	}

	function Qi(t, e, i, n) {
		Vi.call(this, t, e), this.type = "RectAreaLight", this.position.set(0, 1, 0), this.updateMatrix(), this
			.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
	}

	function Ki(t, e, i, n) {
		this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e
			.constructor(i), this.sampleValues = e, this.valueSize = i
	}

	function $i(t, e, i, n) {
		Ki.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this
			._offsetNext = -0
	}

	function tn(t, e, i, n) {
		Ki.call(this, t, e, i, n)
	}

	function en(t, e, i, n) {
		Ki.call(this, t, e, i, n)
	}

	function nn(t, e, i, n) {
		if (void 0 === t) throw new Error("track name is undefined");
		if (void 0 === e || 0 === e.length) throw new Error("no keyframes in track named " + t);
		this.name = t, this.times = il.convertArray(e, this.TimeBufferType), this.values = il.convertArray(i, this
				.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation), this.validate(), this
			.optimize()
	}

	function rn(t, e, i, n) {
		nn.call(this, t, e, i, n)
	}

	function an(t, e, i, n) {
		Ki.call(this, t, e, i, n)
	}

	function on(t, e, i, n) {
		nn.call(this, t, e, i, n)
	}

	function sn(t, e, i, n) {
		nn.call(this, t, e, i, n)
	}

	function cn(t, e, i, n) {
		nn.call(this, t, e, i, n)
	}

	function hn(t, e, i) {
		nn.call(this, t, e, i)
	}

	function ln(t, e, i, n) {
		nn.call(this, t, e, i, n)
	}

	function un(t, e, i, n) {
		nn.apply(this, t, e, i, n)
	}

	function pn(t, e, i) {
		this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = Ps.generateUUID(), this
			.duration < 0 && this.resetDuration(), this.optimize()
	}

	function dn(t) {
		this.manager = void 0 !== t ? t : tl, this.textures = {}
	}

	function fn(t) {
		this.manager = void 0 !== t ? t : tl
	}

	function mn() {
		this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
	}

	function gn(t) {
		"boolean" == typeof t && (console.warn(
				"THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this
			.manager = void 0 !== t ? t : tl, this.withCredentials = !1
	}

	function vn(t) {
		this.manager = void 0 !== t ? t : tl, this.texturePath = ""
	}

	function yn(t, e, i, n, r) {
		var a = .5 * (n - e),
			o = .5 * (r - i),
			s = t * t,
			c = t * s;
		return (2 * i - 2 * n + a + o) * c + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i
	}

	function xn(t, e) {
		var i = 1 - t;
		return i * i * e
	}

	function bn(t, e) {
		return 2 * (1 - t) * t * e
	}

	function _n(t, e) {
		return t * t * e
	}

	function wn(t, e, i, n) {
		return xn(t, e) + bn(t, i) + _n(t, n)
	}

	function Mn(t, e) {
		var i = 1 - t;
		return i * i * i * e
	}

	function En(t, e) {
		var i = 1 - t;
		return 3 * i * i * t * e
	}

	function Tn(t, e) {
		return 3 * (1 - t) * t * t * e
	}

	function Sn(t, e) {
		return t * t * t * e
	}

	function An(t, e, i, n, r) {
		return Mn(t, e) + En(t, i) + Tn(t, n) + Sn(t, r)
	}

	function Rn() {
		this.type = "Curve", this.arcLengthDivisions = 200
	}

	function Ln(t, e) {
		Rn.call(this), this.type = "LineCurve", this.v1 = t || new i, this.v2 = e || new i
	}

	function Pn() {
		Rn.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
	}

	function Cn(t, e, i, n, r, a, o, s) {
		Rn.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this
			.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o ||
			!1, this.aRotation = s || 0
	}

	function In(t) {
		Rn.call(this), this.type = "SplineCurve", this.points = t || []
	}

	function Un(t, e, n, r) {
		Rn.call(this), this.type = "CubicBezierCurve", this.v0 = t || new i, this.v1 = e || new i, this.v2 = n ||
			new i, this.v3 = r || new i
	}

	function Dn(t, e, n) {
		Rn.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new i, this.v1 = e || new i, this.v2 =
			n || new i
	}

	function On(t) {
		Pn.call(this), this.type = "Path", this.currentPoint = new i, t && this.setFromPoints(t)
	}

	function Nn(t) {
		On.call(this, t), this.type = "Shape", this.holes = []
	}

	function Fn() {
		this.type = "ShapePath", this.subPaths = [], this.currentPath = null
	}

	function Bn(t) {
		this.type = "Font", this.data = t
	}

	function zn(t) {
		this.manager = void 0 !== t ? t : tl
	}

	function Gn(t) {
		this.manager = void 0 !== t ? t : tl
	}

	function Hn() {
		this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new me, this.cameraL.layers
			.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new me, this.cameraR.layers.enable(2),
			this.cameraR.matrixAutoUpdate = !1
	}

	function Vn(t, e, i) {
		ht.call(this), this.type = "CubeCamera";
		var n = 90,
			r = 1,
			o = new me(n, r, t, e);
		o.up.set(0, -1, 0), o.lookAt(new a(1, 0, 0)), this.add(o);
		var s = new me(n, r, t, e);
		s.up.set(0, -1, 0), s.lookAt(new a((-1), 0, 0)), this.add(s);
		var c = new me(n, r, t, e);
		c.up.set(0, 0, 1), c.lookAt(new a(0, 1, 0)), this.add(c);
		var h = new me(n, r, t, e);
		h.up.set(0, 0, -1), h.lookAt(new a(0, (-1), 0)), this.add(h);
		var u = new me(n, r, t, e);
		u.up.set(0, -1, 0), u.lookAt(new a(0, 0, 1)), this.add(u);
		var p = new me(n, r, t, e);
		p.up.set(0, -1, 0), p.lookAt(new a(0, 0, (-1))), this.add(p);
		var d = {
			format: Xo,
			magFilter: Po,
			minFilter: Po
		};
		this.renderTarget = new l(i, i, d), this.renderTarget.texture.name = "CubeCamera", this.update = function(t,
			e) {
			null === this.parent && this.updateMatrixWorld();
			var i = this.renderTarget,
				n = i.texture.generateMipmaps;
			i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, o, i), i.activeCubeFace = 1, t
				.render(e, s, i), i.activeCubeFace = 2, t.render(e, c, i), i.activeCubeFace = 3, t.render(e, h,
					i), i.activeCubeFace = 4, t.render(e, u, i), i.texture.generateMipmaps = n, i
				.activeCubeFace = 5, t.render(e, p, i), t.setRenderTarget(null)
		}, this.clear = function(t, e, i, n) {
			for (var r = this.renderTarget, a = 0; a < 6; a++) r.activeCubeFace = a, t.setRenderTarget(r), t
				.clear(e, i, n);
			t.setRenderTarget(null)
		}
	}

	function kn() {
		ht.call(this), this.type = "AudioListener", this.context = ll.getContext(), this.gain = this.context
			.createGain(), this.gain.connect(this.context.destination), this.filter = null
	}

	function jn(t) {
		ht.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this
			.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0,
			this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this
			.sourceType = "empty", this.filters = []
	}

	function Wn(t) {
		jn.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
	}

	function Xn(t, e) {
		this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data =
			new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
	}

	function qn(t, e, i) {
		this.binding = t, this.valueSize = i;
		var n, r = Float64Array;
		switch (e) {
			case "quaternion":
				n = this._slerp;
				break;
			case "string":
			case "bool":
				r = Array, n = this._select;
				break;
			default:
				n = this._lerp
		}
		this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this
			.referenceCount = 0
	}

	function Yn(t, e, i) {
		var n = i || Zn.parseTrackName(e);
		this._targetGroup = t, this._bindings = t.subscribe_(e, n)
	}

	function Zn(t, e, i) {
		this.path = e, this.parsedPath = i || Zn.parseTrackName(e), this.node = Zn.findNode(t, this.parsedPath
			.nodeName) || t, this.rootNode = t
	}

	function Jn() {
		this.uuid = Ps.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ =
			0;
		var t = {};
		this._indicesByUUID = t;
		for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
		this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
		var n = this;
		this.stats = {
			objects: {
				get total() {
					return n._objects.length
				},
				get inUse() {
					return this.total - n.nCachedObjects_
				}
			},
			get bindingsPerObject() {
				return n._bindings.length
			}
		}
	}

	function Qn(t, e, i) {
		this._mixer = t, this._clip = e, this._localRoot = i || null;
		for (var n = e.tracks, r = n.length, a = new Array(r), o = {
				endingStart: fs,
				endingEnd: fs
			}, s = 0; s !== r; ++s) {
			var c = n[s].createInterpolant(null);
			a[s] = c, c.settings = o
		}
		this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this
			._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this
			._weightInterpolant = null, this.loop = hs, this._loopCount = -1, this._startTime = null, this.time = 0,
			this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this
			.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this
			.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
	}

	function Kn(t) {
		this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
	}

	function $n(t) {
		"string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[
			1]), this.value = t
	}

	function tr() {
		St.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
	}

	function er(t, e, i, n) {
		this.uuid = Ps.generateUUID(), this.data = t, this.itemSize = e, this.offset = i, this.normalized = n === !0
	}

	function ir(t, e) {
		this.uuid = Ps.generateUUID(), this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e :
			0, this.dynamic = !1, this.updateRange = {
				offset: 0,
				count: -1
			}, this.onUploadCallback = function() {}, this.version = 0
	}

	function nr(t, e, i) {
		ir.call(this, t, e), this.meshPerAttribute = i || 1
	}

	function rr(t, e, i) {
		ft.call(this, t, e), this.meshPerAttribute = i || 1
	}

	function ar(t, e, i, n) {
		this.ray = new Ut(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {
			Mesh: {},
			Line: {},
			LOD: {},
			Points: {
				threshold: 1
			},
			Sprite: {}
		}, Object.defineProperties(this.params, {
			PointCloud: {
				get: function() {
					return console.warn(
							"THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
						this.Points
				}
			}
		})
	}

	function or(t, e) {
		return t.distance - e.distance
	}

	function sr(t, e, i, n) {
		if (t.visible !== !1 && (t.raycast(e, i), n === !0))
			for (var r = t.children, a = 0, o = r.length; a < o; a++) sr(r[a], e, i, !0)
	}

	function cr(t) {
		this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this
			.running = !1
	}

	function hr(t, e, i) {
		return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i :
			0, this
	}

	function lr(t, e, i) {
		return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0,
			this
	}

	function ur(t) {
		ht.call(this), this.material = t, this.render = function() {}
	}

	function pr(t, e, i, n) {
		this.object = t, this.size = void 0 !== e ? e : 1;
		var r = void 0 !== i ? i : 16711680,
			a = void 0 !== n ? n : 1,
			o = 0,
			s = this.object.geometry;
		s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
		var c = new St,
			h = new wt(2 * o * 3, 3);
		c.addAttribute("position", h), De.call(this, c, new Ie({
			color: r,
			linewidth: a
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function dr(t, e) {
		ht.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this
			.matrixAutoUpdate = !1, this.color = e;
		for (var i = new St, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0,
				0, -1, 1
			], r = 0, a = 1, o = 32; r < o; r++, a++) {
			var s = r / o * Math.PI * 2,
				c = a / o * Math.PI * 2;
			n.push(Math.cos(s), Math.sin(s), 1, Math.cos(c), Math.sin(c), 1)
		}
		i.addAttribute("position", new wt(n, 3));
		var h = new Ie({
			fog: !1
		});
		this.cone = new De(i, h), this.add(this.cone), this.update()
	}

	function fr(t) {
		var e = [];
		t && t.isBone && e.push(t);
		for (var i = 0; i < t.children.length; i++) e.push.apply(e, fr(t.children[i]));
		return e
	}

	function mr(t) {
		for (var e = fr(t), i = new St, n = [], r = [], a = new q(0, 0, 1), o = new q(0, 1, 0), s = 0; s < e
			.length; s++) {
			var c = e[s];
			c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o
				.g, o.b))
		}
		i.addAttribute("position", new wt(n, 3)), i.addAttribute("color", new wt(r, 3));
		var h = new Ie({
			vertexColors: Pa,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		});
		De.call(this, i, h), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
	}

	function gr(t, e, i) {
		this.light = t, this.light.updateMatrixWorld(), this.color = i;
		var n = new pi(e, 4, 2),
			r = new Ct({
				wireframe: !0,
				fog: !1
			});
		Nt.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
	}

	function vr(t, e) {
		ht.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this
			.matrixAutoUpdate = !1, this.color = e;
		var i = new Ie({
				fog: !1
			}),
			n = new St;
		n.addAttribute("position", new ft(new Float32Array(15), 3)), this.line = new Ue(n, i), this.add(this.line),
			this.update()
	}

	function yr(t, e, i) {
		ht.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this
			.matrixAutoUpdate = !1, this.color = i;
		var n = new Je(e);
		n.rotateY(.5 * Math.PI), this.material = new Ct({
			wireframe: !0,
			fog: !1
		}), void 0 === this.color && (this.material.vertexColors = Pa);
		var r = n.getAttribute("position"),
			a = new Float32Array(3 * r.count);
		n.addAttribute("color", new ft(a, 3)), this.add(new Nt(n, this.material)), this.update()
	}

	function xr(t, e, i, n) {
		t = t || 10, e = e || 10, i = new q(void 0 !== i ? i : 4473924), n = new q(void 0 !== n ? n : 8947848);
		for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++, u += a) {
			s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
			var p = h === r ? i : n;
			p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3, p.toArray(c, l), l += 3
		}
		var d = new St;
		d.addAttribute("position", new wt(s, 3)), d.addAttribute("color", new wt(c, 3));
		var f = new Ie({
			vertexColors: Pa
		});
		De.call(this, d, f)
	}

	function br(t, e, i, n, r, a) {
		t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new q(void 0 !== r ? r : 4473924), a = new q(
			void 0 !== a ? a : 8947848);
		var o, s, c, h, l, u, p, d = [],
			f = [];
		for (h = 0; h <= e; h++) c = h / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, d.push(0, 0,
			0), d.push(o, 0, s), p = 1 & h ? r : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
		for (h = 0; h <= i; h++)
			for (p = 1 & h ? r : a, u = t - t / i * h, l = 0; l < n; l++) c = l / n * (2 * Math.PI), o = Math.sin(
				c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b), c = (l + 1) / n * (2 * Math
				.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b);
		var m = new St;
		m.addAttribute("position", new wt(d, 3)), m.addAttribute("color", new wt(f, 3));
		var g = new Ie({
			vertexColors: Pa
		});
		De.call(this, m, g)
	}

	function _r(t, e, i, n) {
		this.object = t, this.size = void 0 !== e ? e : 1;
		var r = void 0 !== i ? i : 16776960,
			a = void 0 !== n ? n : 1,
			o = 0,
			s = this.object.geometry;
		s && s.isGeometry ? o = s.faces.length : console.warn(
			"THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."
		);
		var c = new St,
			h = new wt(2 * o * 3, 3);
		c.addAttribute("position", h), De.call(this, c, new Ie({
			color: r,
			linewidth: a
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function wr(t, e, i) {
		ht.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this
			.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
		var n = new St;
		n.addAttribute("position", new wt([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
		var r = new Ie({
			fog: !1
		});
		this.lightPlane = new Ue(n, r), this.add(this.lightPlane), n = new St, n.addAttribute("position", new wt([0,
			0, 0, 0, 0, 1
		], 3)), this.targetLine = new Ue(n, r), this.add(this.targetLine), this.update()
	}

	function Mr(t) {
		function e(t, e, n) {
			i(t, n), i(e, n)
		}

		function i(t, e) {
			a.push(0, 0, 0), o.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(a.length / 3 - 1)
		}
		var n = new St,
			r = new Ie({
				color: 16777215,
				vertexColors: La
			}),
			a = [],
			o = [],
			s = {},
			c = new q(16755200),
			h = new q(16711680),
			l = new q(43775),
			u = new q(16777215),
			p = new q(3355443);
		e("n1", "n2", c), e("n2", "n4", c), e("n4", "n3", c), e("n3", "n1", c), e("f1", "f2", c), e("f2", "f4", c),
			e("f4", "f3", c), e("f3", "f1", c), e("n1", "f1", c), e("n2", "f2", c), e("n3", "f3", c), e("n4", "f4",
				c), e("p", "n1", h), e("p", "n2", h), e("p", "n3", h), e("p", "n4", h), e("u1", "u2", l), e("u2",
				"u3", l), e("u3", "u1", l), e("c", "t", u), e("p", "c", p), e("cn1", "cn2", p), e("cn3", "cn4", p),
			e("cf1", "cf2", p), e("cf3", "cf4", p), n.addAttribute("position", new wt(a, 3)), n.addAttribute(
				"color", new wt(o, 3)), De.call(this, n, r), this.camera = t, this.camera.updateProjectionMatrix &&
			this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this
			.pointMap = s, this.update()
	}

	function Er(t, e) {
		this.object = t, void 0 === e && (e = 16776960);
		var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
			n = new Float32Array(24),
			r = new St;
		r.setIndex(new ft(i, 1)), r.addAttribute("position", new ft(n, 3)), De.call(this, r, new Ie({
			color: e
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function Tr(t, e) {
		this.type = "Box3Helper", this.box = t;
		var i = void 0 !== e ? e : 16776960,
			n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
			r = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],
			a = new St;
		a.setIndex(new ft(n, 1)), a.addAttribute("position", new wt(r, 3)), De.call(this, a, new Ie({
			color: i
		})), this.geometry.computeBoundingSphere()
	}

	function Sr(t, e, i) {
		this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
		var n = void 0 !== i ? i : 16776960,
			r = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
			a = new St;
		a.addAttribute("position", new wt(r, 3)), a.computeBoundingSphere(), Ue.call(this, a, new Ie({
			color: n
		}));
		var o = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
			s = new St;
		s.addAttribute("position", new wt(o, 3)), s.computeBoundingSphere(), this.add(new Nt(s, new Ct({
			color: n,
			opacity: .2,
			transparent: !0,
			depthWrite: !1
		})))
	}

	function Ar(t, e, i, n, r, a) {
		ht.call(this), void 0 === n && (n = 16776960), void 0 === i && (i = 1), void 0 === r && (r = .2 * i),
			void 0 === a && (a = .2 * r), void 0 === ul && (ul = new St, ul.addAttribute("position", new wt([0, 0,
				0, 0, 1, 0
			], 3)), pl = new _i(0, .5, 1, 5, 1), pl.translate(0, -.5, 0)), this.position.copy(e), this.line =
			new Ue(ul, new Ie({
				color: n
			})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Nt(pl, new Ct({
				color: n
			})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
	}

	function Rr(t) {
		t = t || 1;
		var e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
			i = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],
			n = new St;
		n.addAttribute("position", new wt(e, 3)), n.addAttribute("color", new wt(i, 3));
		var r = new Ie({
			vertexColors: Pa
		});
		De.call(this, n, r)
	}

	function Lr() {
		function t(t, a, o, s) {
			e = t, i = o, n = -3 * t + 3 * a - 2 * o - s, r = 2 * t - 2 * a + o + s
		}
		var e = 0,
			i = 0,
			n = 0,
			r = 0;
		return {
			initCatmullRom: function(e, i, n, r, a) {
				t(i, n, a * (n - e), a * (r - i))
			},
			initNonuniformCatmullRom: function(e, i, n, r, a, o, s) {
				var c = (i - e) / a - (n - e) / (a + o) + (n - i) / o,
					h = (n - i) / o - (r - i) / (o + s) + (r - n) / s;
				c *= o, h *= o, t(i, n, c, h)
			},
			calc: function(t) {
				var a = t * t,
					o = a * t;
				return e + i * t + n * a + r * o
			}
		}
	}

	function Pr(t, e, i, n) {
		Rn.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this
			.curveType = i || "centripetal", this.tension = n || .5
	}

	function Cr(t, e, i, n) {
		Rn.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new a, this.v1 = e || new a, this.v2 = i ||
			new a, this.v3 = n || new a
	}

	function Ir(t, e, i) {
		Rn.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new a, this.v1 = e || new a, this.v2 =
			i || new a
	}

	function Ur(t, e) {
		Rn.call(this), this.type = "LineCurve3", this.v1 = t || new a, this.v2 = e || new a
	}

	function Dr(t, e, i, n, r, a) {
		Cn.call(this, t, e, i, i, n, r, a), this.type = "ArcCurve"
	}

	function Or(t, e, i, n, r, a, o) {
		return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new pt(t, e, i,
			r, a, o)
	}

	function Nr(t) {
		return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t
	}

	function Fr(t) {
		return void 0 === t && (t = []), console.warn(
				"THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t
			.materials = t,
			t.clone = function() {
				return t.slice()
			}, t
	}

	function Br(t, e) {
		return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Fe(t, e)
	}

	function zr(t) {
		return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Ae(t)
	}

	function Gr(t, e) {
		return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Fe(t, e)
	}

	function Hr(t) {
		return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new Ne(t)
	}

	function Vr(t) {
		return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new Ne(t)
	}

	function kr(t) {
		return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new Ne(t)
	}

	function jr(t, e, i) {
		return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new a(t, e, i)
	}

	function Wr(t, e) {
		return console.warn(
			"THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."
		), new ft(t, e).setDynamic(!0)
	}

	function Xr(t, e) {
		return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),
			new mt(t, e)
	}

	function qr(t, e) {
		return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),
			new gt(t, e)
	}

	function Yr(t, e) {
		return console.warn(
			"THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."
		), new vt(t, e)
	}

	function Zr(t, e) {
		return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),
			new yt(t, e)
	}

	function Jr(t, e) {
		return console.warn(
			"THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new xt(t,
			e)
	}

	function Qr(t, e) {
		return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),
			new bt(t, e)
	}

	function Kr(t, e) {
		return console.warn(
			"THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new _t(t,
			e)
	}

	function $r(t, e) {
		return console.warn(
			"THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new wt(
			t, e)
	}

	function ta(t, e) {
		return console.warn(
			"THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new Mt(
			t, e)
	}

	function ea(t) {
		console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Pr.call(
			this, t), this.type = "catmullrom", this.closed = !0
	}

	function ia(t) {
		console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Pr.call(this,
			t), this.type = "catmullrom"
	}

	function na(t) {
		console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Pr.call(this, t), this
			.type = "catmullrom"
	}

	function ra(t) {
		return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new Rr(t)
	}

	function aa(t, e) {
		return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),
			new Er(t, e)
	}

	function oa(t, e) {
		return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new De(new xi(t
			.geometry), new Ie({
			color: void 0 !== e ? e : 16777215
		}))
	}

	function sa(t, e) {
		return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new De(
			new Ve(t.geometry), new Ie({
				color: void 0 !== e ? e : 16777215
			}))
	}

	function ca(t) {
		return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new Ni(t)
	}

	function ha(t) {
		return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new Bi(t)
	}

	function la() {
		console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this
			.projectVector = function(t, e) {
				console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
			}, this.unprojectVector = function(t, e) {
				console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
			}, this.pickingRay = function() {
				console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
			}
	}

	function ua() {
		console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this
			.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear =
			function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize =
			function() {}
	}
	void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number
		.isInteger = function(t) {
			return "number" == typeof t && isFinite(t) && Math.floor(t) === t
		}), void 0 === Math.sign && (Math.sign = function(t) {
		return t < 0 ? -1 : t > 0 ? 1 : +t
	}), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
		get: function() {
			return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
		}
	}), void 0 === Object.assign && ! function() {
		Object.assign = function(t) {
			if (void 0 === t || null === t) throw new TypeError(
				"Cannot convert undefined or null to object");
			for (var e = Object(t), i = 1; i < arguments.length; i++) {
				var n = arguments[i];
				if (void 0 !== n && null !== n)
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		}
	}(), Object.assign(e.prototype, {
		addEventListener: function(t, e) {
			void 0 === this._listeners && (this._listeners = {});
			var i = this._listeners;
			void 0 === i[t] && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e)
		},
		hasEventListener: function(t, e) {
			if (void 0 === this._listeners) return !1;
			var i = this._listeners;
			return void 0 !== i[t] && i[t].indexOf(e) !== -1
		},
		removeEventListener: function(t, e) {
			if (void 0 !== this._listeners) {
				var i = this._listeners,
					n = i[t];
				if (void 0 !== n) {
					var r = n.indexOf(e);
					r !== -1 && n.splice(r, 1)
				}
			}
		},
		dispatchEvent: function(t) {
			if (void 0 !== this._listeners) {
				var e = this._listeners,
					i = e[t.type];
				if (void 0 !== i) {
					t.target = this;
					for (var n = i.slice(0), r = 0, a = n.length; r < a; r++) n[r].call(this, t)
				}
			}
		}
	});
	var pa = "88",
		da = {
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		},
		fa = 0,
		ma = 1,
		ga = 2,
		va = 3,
		ya = 0,
		xa = 1,
		ba = 0,
		_a = 1,
		wa = 2,
		Ma = 0,
		Ea = 1,
		Ta = 2,
		Sa = 1,
		Aa = 2,
		Ra = 0,
		La = 1,
		Pa = 2,
		Ca = 0,
		Ia = 1,
		Ua = 2,
		Da = 3,
		Oa = 4,
		Na = 5,
		Fa = 100,
		Ba = 101,
		za = 102,
		Ga = 103,
		Ha = 104,
		Va = 200,
		ka = 201,
		ja = 202,
		Wa = 203,
		Xa = 204,
		qa = 205,
		Ya = 206,
		Za = 207,
		Ja = 208,
		Qa = 209,
		Ka = 210,
		$a = 0,
		to = 1,
		eo = 2,
		io = 3,
		no = 4,
		ro = 5,
		ao = 6,
		oo = 7,
		so = 0,
		co = 1,
		ho = 2,
		lo = 0,
		uo = 1,
		po = 2,
		fo = 3,
		mo = 4,
		go = 300,
		vo = 301,
		yo = 302,
		xo = 303,
		bo = 304,
		_o = 305,
		wo = 306,
		Mo = 307,
		Eo = 1e3,
		To = 1001,
		So = 1002,
		Ao = 1003,
		Ro = 1004,
		Lo = 1005,
		Po = 1006,
		Co = 1007,
		Io = 1008,
		Uo = 1009,
		Do = 1010,
		Oo = 1011,
		No = 1012,
		Fo = 1013,
		Bo = 1014,
		zo = 1015,
		Go = 1016,
		Ho = 1017,
		Vo = 1018,
		ko = 1019,
		jo = 1020,
		Wo = 1021,
		Xo = 1022,
		qo = 1023,
		Yo = 1024,
		Zo = 1025,
		Jo = qo,
		Qo = 1026,
		Ko = 1027,
		$o = 2001,
		ts = 2002,
		es = 2003,
		is = 2004,
		ns = 2100,
		rs = 2101,
		as = 2102,
		os = 2103,
		ss = 2151,
		cs = 2200,
		hs = 2201,
		ls = 2202,
		us = 2300,
		ps = 2301,
		ds = 2302,
		fs = 2400,
		ms = 2401,
		gs = 2402,
		vs = 0,
		ys = 1,
		xs = 2,
		bs = 3e3,
		_s = 3001,
		ws = 3007,
		Ms = 3002,
		Es = 3003,
		Ts = 3004,
		Ss = 3005,
		As = 3006,
		Rs = 3200,
		Ls = 3201,
		Ps = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function() {
				var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
					i = 0;
				return function() {
					for (var n = "", r = 0; r < 36; r++) 8 === r || 13 === r || 18 === r || 23 === r ? n +=
						"-" : 14 === r ? n += "4" : (i <= 2 && (i = 33554432 + 16777216 * Math.random() |
							0), t = 15 & i, i >>= 4, n += e[19 === r ? 3 & t | 8 : t]);
					return n
				}
			}(),
			clamp: function(t, e, i) {
				return Math.max(e, Math.min(i, t))
			},
			euclideanModulo: function(t, e) {
				return (t % e + e) % e
			},
			mapLinear: function(t, e, i, n, r) {
				return n + (t - e) * (r - n) / (i - e)
			},
			lerp: function(t, e, i) {
				return (1 - i) * t + i * e
			},
			smoothstep: function(t, e, i) {
				return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e), t * t * (3 - 2 * t))
			},
			smootherstep: function(t, e, i) {
				return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e), t * t * t * (t * (6 * t - 15) + 10))
			},
			randInt: function(t, e) {
				return t + Math.floor(Math.random() * (e - t + 1))
			},
			randFloat: function(t, e) {
				return t + Math.random() * (e - t)
			},
			randFloatSpread: function(t) {
				return t * (.5 - Math.random())
			},
			degToRad: function(t) {
				return t * Ps.DEG2RAD
			},
			radToDeg: function(t) {
				return t * Ps.RAD2DEG
			},
			isPowerOfTwo: function(t) {
				return 0 === (t & t - 1) && 0 !== t
			},
			ceilPowerOfTwo: function(t) {
				return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
			},
			floorPowerOfTwo: function(t) {
				return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
			}
		};
	Object.defineProperties(i.prototype, {
		width: {
			get: function() {
				return this.x
			},
			set: function(t) {
				this.x = t
			}
		},
		height: {
			get: function() {
				return this.y
			},
			set: function(t) {
				this.y = t
			}
		}
	}), Object.assign(i.prototype, {
		isVector2: !0,
		set: function(t, e) {
			return this.x = t, this.y = e, this
		},
		setScalar: function(t) {
			return this.x = t, this.y = t, this
		},
		setX: function(t) {
			return this.x = t, this
		},
		setY: function(t) {
			return this.y = t, this
		},
		setComponent: function(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		},
		getComponent: function(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("index is out of range: " + t)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y)
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this
		},
		add: function(t, e) {
			return void 0 !== e ? (console.warn(
				"THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
			), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
		},
		addScalar: function(t) {
			return this.x += t, this.y += t, this
		},
		addVectors: function(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this
		},
		addScaledVector: function(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this
		},
		sub: function(t, e) {
			return void 0 !== e ? (console.warn(
				"THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
			), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
		},
		subScalar: function(t) {
			return this.x -= t, this.y -= t, this
		},
		subVectors: function(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this
		},
		multiply: function(t) {
			return this.x *= t.x, this.y *= t.y, this
		},
		multiplyScalar: function(t) {
			return this.x *= t, this.y *= t, this
		},
		divide: function(t) {
			return this.x /= t.x, this.y /= t.y, this
		},
		divideScalar: function(t) {
			return this.multiplyScalar(1 / t)
		},
		applyMatrix3: function(t) {
			var e = this.x,
				i = this.y,
				n = t.elements;
			return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
		},
		min: function(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
		},
		max: function(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
		},
		clamp: function(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y,
					this.y)),
				this
		},
		clampScalar: function() {
			var t = new i,
				e = new i;
			return function(i, n) {
				return t.set(i, i), e.set(n, n), this.clamp(t, e)
			}
		}(),
		clampLength: function(t, e) {
			var i = this.length();
			return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ?
				Math.ceil(this.y) : Math.floor(this.y), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		manhattanLength: function() {
			return Math.abs(this.x) + Math.abs(this.y)
		},
		normalize: function() {
			return this.divideScalar(this.length() || 1)
		},
		angle: function() {
			var t = Math.atan2(this.y, this.x);
			return t < 0 && (t += 2 * Math.PI), t
		},
		distanceTo: function(t) {
			return Math.sqrt(this.distanceToSquared(t))
		},
		distanceToSquared: function(t) {
			var e = this.x - t.x,
				i = this.y - t.y;
			return e * e + i * i
		},
		manhattanDistanceTo: function(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
		},
		setLength: function(t) {
			return this.normalize().multiplyScalar(t)
		},
		lerp: function(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
		},
		lerpVectors: function(t, e, i) {
			return this.subVectors(e, t).multiplyScalar(i).add(t)
		},
		equals: function(t) {
			return t.x === this.x && t.y === this.y
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y,
				t
		},
		fromBufferAttribute: function(t, e, i) {
			return void 0 !== i && console.warn(
					"THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t
				.getX(e), this.y = t.getY(e), this
		},
		rotateAround: function(t, e) {
			var i = Math.cos(e),
				n = Math.sin(e),
				r = this.x - t.x,
				a = this.y - t.y;
			return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
		}
	}), Object.assign(n.prototype, {
		isMatrix4: !0,
		set: function(t, e, i, n, r, a, o, s, c, h, l, u, p, d, f, m) {
			var g = this.elements;
			return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[
					2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m,
				this
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		clone: function() {
			return (new n).fromArray(this.elements)
		},
		copy: function(t) {
			var e = this.elements,
				i = t.elements;
			return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] =
				i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[
					12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
		},
		copyPosition: function(t) {
			var e = this.elements,
				i = t.elements;
			return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
		},
		extractBasis: function(t, e, i) {
			return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i
				.setFromMatrixColumn(this, 2), this
		},
		makeBasis: function(t, e, i) {
			return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
		},
		extractRotation: function() {
			var t = new a;
			return function(e) {
				var i = this.elements,
					n = e.elements,
					r = 1 / t.setFromMatrixColumn(e, 0).length(),
					a = 1 / t.setFromMatrixColumn(e, 1).length(),
					o = 1 / t.setFromMatrixColumn(e, 2).length();
				return i[0] = n[0] * r, i[1] = n[1] * r, i[2] = n[2] * r, i[4] = n[4] * a, i[5] = n[
						5] * a, i[6] = n[6] * a, i[8] = n[8] * o, i[9] = n[9] * o, i[10] = n[10] *
					o, this
			}
		}(),
		makeRotationFromEuler: function(t) {
			t && t.isEuler || console.error(
				"THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
			);
			var e = this.elements,
				i = t.x,
				n = t.y,
				r = t.z,
				a = Math.cos(i),
				o = Math.sin(i),
				s = Math.cos(n),
				c = Math.sin(n),
				h = Math.cos(r),
				l = Math.sin(r);
			if ("XYZ" === t.order) {
				var u = a * h,
					p = a * l,
					d = o * h,
					f = o * l;
				e[0] = s * h, e[4] = -s * l, e[8] = c, e[1] = p + d * c, e[5] = u - f * c, e[9] = -o *
					s, e[2] = f - u * c, e[6] = d + p * c, e[10] = a * s
			} else if ("YXZ" === t.order) {
				var m = s * h,
					g = s * l,
					v = c * h,
					y = c * l;
				e[0] = m + y * o, e[4] = v * o - g, e[8] = a * c, e[1] = a * l, e[5] = a * h, e[9] = -o,
					e[2] = g * o - v, e[6] = y + m * o, e[10] = a * s
			} else if ("ZXY" === t.order) {
				var m = s * h,
					g = s * l,
					v = c * h,
					y = c * l;
				e[0] = m - y * o, e[4] = -a * l, e[8] = v + g * o, e[1] = g + v * o, e[5] = a * h, e[
					9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
			} else if ("ZYX" === t.order) {
				var u = a * h,
					p = a * l,
					d = o * h,
					f = o * l;
				e[0] = s * h, e[4] = d * c - p, e[8] = u * c + f, e[1] = s * l, e[5] = f * c + u, e[9] =
					p * c - d, e[2] = -c, e[6] = o * s, e[10] = a * s
			} else if ("YZX" === t.order) {
				var x = a * s,
					b = a * c,
					_ = o * s,
					w = o * c;
				e[0] = s * h, e[4] = w - x * l, e[8] = _ * l + b, e[1] = l, e[5] = a * h, e[9] = -o * h,
					e[2] = -c * h, e[6] = b * l + _, e[10] = x - w * l
			} else if ("XZY" === t.order) {
				var x = a * s,
					b = a * c,
					_ = o * s,
					w = o * c;
				e[0] = s * h, e[4] = -l, e[8] = c * h, e[1] = x * l + w, e[5] = a * h, e[9] = b * l - _,
					e[2] = _ * l - b, e[6] = o * h, e[10] = w * l + x
			}
			return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		},
		makeRotationFromQuaternion: function(t) {
			var e = this.elements,
				i = t._x,
				n = t._y,
				r = t._z,
				a = t._w,
				o = i + i,
				s = n + n,
				c = r + r,
				h = i * o,
				l = i * s,
				u = i * c,
				p = n * s,
				d = n * c,
				f = r * c,
				m = a * o,
				g = a * s,
				v = a * c;
			return e[0] = 1 - (p + f), e[4] = l - v, e[8] = u + g, e[1] = l + v, e[5] = 1 - (h + f), e[
				9] = d - m, e[2] = u - g, e[6] = d + m, e[10] = 1 - (h + p), e[3] = 0, e[7] = 0, e[
				11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		},
		lookAt: function() {
			var t = new a,
				e = new a,
				i = new a;
			return function(n, r, a) {
				var o = this.elements;
				return i.subVectors(n, r), 0 === i.lengthSq() && (i.z = 1), i.normalize(), t
					.crossVectors(a, i), 0 === t.lengthSq() && (1 === Math.abs(a.z) ? i.x += 1e-4 :
						i.z += 1e-4, i.normalize(), t.crossVectors(a, i)), t.normalize(), e
					.crossVectors(i, t), o[0] = t.x, o[4] = e.x, o[8] = i.x, o[1] = t.y, o[5] = e.y,
					o[9] = i.y, o[2] = t.z, o[6] = e.z, o[10] = i.z, this
			}
		}(),
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn(
				"THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
			), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
		},
		premultiply: function(t) {
			return this.multiplyMatrices(t, this)
		},
		multiplyMatrices: function(t, e) {
			var i = t.elements,
				n = e.elements,
				r = this.elements,
				a = i[0],
				o = i[4],
				s = i[8],
				c = i[12],
				h = i[1],
				l = i[5],
				u = i[9],
				p = i[13],
				d = i[2],
				f = i[6],
				m = i[10],
				g = i[14],
				v = i[3],
				y = i[7],
				x = i[11],
				b = i[15],
				_ = n[0],
				w = n[4],
				M = n[8],
				E = n[12],
				T = n[1],
				S = n[5],
				A = n[9],
				R = n[13],
				L = n[2],
				P = n[6],
				C = n[10],
				I = n[14],
				U = n[3],
				D = n[7],
				O = n[11],
				N = n[15];
			return r[0] = a * _ + o * T + s * L + c * U, r[4] = a * w + o * S + s * P + c * D, r[8] =
				a * M + o * A + s * C + c * O, r[12] = a * E + o * R + s * I + c * N, r[1] = h * _ + l *
				T + u * L + p * U, r[5] = h * w + l * S + u * P + p * D, r[9] = h * M + l * A + u * C +
				p * O, r[13] = h * E + l * R + u * I + p * N, r[2] = d * _ + f * T + m * L + g * U, r[
					6] = d * w + f * S + m * P + g * D, r[10] = d * M + f * A + m * C + g * O, r[14] =
				d *
				E + f * R + m * I + g * N, r[3] = v * _ + y * T + x * L + b * U, r[7] = v * w + y * S +
				x * P + b * D, r[11] = v * M + y * A + x * C + b * O, r[15] = v * E + y * R + x * I +
				b * N, this
		},
		multiplyScalar: function(t) {
			var e = this.elements;
			return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[
					13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[
				11] *=
				t, e[15] *= t, this
		},
		applyToBufferAttribute: function() {
			var t = new a;
			return function(e) {
				for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e
					.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z);
				return e
			}
		}(),
		determinant: function() {
			var t = this.elements,
				e = t[0],
				i = t[4],
				n = t[8],
				r = t[12],
				a = t[1],
				o = t[5],
				s = t[9],
				c = t[13],
				h = t[2],
				l = t[6],
				u = t[10],
				p = t[14],
				d = t[3],
				f = t[7],
				m = t[11],
				g = t[15];
			return d * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p) + f * (+
				e * s * p - e * c * u + r * a * u - n * a * p + n * c * h - r * s * h) + m * (+e *
				c * l - e * o * p - r * a * l + i * a * p + r * o * h - i * c * h) + g * (-n * o *
				h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h)
		},
		transpose: function() {
			var t, e = this.elements;
			return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[
					9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t,
				t = e[11], e[11] = e[14], e[14] = t, this
		},
		setPosition: function(t) {
			var e = this.elements;
			return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
		},
		getInverse: function(t, e) {
			var i = this.elements,
				n = t.elements,
				r = n[0],
				a = n[1],
				o = n[2],
				s = n[3],
				c = n[4],
				h = n[5],
				l = n[6],
				u = n[7],
				p = n[8],
				d = n[9],
				f = n[10],
				m = n[11],
				g = n[12],
				v = n[13],
				y = n[14],
				x = n[15],
				b = d * y * u - v * f * u + v * l * m - h * y * m - d * l * x + h * f * x,
				_ = g * f * u - p * y * u - g * l * m + c * y * m + p * l * x - c * f * x,
				w = p * v * u - g * d * u + g * h * m - c * v * m - p * h * x + c * d * x,
				M = g * d * l - p * v * l - g * h * f + c * v * f + p * h * y - c * d * y,
				E = r * b + a * _ + o * w + s * M;
			if (0 === E) {
				var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
				if (e === !0) throw new Error(T);
				return console.warn(T), this.identity()
			}
			var S = 1 / E;
			return i[0] = b * S, i[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a *
				f * x) * S, i[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a *
				l * x) * S, i[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a *
				l * m) * S, i[4] = _ * S, i[5] = (p * y * s - g * f * s + g * o * m - r * y * m -
				p * o * x + r * f * x) * S, i[6] = (g * l * s - c * y * s - g * o * u + r * y * u +
				c * o * x - r * l * x) * S, i[7] = (c * f * s - p * l * s + p * o * u - r * f * u -
				c * o * m + r * l * m) * S, i[8] = w * S, i[9] = (g * d * s - p * v * s - g * a *
				m + r * v * m + p * a * x - r * d * x) * S, i[10] = (c * v * s - g * h * s + g * a *
				u - r * v * u - c * a * x + r * h * x) * S, i[11] = (p * h * s - c * d * s - p * a *
				u + r * d * u + c * a * m - r * h * m) * S, i[12] = M * S, i[13] = (p * v * o - g *
				d * o + g * a * f - r * v * f - p * a * y + r * d * y) * S, i[14] = (g * h * o - c *
				v * o - g * a * l + r * v * l + c * a * y - r * h * y) * S, i[15] = (c * d * o - p *
				h * o + p * a * l - r * d * l - c * a * f + r * h * f) * S, this
		},
		scale: function(t) {
			var e = this.elements,
				i = t.x,
				n = t.y,
				r = t.z;
			return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *=
				n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
		},
		getMaxScaleOnAxis: function() {
			var t = this.elements,
				e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
				i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
				n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
			return Math.sqrt(Math.max(e, i, n))
		},
		makeTranslation: function(t, e, i) {
			return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
		},
		makeRotationX: function(t) {
			var e = Math.cos(t),
				i = Math.sin(t);
			return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
		},
		makeRotationY: function(t) {
			var e = Math.cos(t),
				i = Math.sin(t);
			return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
		},
		makeRotationZ: function(t) {
			var e = Math.cos(t),
				i = Math.sin(t);
			return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		makeRotationAxis: function(t, e) {
			var i = Math.cos(e),
				n = Math.sin(e),
				r = 1 - i,
				a = t.x,
				o = t.y,
				s = t.z,
				c = r * a,
				h = r * o;
			return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h *
				s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this
		},
		makeScale: function(t, e, i) {
			return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
		},
		makeShear: function(t, e, i) {
			return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
		},
		compose: function(t, e, i) {
			return this.makeRotationFromQuaternion(e), this.scale(i), this.setPosition(t), this
		},
		decompose: function() {
			var t = new a,
				e = new n;
			return function(i, n, r) {
				var a = this.elements,
					o = t.set(a[0], a[1], a[2]).length(),
					s = t.set(a[4], a[5], a[6]).length(),
					c = t.set(a[8], a[9], a[10]).length(),
					h = this.determinant();
				h < 0 && (o = -o), i.x = a[12], i.y = a[13], i.z = a[14], e.copy(this);
				var l = 1 / o,
					u = 1 / s,
					p = 1 / c;
				return e.elements[0] *= l, e.elements[1] *= l, e.elements[2] *= l, e.elements[4] *=
					u, e.elements[5] *= u, e.elements[6] *= u, e.elements[8] *= p, e.elements[9] *=
					p, e.elements[10] *= p, n.setFromRotationMatrix(e), r.x = o, r.y = s, r.z = c,
					this
			}
		}(),
		makePerspective: function(t, e, i, n, r, a) {
			void 0 === a && console.warn(
				"THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
			);
			var o = this.elements,
				s = 2 * r / (e - t),
				c = 2 * r / (i - n),
				h = (e + t) / (e - t),
				l = (i + n) / (i - n),
				u = -(a + r) / (a - r),
				p = -2 * a * r / (a - r);
			return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[
					2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0,
				this
		},
		makeOrthographic: function(t, e, i, n, r, a) {
			var o = this.elements,
				s = 1 / (e - t),
				c = 1 / (i - n),
				h = 1 / (a - r),
				l = (e + t) * s,
				u = (i + n) * c,
				p = (a + r) * h;
			return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[
					13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -p, o[3] = 0, o[7] = 0, o[
				11] = 0,
				o[15] = 1, this
		},
		equals: function(t) {
			for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
				if (e[n] !== i[n]) return !1;
			return !0
		},
		fromArray: function(t, e) {
			void 0 === e && (e = 0);
			for (var i = 0; i < 16; i++) this.elements[i] = t[i + e];
			return this
		},
		toArray: function(t, e) {
			void 0 === t && (t = []), void 0 === e && (e = 0);
			var i = this.elements;
			return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[
					e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9],
				t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] =
				i[14], t[e + 15] = i[15], t
		}
	}), Object.assign(r, {
		slerp: function(t, e, i, n) {
			return i.copy(t).slerp(e, n)
		},
		slerpFlat: function(t, e, i, n, r, a, o) {
			var s = i[n + 0],
				c = i[n + 1],
				h = i[n + 2],
				l = i[n + 3],
				u = r[a + 0],
				p = r[a + 1],
				d = r[a + 2],
				f = r[a + 3];
			if (l !== f || s !== u || c !== p || h !== d) {
				var m = 1 - o,
					g = s * u + c * p + h * d + l * f,
					v = g >= 0 ? 1 : -1,
					y = 1 - g * g;
				if (y > Number.EPSILON) {
					var x = Math.sqrt(y),
						b = Math.atan2(x, g * v);
					m = Math.sin(m * b) / x, o = Math.sin(o * b) / x
				}
				var _ = o * v;
				if (s = s * m + u * _, c = c * m + p * _, h = h * m + d * _, l = l * m + f * _, m ===
					1 - o) {
					var w = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
					s *= w, c *= w, h *= w, l *= w
				}
			}
			t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = l
		}
	}), Object.defineProperties(r.prototype, {
		x: {
			get: function() {
				return this._x
			},
			set: function(t) {
				this._x = t, this.onChangeCallback()
			}
		},
		y: {
			get: function() {
				return this._y
			},
			set: function(t) {
				this._y = t, this.onChangeCallback()
			}
		},
		z: {
			get: function() {
				return this._z
			},
			set: function(t) {
				this._z = t, this.onChangeCallback()
			}
		},
		w: {
			get: function() {
				return this._w
			},
			set: function(t) {
				this._w = t, this.onChangeCallback()
			}
		}
	}), Object.assign(r.prototype, {
		set: function(t, e, i, n) {
			return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._w)
		},
		copy: function(t) {
			return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(),
				this
		},
		setFromEuler: function(t, e) {
			if (!t || !t.isEuler) throw new Error(
				"THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
			);
			var i = t._x,
				n = t._y,
				r = t._z,
				a = t.order,
				o = Math.cos,
				s = Math.sin,
				c = o(i / 2),
				h = o(n / 2),
				l = o(r / 2),
				u = s(i / 2),
				p = s(n / 2),
				d = s(r / 2);
			return "XYZ" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this
					._z = c * h * d + u * p * l, this._w = c * h * l - u * p * d) : "YXZ" === a ? (this
					._x = u * h * l + c * p * d, this._y = c * p * l - u * h * d, this._z = c * h * d -
					u * p * l, this._w = c * h * l + u * p * d) : "ZXY" === a ? (this._x = u * h * l -
					c * p * d, this._y = c * p * l + u * h * d, this._z = c * h * d + u * p * l, this
					._w = c * h * l - u * p * d) : "ZYX" === a ? (this._x = u * h * l - c * p * d, this
					._y = c * p * l + u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l +
					u * p * d) : "YZX" === a ? (this._x = u * h * l + c * p * d, this._y = c * p * l +
					u * h * d, this._z = c * h * d - u * p * l, this._w = c * h * l - u * p * d) :
				"XZY" === a && (this._x = u * h * l - c * p * d, this._y = c * p * l - u * h * d, this
					._z = c * h * d + u * p * l, this._w = c * h * l + u * p * d), e !== !1 && this
				.onChangeCallback(), this
		},
		setFromAxisAngle: function(t, e) {
			var i = e / 2,
				n = Math.sin(i);
			return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this
				.onChangeCallback(), this
		},
		setFromRotationMatrix: function(t) {
			var e, i = t.elements,
				n = i[0],
				r = i[4],
				a = i[8],
				o = i[1],
				s = i[5],
				c = i[9],
				h = i[2],
				l = i[6],
				u = i[10],
				p = n + s + u;
			return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (l - c) * e, this
				._y = (a - h) * e, this._z = (o - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 +
					n - s - u), this._w = (l - c) / e, this._x = .25 * e, this._y = (r + o) / e,
				this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a -
				h) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (c + l) / e) : (e = 2 *
				Math.sqrt(1 + u - n - s), this._w = (o - r) / e, this._x = (a + h) / e, this._y = (
					c + l) / e, this._z = .25 * e), this.onChangeCallback(), this
		},
		setFromUnitVectors: function() {
			var t, e = new a,
				i = 1e-6;
			return function(n, r) {
				return void 0 === e && (e = new a), t = n.dot(r) + 1, t < i ? (t = 0, Math.abs(n
						.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e
					.crossVectors(n, r), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t,
					this.normalize()
			}
		}(),
		inverse: function() {
			return this.conjugate().normalize()
		},
		conjugate: function() {
			return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
		},
		dot: function(t) {
			return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
		},
		lengthSq: function() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
		},
		length: function() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this
				._w)
		},
		normalize: function() {
			var t = this.length();
			return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this
				._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w *
				t), this.onChangeCallback(), this
		},
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn(
				"THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
			), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
		},
		premultiply: function(t) {
			return this.multiplyQuaternions(t, this)
		},
		multiplyQuaternions: function(t, e) {
			var i = t._x,
				n = t._y,
				r = t._z,
				a = t._w,
				o = e._x,
				s = e._y,
				c = e._z,
				h = e._w;
			return this._x = i * h + a * o + n * c - r * s, this._y = n * h + a * s + r * o - i * c,
				this._z = r * h + a * c + i * s - n * o, this._w = a * h - i * o - n * s - r * c, this
				.onChangeCallback(), this
		},
		slerp: function(t, e) {
			if (0 === e) return this;
			if (1 === e) return this.copy(t);
			var i = this._x,
				n = this._y,
				r = this._z,
				a = this._w,
				o = a * t._w + i * t._x + n * t._y + r * t._z;
			if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) :
				this.copy(t), o >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
			var s = Math.sqrt(1 - o * o);
			if (Math.abs(s) < .001) return this._w = .5 * (a + this._w), this._x = .5 * (i + this._x),
				this._y = .5 * (n + this._y), this._z = .5 * (r + this._z), this;
			var c = Math.atan2(s, o),
				h = Math.sin((1 - e) * c) / s,
				l = Math.sin(e * c) / s;
			return this._w = a * h + this._w * l, this._x = i * h + this._x * l, this._y = n * h + this
				._y * l, this._z = r * h + this._z * l, this.onChangeCallback(), this
		},
		equals: function(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this
				._w = t[e + 3], this.onChangeCallback(), this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this
				._y, t[e + 2] = this._z, t[e + 3] = this._w, t
		},
		onChange: function(t) {
			return this.onChangeCallback = t, this
		},
		onChangeCallback: function() {}
	}), Object.assign(a.prototype, {
		isVector3: !0,
		set: function(t, e, i) {
			return this.x = t, this.y = e, this.z = i, this
		},
		setScalar: function(t) {
			return this.x = t, this.y = t, this.z = t, this
		},
		setX: function(t) {
			return this.x = t, this
		},
		setY: function(t) {
			return this.y = t, this
		},
		setZ: function(t) {
			return this.z = t, this
		},
		setComponent: function(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		},
		getComponent: function(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range: " + t)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z)
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this
		},
		add: function(t, e) {
			return void 0 !== e ? (console.warn(
				"THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
			), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
		},
		addScalar: function(t) {
			return this.x += t, this.y += t, this.z += t, this
		},
		addVectors: function(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
		},
		addScaledVector: function(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
		},
		sub: function(t, e) {
			return void 0 !== e ? (console.warn(
				"THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
			), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
		},
		subScalar: function(t) {
			return this.x -= t, this.y -= t, this.z -= t, this
		},
		subVectors: function(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
		},
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn(
				"THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
			), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
		},
		multiplyScalar: function(t) {
			return this.x *= t, this.y *= t, this.z *= t, this
		},
		multiplyVectors: function(t, e) {
			return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
		},
		applyEuler: function() {
			var t = new r;
			return function(e) {
				return e && e.isEuler || console.error(
					"THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
				), this.applyQuaternion(t.setFromEuler(e))
			}
		}(),
		applyAxisAngle: function() {
			var t = new r;
			return function(e, i) {
				return this.applyQuaternion(t.setFromAxisAngle(e, i))
			}
		}(),
		applyMatrix3: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = t.elements;
			return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n,
				this.z = r[2] * e + r[5] * i + r[8] * n, this
		},
		applyMatrix4: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = t.elements,
				a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
			return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * e + r[5] *
					i + r[9] * n + r[13]) * a, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a,
				this
		},
		applyQuaternion: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = t.x,
				a = t.y,
				o = t.z,
				s = t.w,
				c = s * e + a * n - o * i,
				h = s * i + o * e - r * n,
				l = s * n + r * i - a * e,
				u = -r * e - a * i - o * n;
			return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o,
				this.z = l * s + u * -o + c * -a - h * -r, this
		},
		project: function() {
			var t = new n;
			return function(e) {
				return t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this
					.applyMatrix4(t)
			}
		}(),
		unproject: function() {
			var t = new n;
			return function(e) {
				return t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this
					.applyMatrix4(t)
			}
		}(),
		transformDirection: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = t.elements;
			return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n,
				this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
		},
		divide: function(t) {
			return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
		},
		divideScalar: function(t) {
			return this.multiplyScalar(1 / t)
		},
		min: function(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(
				this.z, t.z), this
		},
		max: function(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(
				this.z, t.z), this
		},
		clamp: function(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y,
				this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
		},
		clampScalar: function() {
			var t = new a,
				e = new a;
			return function(i, n) {
				return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e)
			}
		}(),
		clampLength: function(t, e) {
			var i = this.length();
			return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this
				.z), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z),
				this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this
				.z), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ?
				Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math
				.floor(this.z), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		},
		manhattanLength: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		},
		normalize: function() {
			return this.divideScalar(this.length() || 1)
		},
		setLength: function(t) {
			return this.normalize().multiplyScalar(t)
		},
		lerp: function(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this
				.z) * e, this
		},
		lerpVectors: function(t, e, i) {
			return this.subVectors(e, t).multiplyScalar(i).add(t)
		},
		cross: function(t, e) {
			return void 0 !== e ? (console.warn(
				"THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
			), this.crossVectors(t, e)) : this.crossVectors(this, t)
		},
		crossVectors: function(t, e) {
			var i = t.x,
				n = t.y,
				r = t.z,
				a = e.x,
				o = e.y,
				s = e.z;
			return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
		},
		projectOnVector: function(t) {
			var e = t.dot(this) / t.lengthSq();
			return this.copy(t).multiplyScalar(e)
		},
		projectOnPlane: function() {
			var t = new a;
			return function(e) {
				return t.copy(this).projectOnVector(e), this.sub(t)
			}
		}(),
		reflect: function() {
			var t = new a;
			return function(e) {
				return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
			}
		}(),
		angleTo: function(t) {
			var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
			return Math.acos(Ps.clamp(e, -1, 1))
		},
		distanceTo: function(t) {
			return Math.sqrt(this.distanceToSquared(t))
		},
		distanceToSquared: function(t) {
			var e = this.x - t.x,
				i = this.y - t.y,
				n = this.z - t.z;
			return e * e + i * i + n * n
		},
		manhattanDistanceTo: function(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
		},
		setFromSpherical: function(t) {
			var e = Math.sin(t.phi) * t.radius;
			return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e *
				Math.cos(t.theta), this
		},
		setFromCylindrical: function(t) {
			return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t
				.theta), this
		},
		setFromMatrixPosition: function(t) {
			var e = t.elements;
			return this.x = e[12], this.y = e[13], this.z = e[14], this
		},
		setFromMatrixScale: function(t) {
			var e = this.setFromMatrixColumn(t, 0).length(),
				i = this.setFromMatrixColumn(t, 1).length(),
				n = this.setFromMatrixColumn(t, 2).length();
			return this.x = e, this.y = i, this.z = n, this
		},
		setFromMatrixColumn: function(t, e) {
			return this.fromArray(t.elements, 4 * e)
		},
		equals: function(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y,
				t[e + 2] = this.z, t
		},
		fromBufferAttribute: function(t, e, i) {
			return void 0 !== i && console.warn(
					"THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t
				.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
		}
	}), Object.assign(o.prototype, {
		isMatrix3: !0,
		set: function(t, e, i, n, r, a, o, s, c) {
			var h = this.elements;
			return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[
				8] = c, this
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
		},
		clone: function() {
			return (new this.constructor).fromArray(this.elements)
		},
		copy: function(t) {
			var e = this.elements,
				i = t.elements;
			return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] =
				i[6], e[7] = i[7], e[8] = i[8], this
		},
		setFromMatrix4: function(t) {
			var e = t.elements;
			return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
		},
		applyToBufferAttribute: function() {
			var t = new a;
			return function(e) {
				for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e
					.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z);
				return e
			}
		}(),
		multiply: function(t) {
			return this.multiplyMatrices(this, t)
		},
		premultiply: function(t) {
			return this.multiplyMatrices(t, this)
		},
		multiplyMatrices: function(t, e) {
			var i = t.elements,
				n = e.elements,
				r = this.elements,
				a = i[0],
				o = i[3],
				s = i[6],
				c = i[1],
				h = i[4],
				l = i[7],
				u = i[2],
				p = i[5],
				d = i[8],
				f = n[0],
				m = n[3],
				g = n[6],
				v = n[1],
				y = n[4],
				x = n[7],
				b = n[2],
				_ = n[5],
				w = n[8];
			return r[0] = a * f + o * v + s * b, r[3] = a * m + o * y + s * _, r[6] = a * g + o * x +
				s * w, r[1] = c * f + h * v + l * b, r[4] = c * m + h * y + l * _, r[7] = c * g + h *
				x + l * w, r[2] = u * f + p * v + d * b, r[5] = u * m + p * y + d * _, r[8] = u * g +
				p * x + d * w, this
		},
		multiplyScalar: function(t) {
			var e = this.elements;
			return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *=
				t, e[8] *= t, this
		},
		determinant: function() {
			var t = this.elements,
				e = t[0],
				i = t[1],
				n = t[2],
				r = t[3],
				a = t[4],
				o = t[5],
				s = t[6],
				c = t[7],
				h = t[8];
			return e * a * h - e * o * c - i * r * h + i * o * s + n * r * c - n * a * s
		},
		getInverse: function(t, e) {
			t && t.isMatrix4 && console.error(
				"THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
			var i = t.elements,
				n = this.elements,
				r = i[0],
				a = i[1],
				o = i[2],
				s = i[3],
				c = i[4],
				h = i[5],
				l = i[6],
				u = i[7],
				p = i[8],
				d = p * c - h * u,
				f = h * l - p * s,
				m = u * s - c * l,
				g = r * d + a * f + o * m;
			if (0 === g) {
				var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
				if (e === !0) throw new Error(v);
				return console.warn(v), this.identity()
			}
			var y = 1 / g;
			return n[0] = d * y, n[1] = (o * u - p * a) * y, n[2] = (h * a - o * c) * y, n[3] = f * y,
				n[4] = (p * r - o * l) * y, n[5] = (o * s - h * r) * y, n[6] = m * y, n[7] = (a * l -
					u * r) * y, n[8] = (c * r - a * s) * y, this
		},
		transpose: function() {
			var t, e = this.elements;
			return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[
				7], e[7] = t, this
		},
		getNormalMatrix: function(t) {
			return this.setFromMatrix4(t).getInverse(this).transpose()
		},
		transposeIntoArray: function(t) {
			var e = this.elements;
			return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] =
				e[2], t[7] = e[5], t[8] = e[8], this
		},
		setUvTransform: function(t, e, i, n, r, a, o) {
			var s = Math.cos(r),
				c = Math.sin(r);
			this.set(i * s, i * c, -i * (s * a + c * o) + a + t, -n * c, n * s, -n * (-c * a + s * o) +
				o + e, 0, 0, 1)
		},
		scale: function(t, e) {
			var i = this.elements;
			return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
		},
		rotate: function(t) {
			var e = Math.cos(t),
				i = Math.sin(t),
				n = this.elements,
				r = n[0],
				a = n[3],
				o = n[6],
				s = n[1],
				c = n[4],
				h = n[7];
			return n[0] = e * r + i * s, n[3] = e * a + i * c, n[6] = e * o + i * h, n[1] = -i * r + e *
				s, n[4] = -i * a + e * c, n[7] = -i * o + e * h, this
		},
		translate: function(t, e) {
			var i = this.elements;
			return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e *
				i[5], i[7] += e * i[8], this
		},
		equals: function(t) {
			for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
				if (e[n] !== i[n]) return !1;
			return !0
		},
		fromArray: function(t, e) {
			void 0 === e && (e = 0);
			for (var i = 0; i < 9; i++) this.elements[i] = t[i + e];
			return this
		},
		toArray: function(t, e) {
			void 0 === t && (t = []), void 0 === e && (e = 0);
			var i = this.elements;
			return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[
				e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
		}
	});
	var Cs = 0;
	s.DEFAULT_IMAGE = void 0, s.DEFAULT_MAPPING = go, Object.defineProperty(s.prototype, "needsUpdate", {
			set: function(t) {
				t === !0 && this.version++
			}
		}), Object.assign(s.prototype, e.prototype, {
			constructor: s,
			isTexture: !0,
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this
					.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t
					.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format =
					t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat),
					this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t
					.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps,
					this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment =
					t.unpackAlignment, this.encoding = t.encoding, this
			},
			toJSON: function(t) {
				function e(t) {
					var e;
					if (t instanceof HTMLCanvasElement) e = t;
					else {
						e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), e.width = t
							.width, e.height = t.height;
						var i = e.getContext("2d");
						t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t
							.height)
					}
					return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL(
						"image/png")
				}
				var i = void 0 === t || "string" == typeof t;
				if (!i && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
				var n = {
					metadata: {
						version: 4.5,
						type: "Texture",
						generator: "Texture.toJSON"
					},
					uuid: this.uuid,
					name: this.name,
					mapping: this.mapping,
					repeat: [this.repeat.x, this.repeat.y],
					offset: [this.offset.x, this.offset.y],
					center: [this.center.x, this.center.y],
					rotation: this.rotation,
					wrap: [this.wrapS, this.wrapT],
					minFilter: this.minFilter,
					magFilter: this.magFilter,
					anisotropy: this.anisotropy,
					flipY: this.flipY
				};
				if (void 0 !== this.image) {
					var r = this.image;
					void 0 === r.uuid && (r.uuid = Ps.generateUUID()), i || void 0 !== t.images[r.uuid] || (
						t.images[r.uuid] = {
							uuid: r.uuid,
							url: e(r)
						}), n.image = r.uuid
				}
				return i || (t.textures[this.uuid] = n), n
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			},
			transformUv: function(t) {
				if (this.mapping === go) {
					if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
						case Eo:
							t.x = t.x - Math.floor(t.x);
							break;
						case To:
							t.x = t.x < 0 ? 0 : 1;
							break;
						case So:
							1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t
								.x - Math.floor(t.x)
					}
					if (t.y < 0 || t.y > 1) switch (this.wrapT) {
						case Eo:
							t.y = t.y - Math.floor(t.y);
							break;
						case To:
							t.y = t.y < 0 ? 0 : 1;
							break;
						case So:
							1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t
								.y - Math.floor(t.y)
					}
					this.flipY && (t.y = 1 - t.y)
				}
			}
		}), Object.assign(c.prototype, {
			isVector4: !0,
			set: function(t, e, i, n) {
				return this.x = t, this.y = e, this.z = i, this.w = n, this
			},
			setScalar: function(t) {
				return this.x = t, this.y = t, this.z = t, this.w = t, this
			},
			setX: function(t) {
				return this.x = t, this
			},
			setY: function(t) {
				return this.y = t, this
			},
			setZ: function(t) {
				return this.z = t, this
			},
			setW: function(t) {
				return this.w = t, this
			},
			setComponent: function(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					case 3:
						this.w = e;
						break;
					default:
						throw new Error("index is out of range: " + t)
				}
				return this
			},
			getComponent: function(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					case 3:
						return this.w;
					default:
						throw new Error("index is out of range: " + t)
				}
			},
			clone: function() {
				return new this.constructor(this.x, this.y, this.z, this.w)
			},
			copy: function(t) {
				return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
			},
			add: function(t, e) {
				return void 0 !== e ? (console.warn(
					"THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
				), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w +=
					t.w, this)
			},
			addScalar: function(t) {
				return this.x += t, this.y += t, this.z += t, this.w += t, this
			},
			addVectors: function(t, e) {
				return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
			},
			addScaledVector: function(t, e) {
				return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
			},
			sub: function(t, e) {
				return void 0 !== e ? (console.warn(
					"THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
				), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -=
					t.w, this)
			},
			subScalar: function(t) {
				return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
			},
			subVectors: function(t, e) {
				return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
			},
			multiplyScalar: function(t) {
				return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
			},
			applyMatrix4: function(t) {
				var e = this.x,
					i = this.y,
					n = this.z,
					r = this.w,
					a = t.elements;
				return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i +
					a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[
						3] * e + a[7] * i + a[11] * n + a[15] * r, this
			},
			divideScalar: function(t) {
				return this.multiplyScalar(1 / t)
			},
			setAxisAngleFromQuaternion: function(t) {
				this.w = 2 * Math.acos(t.w);
				var e = Math.sqrt(1 - t.w * t.w);
				return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y /
					e, this.z = t.z / e), this
			},
			setAxisAngleFromRotationMatrix: function(t) {
				var e, i, n, r, a = .01,
					o = .1,
					s = t.elements,
					c = s[0],
					h = s[4],
					l = s[8],
					u = s[1],
					p = s[5],
					d = s[9],
					f = s[2],
					m = s[6],
					g = s[10];
				if (Math.abs(h - u) < a && Math.abs(l - f) < a && Math.abs(d - m) < a) {
					if (Math.abs(h + u) < o && Math.abs(l + f) < o && Math.abs(d + m) < o && Math.abs(c +
							p + g - 3) < o) return this.set(1, 0, 0, 0), this;
					e = Math.PI;
					var v = (c + 1) / 2,
						y = (p + 1) / 2,
						x = (g + 1) / 2,
						b = (h + u) / 4,
						_ = (l + f) / 4,
						w = (d + m) / 4;
					return v > y && v > x ? v < a ? (i = 0, n = .707106781, r = .707106781) : (i = Math
							.sqrt(v), n = b / i, r = _ / i) : y > x ? y < a ? (i = .707106781, n = 0, r =
							.707106781) : (n = Math.sqrt(y), i = b / n, r = w / n) : x < a ? (i =
							.707106781, n = .707106781, r = 0) : (r = Math.sqrt(x), i = _ / r, n = w / r),
						this.set(i, n, r, e), this
				}
				var M = Math.sqrt((m - d) * (m - d) + (l - f) * (l - f) + (u - h) * (u - h));
				return Math.abs(M) < .001 && (M = 1), this.x = (m - d) / M, this.y = (l - f) / M, this.z = (
					u - h) / M, this.w = Math.acos((c + p + g - 1) / 2), this
			},
			min: function(t) {
				return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(
					this.z, t.z), this.w = Math.min(this.w, t.w), this
			},
			max: function(t) {
				return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(
					this.z, t.z), this.w = Math.max(this.w, t.w), this
			},
			clamp: function(t, e) {
				return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y,
					this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math
					.min(e.w, this.w)), this
			},
			clampScalar: function() {
				var t, e;
				return function(i, n) {
					return void 0 === t && (t = new c, e = new c), t.set(i, i, i, i), e.set(n, n, n, n),
						this.clamp(t, e)
				}
			}(),
			clampLength: function(t, e) {
				var i = this.length();
				return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
			},
			floor: function() {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this
					.z), this.w = Math.floor(this.w), this
			},
			ceil: function() {
				return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z),
					this.w = Math.ceil(this.w), this
			},
			round: function() {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this
					.z), this.w = Math.round(this.w), this
			},
			roundToZero: function() {
				return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ?
					Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math
					.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
			},
			negate: function() {
				return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
			},
			dot: function(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
			},
			lengthSq: function() {
				return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
			},
			length: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
			},
			manhattanLength: function() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
			},
			normalize: function() {
				return this.divideScalar(this.length() || 1)
			},
			setLength: function(t) {
				return this.normalize().multiplyScalar(t)
			},
			lerp: function(t, e) {
				return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this
					.z) * e, this.w += (t.w - this.w) * e, this
			},
			lerpVectors: function(t, e, i) {
				return this.subVectors(e, t).multiplyScalar(i).add(t)
			},
			equals: function(t) {
				return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
			},
			fromArray: function(t, e) {
				return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
					.w = t[e + 3], this
			},
			toArray: function(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y,
					t[e + 2] = this.z, t[e + 3] = this.w, t
			},
			fromBufferAttribute: function(t, e, i) {
				return void 0 !== i && console.warn(
						"THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t
					.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
			}
		}), Object.assign(h.prototype, e.prototype, {
			isWebGLRenderTarget: !0,
			setSize: function(t, e) {
				this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()),
					this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this
					.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t
					.stencilBuffer, this.depthTexture = t.depthTexture, this
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), l.prototype = Object.create(h.prototype), l.prototype.constructor = l, l.prototype
		.isWebGLRenderTargetCube = !0, u.prototype = Object.create(s.prototype), u.prototype.constructor = u, u
		.prototype.isDataTexture = !0, p.prototype = Object.create(s.prototype), p.prototype.constructor = p, p
		.prototype.isCubeTexture = !0, Object.defineProperty(p.prototype, "images", {
			get: function() {
				return this.image
			},
			set: function(t) {
				this.image = t
			}
		});
	var Is = new s,
		Us = new p,
		Ds = [],
		Os = [],
		Ns = new Float32Array(16),
		Fs = new Float32Array(9);
	k.prototype.setValue = function(t, e) {
		for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
			var a = i[n];
			a.setValue(t, e[a.id])
		}
	};
	var Bs = /([\w\d_]+)(\])?(\[|\.)?/g;
	X.prototype.setValue = function(t, e, i) {
		var n = this.map[e];
		void 0 !== n && n.setValue(t, i, this.renderer)
	}, X.prototype.setOptional = function(t, e, i) {
		var n = e[i];
		void 0 !== n && this.setValue(t, i, n)
	}, X.upload = function(t, e, i, n) {
		for (var r = 0, a = e.length; r !== a; ++r) {
			var o = e[r],
				s = i[o.id];
			s.needsUpdate !== !1 && o.setValue(t, s.value, n)
		}
	}, X.seqWithValue = function(t, e) {
		for (var i = [], n = 0, r = t.length; n !== r; ++n) {
			var a = t[n];
			a.id in e && i.push(a)
		}
		return i
	};
	var zs = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	};
	Object.assign(q.prototype, {
		isColor: !0,
		r: 1,
		g: 1,
		b: 1,
		set: function(t) {
			return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" ==
				typeof t && this.setStyle(t), this
		},
		setScalar: function(t) {
			return this.r = t, this.g = t, this.b = t, this
		},
		setHex: function(t) {
			return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255,
				this.b = (255 & t) / 255, this
		},
		setRGB: function(t, e, i) {
			return this.r = t, this.g = e, this.b = i, this
		},
		setHSL: function() {
			function t(t, e, i) {
				return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ?
					e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
			}
			return function(e, i, n) {
				if (e = Ps.euclideanModulo(e, 1), i = Ps.clamp(i, 0, 1), n = Ps.clamp(n, 0, 1),
					0 === i) this.r = this.g = this.b = n;
				else {
					var r = n <= .5 ? n * (1 + i) : n + i - n * i,
						a = 2 * n - r;
					this.r = t(a, r, e + 1 / 3), this.g = t(a, r, e), this.b = t(a, r, e - 1 / 3)
				}
				return this
			}
		}(),
		setStyle: function(t) {
			function e(e) {
				void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " +
					t + " will be ignored.")
			}
			var i;
			if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
				var n, r = i[1],
					a = i[2];
				switch (r) {
					case "rgb":
					case "rgba":
						if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
							return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(
								255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[
								3], 10)) / 255, e(n[5]), this;
						if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/
							.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g =
							Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100,
								parseInt(n[3], 10)) / 100, e(n[5]), this;
						break;
					case "hsl":
					case "hsla":
						if (n =
							/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/
							.exec(a)) {
							var o = parseFloat(n[1]) / 360,
								s = parseInt(n[2], 10) / 100,
								c = parseInt(n[3], 10) / 100;
							return e(n[5]), this.setHSL(o, s, c)
						}
				}
			} else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
				var h = i[1],
					l = h.length;
				if (3 === l) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g =
					parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h
						.charAt(2), 16) / 255, this;
				if (6 === l) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g =
					parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h
						.charAt(5), 16) / 255, this
			}
			if (t && t.length > 0) {
				var h = zs[t];
				void 0 !== h ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + t)
			}
			return this
		},
		clone: function() {
			return new this.constructor(this.r, this.g, this.b)
		},
		copy: function(t) {
			return this.r = t.r, this.g = t.g, this.b = t.b, this
		},
		copyGammaToLinear: function(t, e) {
			return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this
				.b = Math.pow(t.b, e), this
		},
		copyLinearToGamma: function(t, e) {
			void 0 === e && (e = 2);
			var i = e > 0 ? 1 / e : 1;
			return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
		},
		convertGammaToLinear: function() {
			var t = this.r,
				e = this.g,
				i = this.b;
			return this.r = t * t, this.g = e * e, this.b = i * i, this
		},
		convertLinearToGamma: function() {
			return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b),
				this
		},
		getHex: function() {
			return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
		},
		getHexString: function() {
			return ("000000" + this.getHex().toString(16)).slice(-6)
		},
		getHSL: function(t) {
			var e, i, n = t || {
					h: 0,
					s: 0,
					l: 0
				},
				r = this.r,
				a = this.g,
				o = this.b,
				s = Math.max(r, a, o),
				c = Math.min(r, a, o),
				h = (c + s) / 2;
			if (c === s) e = 0, i = 0;
			else {
				var l = s - c;
				switch (i = h <= .5 ? l / (s + c) : l / (2 - s - c), s) {
					case r:
						e = (a - o) / l + (a < o ? 6 : 0);
						break;
					case a:
						e = (o - r) / l + 2;
						break;
					case o:
						e = (r - a) / l + 4
				}
				e /= 6
			}
			return n.h = e, n.s = i, n.l = h, n
		},
		getStyle: function() {
			return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) +
				")"
		},
		offsetHSL: function(t, e, i) {
			var n = this.getHSL();
			return n.h += t, n.s += e, n.l += i, this.setHSL(n.h, n.s, n.l), this
		},
		add: function(t) {
			return this.r += t.r, this.g += t.g, this.b += t.b, this
		},
		addColors: function(t, e) {
			return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
		},
		addScalar: function(t) {
			return this.r += t, this.g += t, this.b += t, this
		},
		sub: function(t) {
			return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math
				.max(0, this.b - t.b), this
		},
		multiply: function(t) {
			return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
		},
		multiplyScalar: function(t) {
			return this.r *= t, this.g *= t, this.b *= t, this
		},
		lerp: function(t, e) {
			return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this
				.b) * e, this
		},
		equals: function(t) {
			return t.r === this.r && t.g === this.g && t.b === this.b
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g,
				t[e + 2] = this.b, t
		},
		toJSON: function() {
			return this.getHex()
		}
	});
	var Gs = {
			common: {
				diffuse: {
					value: new q(15658734)
				},
				opacity: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new o
				},
				alphaMap: {
					value: null
				}
			},
			specularmap: {
				specularMap: {
					value: null
				}
			},
			envmap: {
				envMap: {
					value: null
				},
				flipEnvMap: {
					value: -1
				},
				reflectivity: {
					value: 1
				},
				refractionRatio: {
					value: .98
				}
			},
			aomap: {
				aoMap: {
					value: null
				},
				aoMapIntensity: {
					value: 1
				}
			},
			lightmap: {
				lightMap: {
					value: null
				},
				lightMapIntensity: {
					value: 1
				}
			},
			emissivemap: {
				emissiveMap: {
					value: null
				}
			},
			bumpmap: {
				bumpMap: {
					value: null
				},
				bumpScale: {
					value: 1
				}
			},
			normalmap: {
				normalMap: {
					value: null
				},
				normalScale: {
					value: new i(1, 1)
				}
			},
			displacementmap: {
				displacementMap: {
					value: null
				},
				displacementScale: {
					value: 1
				},
				displacementBias: {
					value: 0
				}
			},
			roughnessmap: {
				roughnessMap: {
					value: null
				}
			},
			metalnessmap: {
				metalnessMap: {
					value: null
				}
			},
			gradientmap: {
				gradientMap: {
					value: null
				}
			},
			fog: {
				fogDensity: {
					value: 25e-5
				},
				fogNear: {
					value: 1
				},
				fogFar: {
					value: 2e3
				},
				fogColor: {
					value: new q(16777215)
				}
			},
			lights: {
				ambientLightColor: {
					value: []
				},
				directionalLights: {
					value: [],
					properties: {
						direction: {},
						color: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				directionalShadowMap: {
					value: []
				},
				directionalShadowMatrix: {
					value: []
				},
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				spotShadowMap: {
					value: []
				},
				spotShadowMatrix: {
					value: []
				},
				pointLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						decay: {},
						distance: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {}
					}
				},
				pointShadowMap: {
					value: []
				},
				pointShadowMatrix: {
					value: []
				},
				hemisphereLights: {
					value: [],
					properties: {
						direction: {},
						skyColor: {},
						groundColor: {}
					}
				},
				rectAreaLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						width: {},
						height: {}
					}
				}
			},
			points: {
				diffuse: {
					value: new q(15658734)
				},
				opacity: {
					value: 1
				},
				size: {
					value: 1
				},
				scale: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new o
				}
			}
		},
		Hs = {
			merge: function(t) {
				for (var e = {}, i = 0; i < t.length; i++) {
					var n = this.clone(t[i]);
					for (var r in n) e[r] = n[r]
				}
				return e
			},
			clone: function(t) {
				var e = {};
				for (var i in t) {
					e[i] = {};
					for (var n in t[i]) {
						var r = t[i][n];
						r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r
								.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] =
							r.slice() : e[i][n] = r
					}
				}
				return e
			}
		},
		Vs = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
		ks = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
		js = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
		Ws =
		"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
		Xs = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
		qs = "\nvec3 transformed = vec3( position );\n",
		Ys = "\nvec3 objectNormal = vec3( normal );\n",
		Zs =
		"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
		Js =
		"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
		Qs =
		"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
		Ks =
		"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
		$s =
		"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
		tc =
		"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
		ec = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
		ic = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
		nc = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
		rc = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
		ac =
		"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
		oc =
		"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
		sc =
		"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
		cc =
		"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
		hc =
		"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
		lc =
		"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
		uc = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
		pc = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
		dc =
		"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
		fc =
		"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
		mc =
		"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
		gc =
		"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
		vc =
		"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
		yc = "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
		xc = "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
		bc =
		"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
		_c =
		"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
		wc =
		"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
		Mc =
		"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
		Ec = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
		Tc =
		"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
		Sc =
		"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
		Ac =
		"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
		Rc =
		"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
		Lc =
		"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
		Pc =
		"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
		Cc =
		"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
		Ic =
		"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
		Uc =
		"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
		Dc =
		"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
		Oc =
		"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
		Nc =
		"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
		Fc = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
		Bc =
		"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
		zc = "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
		Gc =
		"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
		Hc = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
		Vc =
		"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
		kc =
		"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
		jc =
		"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
		Wc =
		"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
		Xc =
		"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
		qc =
		"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
		Yc = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
		Zc =
		"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
		Jc = "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
		Qc =
		"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
		Kc =
		"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
		$c = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
		th =
		"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
		eh =
		"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
		ih =
		"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
		nh =
		"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
		rh =
		"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
		ah =
		"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
		oh =
		"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
		sh =
		"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
		ch =
		"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
		hh = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
		lh = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
		uh =
		"#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
		ph =
		"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
		dh =
		"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
		fh =
		"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
		mh = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
		gh =
		"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
		vh = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
		yh =
		"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
		xh =
		"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
		bh =
		"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
		_h =
		"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
		wh =
		"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
		Mh =
		"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
		Eh =
		"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
		Th =
		"uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
		Sh =
		"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
		Ah =
		"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
		Rh =
		"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
		Lh =
		"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
		Ph =
		"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
		Ch =
		"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
		Ih =
		"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
		Uh =
		"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
		Dh =
		"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
		Oh =
		"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
		Nh =
		"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
		Fh =
		"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
		Bh =
		"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
		zh =
		"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
		Gh =
		"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
		Hh =
		"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
		Vh =
		"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
		kh = {
			alphamap_fragment: Vs,
			alphamap_pars_fragment: ks,
			alphatest_fragment: js,
			aomap_fragment: Ws,
			aomap_pars_fragment: Xs,
			begin_vertex: qs,
			beginnormal_vertex: Ys,
			bsdfs: Zs,
			bumpmap_pars_fragment: Js,
			clipping_planes_fragment: Qs,
			clipping_planes_pars_fragment: Ks,
			clipping_planes_pars_vertex: $s,
			clipping_planes_vertex: tc,
			color_fragment: ec,
			color_pars_fragment: ic,
			color_pars_vertex: nc,
			color_vertex: rc,
			common: ac,
			cube_uv_reflection_fragment: oc,
			defaultnormal_vertex: sc,
			displacementmap_pars_vertex: cc,
			displacementmap_vertex: hc,
			emissivemap_fragment: lc,
			emissivemap_pars_fragment: uc,
			encodings_fragment: pc,
			encodings_pars_fragment: dc,
			envmap_fragment: fc,
			envmap_pars_fragment: mc,
			envmap_pars_vertex: gc,
			envmap_vertex: vc,
			fog_vertex: yc,
			fog_pars_vertex: xc,
			fog_fragment: bc,
			fog_pars_fragment: _c,
			gradientmap_pars_fragment: wc,
			lightmap_fragment: Mc,
			lightmap_pars_fragment: Ec,
			lights_lambert_vertex: Tc,
			lights_pars: Sc,
			lights_phong_fragment: Ac,
			lights_phong_pars_fragment: Rc,
			lights_physical_fragment: Lc,
			lights_physical_pars_fragment: Pc,
			lights_template: Cc,
			logdepthbuf_fragment: Ic,
			logdepthbuf_pars_fragment: Uc,
			logdepthbuf_pars_vertex: Dc,
			logdepthbuf_vertex: Oc,
			map_fragment: Nc,
			map_pars_fragment: Fc,
			map_particle_fragment: Bc,
			map_particle_pars_fragment: zc,
			metalnessmap_fragment: Gc,
			metalnessmap_pars_fragment: Hc,
			morphnormal_vertex: Vc,
			morphtarget_pars_vertex: kc,
			morphtarget_vertex: jc,
			normal_fragment: Wc,
			normalmap_pars_fragment: Xc,
			packing: qc,
			premultiplied_alpha_fragment: Yc,
			project_vertex: Zc,
			dithering_fragment: Jc,
			dithering_pars_fragment: Qc,
			roughnessmap_fragment: Kc,
			roughnessmap_pars_fragment: $c,
			shadowmap_pars_fragment: th,
			shadowmap_pars_vertex: eh,
			shadowmap_vertex: ih,
			shadowmask_pars_fragment: nh,
			skinbase_vertex: rh,
			skinning_pars_vertex: ah,
			skinning_vertex: oh,
			skinnormal_vertex: sh,
			specularmap_fragment: ch,
			specularmap_pars_fragment: hh,
			tonemapping_fragment: lh,
			tonemapping_pars_fragment: uh,
			uv_pars_fragment: ph,
			uv_pars_vertex: dh,
			uv_vertex: fh,
			uv2_pars_fragment: mh,
			uv2_pars_vertex: gh,
			uv2_vertex: vh,
			worldpos_vertex: yh,
			cube_frag: xh,
			cube_vert: bh,
			depth_frag: _h,
			depth_vert: wh,
			distanceRGBA_frag: Mh,
			distanceRGBA_vert: Eh,
			equirect_frag: Th,
			equirect_vert: Sh,
			linedashed_frag: Ah,
			linedashed_vert: Rh,
			meshbasic_frag: Lh,
			meshbasic_vert: Ph,
			meshlambert_frag: Ch,
			meshlambert_vert: Ih,
			meshphong_frag: Uh,
			meshphong_vert: Dh,
			meshphysical_frag: Oh,
			meshphysical_vert: Nh,
			normal_frag: Fh,
			normal_vert: Bh,
			points_frag: zh,
			points_vert: Gh,
			shadow_frag: Hh,
			shadow_vert: Vh
		},
		jh = {
			basic: {
				uniforms: Hs.merge([Gs.common, Gs.specularmap, Gs.envmap, Gs.aomap, Gs.lightmap, Gs.fog]),
				vertexShader: kh.meshbasic_vert,
				fragmentShader: kh.meshbasic_frag
			},
			lambert: {
				uniforms: Hs.merge([Gs.common, Gs.specularmap, Gs.envmap, Gs.aomap, Gs.lightmap, Gs.emissivemap, Gs
					.fog, Gs.lights, {
						emissive: {
							value: new q(0)
						}
					}
				]),
				vertexShader: kh.meshlambert_vert,
				fragmentShader: kh.meshlambert_frag
			},
			phong: {
				uniforms: Hs.merge([Gs.common, Gs.specularmap, Gs.envmap, Gs.aomap, Gs.lightmap, Gs.emissivemap, Gs
					.bumpmap, Gs.normalmap, Gs.displacementmap, Gs.gradientmap, Gs.fog, Gs.lights, {
						emissive: {
							value: new q(0)
						},
						specular: {
							value: new q(1118481)
						},
						shininess: {
							value: 30
						}
					}
				]),
				vertexShader: kh.meshphong_vert,
				fragmentShader: kh.meshphong_frag
			},
			standard: {
				uniforms: Hs.merge([Gs.common, Gs.envmap, Gs.aomap, Gs.lightmap, Gs.emissivemap, Gs.bumpmap, Gs
					.normalmap, Gs.displacementmap, Gs.roughnessmap, Gs.metalnessmap, Gs.fog, Gs.lights, {
						emissive: {
							value: new q(0)
						},
						roughness: {
							value: .5
						},
						metalness: {
							value: .5
						},
						envMapIntensity: {
							value: 1
						}
					}
				]),
				vertexShader: kh.meshphysical_vert,
				fragmentShader: kh.meshphysical_frag
			},
			points: {
				uniforms: Hs.merge([Gs.points, Gs.fog]),
				vertexShader: kh.points_vert,
				fragmentShader: kh.points_frag
			},
			dashed: {
				uniforms: Hs.merge([Gs.common, Gs.fog, {
					scale: {
						value: 1
					},
					dashSize: {
						value: 1
					},
					totalSize: {
						value: 2
					}
				}]),
				vertexShader: kh.linedashed_vert,
				fragmentShader: kh.linedashed_frag
			},
			depth: {
				uniforms: Hs.merge([Gs.common, Gs.displacementmap]),
				vertexShader: kh.depth_vert,
				fragmentShader: kh.depth_frag
			},
			normal: {
				uniforms: Hs.merge([Gs.common, Gs.bumpmap, Gs.normalmap, Gs.displacementmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: kh.normal_vert,
				fragmentShader: kh.normal_frag
			},
			cube: {
				uniforms: {
					tCube: {
						value: null
					},
					tFlip: {
						value: -1
					},
					opacity: {
						value: 1
					}
				},
				vertexShader: kh.cube_vert,
				fragmentShader: kh.cube_frag
			},
			equirect: {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: kh.equirect_vert,
				fragmentShader: kh.equirect_frag
			},
			distanceRGBA: {
				uniforms: Hs.merge([Gs.common, Gs.displacementmap, {
					referencePosition: {
						value: new a
					},
					nearDistance: {
						value: 1
					},
					farDistance: {
						value: 1e3
					}
				}]),
				vertexShader: kh.distanceRGBA_vert,
				fragmentShader: kh.distanceRGBA_frag
			},
			shadow: {
				uniforms: Hs.merge([Gs.lights, Gs.fog, {
					color: {
						value: new q(0)
					},
					opacity: {
						value: 1
					}
				}]),
				vertexShader: kh.shadow_vert,
				fragmentShader: kh.shadow_frag
			}
		};
	jh.physical = {
		uniforms: Hs.merge([jh.standard.uniforms, {
			clearCoat: {
				value: 0
			},
			clearCoatRoughness: {
				value: 0
			}
		}]),
		vertexShader: kh.meshphysical_vert,
		fragmentShader: kh.meshphysical_frag
	}, Object.assign(Y.prototype, {
		set: function(t, e) {
			return this.min.copy(t), this.max.copy(e), this
		},
		setFromPoints: function(t) {
			this.makeEmpty();
			for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
			return this
		},
		setFromCenterAndSize: function() {
			var t = new i;
			return function(e, i) {
				var n = t.copy(i).multiplyScalar(.5);
				return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
			}
		}(),
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this
		},
		makeEmpty: function() {
			return this.min.x = this.min.y = +(1 / 0), this.max.x = this.max.y = -(1 / 0), this
		},
		isEmpty: function() {
			return this.max.x < this.min.x || this.max.y < this.min.y
		},
		getCenter: function(t) {
			var e = t || new i;
			return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
		},
		getSize: function(t) {
			var e = t || new i;
			return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
		},
		expandByPoint: function(t) {
			return this.min.min(t), this.max.max(t), this
		},
		expandByVector: function(t) {
			return this.min.sub(t), this.max.add(t), this
		},
		expandByScalar: function(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this
		},
		containsPoint: function(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
		},
		containsBox: function(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <=
				this.max.y
		},
		getParameter: function(t, e) {
			var n = e || new i;
			return n.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max
				.y - this.min.y))
		},
		intersectsBox: function(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y >
				this.max.y)
		},
		clampPoint: function(t, e) {
			var n = e || new i;
			return n.copy(t).clamp(this.min, this.max)
		},
		distanceToPoint: function() {
			var t = new i;
			return function(e) {
				var i = t.copy(e).clamp(this.min, this.max);
				return i.sub(e).length()
			}
		}(),
		intersect: function(t) {
			return this.min.max(t.min), this.max.min(t.max), this
		},
		union: function(t) {
			return this.min.min(t.min), this.max.max(t.max), this
		},
		translate: function(t) {
			return this.min.add(t), this.max.add(t), this
		},
		equals: function(t) {
			return t.min.equals(this.min) && t.max.equals(this.max)
		}
	}), J.prototype = Object.create(s.prototype), J.prototype.constructor = J;
	var Wh = 0;
	Object.assign(K.prototype, e.prototype, {
			isMaterial: !0,
			onBeforeCompile: function() {},
			setValues: function(t) {
				if (void 0 !== t)
					for (var e in t) {
						var i = t[e];
						if (void 0 !== i)
							if ("shading" !== e) {
								var n = this[e];
								void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i
									.isVector3 ? n.copy(i) : "overdraw" === e ? this[e] = Number(i) : this[
										e] = i : console.warn("THREE." + this.type + ": '" + e +
										"' is not a property of this material.")
							} else console.warn("THREE." + this.type +
									": .shading has been removed. Use the boolean .flatShading instead."),
								this.flatShading = i === Sa;
						else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
					}
			},
			toJSON: function(t) {
				function e(t) {
					var e = [];
					for (var i in t) {
						var n = t[i];
						delete n.metadata, e.push(n)
					}
					return e
				}
				var i = void 0 === t || "string" == typeof t;
				i && (t = {
					textures: {},
					images: {}
				});
				var n = {
					metadata: {
						version: 4.5,
						type: "Material",
						generator: "Material.toJSON"
					}
				};
				if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this
					.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this
					.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n
						.metalness = this.metalness), this.emissive && this.emissive.isColor && (n
						.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (n
						.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular
					.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n
						.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this
						.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this
						.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(t)
						.uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap
						.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this
						.lightMap.toJSON(t).uuid), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap =
						this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this
					.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalScale =
						this.normalScale.toArray()), this.displacementMap && this.displacementMap
					.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n
						.displacementScale = this.displacementScale, n.displacementBias = this
						.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n
						.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this
					.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this
					.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(
						t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this
						.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap =
						this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity), this.gradientMap &&
					this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
					void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n
						.sizeAttenuation = this.sizeAttenuation), this.blending !== Ia && (n.blending = this
						.blending), this.flatShading === !0 && (n.flatShading = this.flatShading), this
					.side !== Ma && (n.side = this.side), this.vertexColors !== Ra && (n.vertexColors = this
						.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), this.transparent ===
					!0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest =
					this.depthTest, n.depthWrite = this.depthWrite, 0 !== this.rotation && (n.rotation =
						this.rotation), 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !==
					this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize =
						this.gapSize), void 0 !== this.scale && (n.scale = this.scale), this.dithering === !
					0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this
					.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this
					.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n
						.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap &&
					(n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n
						.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (n
						.morphTargets = !0), this.skinning === !0 && (n.skinning = !0), this.visible === !
					1 && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this
						.userData), i) {
					var r = e(t.textures),
						a = e(t.images);
					r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a)
				}
				return n
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending,
					this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t
					.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this
					.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t
					.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t
					.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t
					.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this
					.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t
					.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this
					.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this
					.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this
					.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON
						.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t
					.clipIntersection;
				var e = t.clippingPlanes,
					i = null;
				if (null !== e) {
					var n = e.length;
					i = new Array(n);
					for (var r = 0; r !== n; ++r) i[r] = e[r].clone()
				}
				return this.clippingPlanes = i, this
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), $.prototype = Object.create(K.prototype), $.prototype.constructor = $, $.prototype
		.isMeshDepthMaterial = !0, $.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning,
				this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this
				.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this
				.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t
				.wireframeLinewidth, this
		}, tt.prototype = Object.create(K.prototype), tt.prototype.constructor = tt, tt.prototype
		.isMeshDistanceMaterial = !0, tt.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this
				.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this
				.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap =
				t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t
				.displacementBias, this
		}, Object.assign(et.prototype, {
			isBox3: !0,
			set: function(t, e) {
				return this.min.copy(t), this.max.copy(e), this
			},
			setFromArray: function(t) {
				for (var e = +(1 / 0), i = +(1 / 0), n = +(1 / 0), r = -(1 / 0), a = -(1 / 0), o = -(1 / 0),
						s = 0, c = t.length; s < c; s += 3) {
					var h = t[s],
						l = t[s + 1],
						u = t[s + 2];
					h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a =
						l), u > o && (o = u)
				}
				return this.min.set(e, i, n), this.max.set(r, a, o), this
			},
			setFromBufferAttribute: function(t) {
				for (var e = +(1 / 0), i = +(1 / 0), n = +(1 / 0), r = -(1 / 0), a = -(1 / 0), o = -(1 / 0),
						s = 0, c = t.count; s < c; s++) {
					var h = t.getX(s),
						l = t.getY(s),
						u = t.getZ(s);
					h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a =
						l), u > o && (o = u)
				}
				return this.min.set(e, i, n), this.max.set(r, a, o), this
			},
			setFromPoints: function(t) {
				this.makeEmpty();
				for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
				return this
			},
			setFromCenterAndSize: function() {
				var t = new a;
				return function(e, i) {
					var n = t.copy(i).multiplyScalar(.5);
					return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
				}
			}(),
			setFromObject: function(t) {
				return this.makeEmpty(), this.expandByObject(t)
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.min.copy(t.min), this.max.copy(t.max), this
			},
			makeEmpty: function() {
				return this.min.x = this.min.y = this.min.z = +(1 / 0), this.max.x = this.max.y = this.max
					.z = -(1 / 0), this
			},
			isEmpty: function() {
				return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
			},
			getCenter: function(t) {
				var e = t || new a;
				return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
			},
			getSize: function(t) {
				var e = t || new a;
				return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
			},
			expandByPoint: function(t) {
				return this.min.min(t), this.max.max(t), this
			},
			expandByVector: function(t) {
				return this.min.sub(t), this.max.add(t), this
			},
			expandByScalar: function(t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this
			},
			expandByObject: function() {
				function t(t) {
					var a = t.geometry;
					if (void 0 !== a)
						if (a.isGeometry) {
							var o = a.vertices;
							for (i = 0, n = o.length; i < n; i++) r.copy(o[i]), r.applyMatrix4(t
								.matrixWorld), e.expandByPoint(r)
						} else if (a.isBufferGeometry) {
						var s = a.attributes.position;
						if (void 0 !== s)
							for (i = 0, n = s.count; i < n; i++) r.fromBufferAttribute(s, i).applyMatrix4(t
								.matrixWorld), e.expandByPoint(r)
					}
				}
				var e, i, n, r = new a;
				return function(i) {
					return e = this, i.updateMatrixWorld(!0), i.traverse(t), this
				}
			}(),
			containsPoint: function(t) {
				return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t
					.z < this.min.z || t.z > this.max.z)
			},
			containsBox: function(t) {
				return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <=
					this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
			},
			getParameter: function(t, e) {
				var i = e || new a;
				return i.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max
					.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
			},
			intersectsBox: function(t) {
				return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y >
					this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
			},
			intersectsSphere: function() {
				var t = new a;
				return function(e) {
					return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e
						.radius
				}
			}(),
			intersectsPlane: function(t) {
				var e, i;
				return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t
					.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t
					.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max
					.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z,
					i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z *
					this.min.z), e <= t.constant && i >= t.constant
			},
			clampPoint: function(t, e) {
				var i = e || new a;
				return i.copy(t).clamp(this.min, this.max)
			},
			distanceToPoint: function() {
				var t = new a;
				return function(e) {
					var i = t.copy(e).clamp(this.min, this.max);
					return i.sub(e).length()
				}
			}(),
			getBoundingSphere: function() {
				var t = new a;
				return function(e) {
					var i = e || new it;
					return this.getCenter(i.center), i.radius = .5 * this.getSize(t).length(), i
				}
			}(),
			intersect: function(t) {
				return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
			},
			union: function(t) {
				return this.min.min(t.min), this.max.max(t.max), this
			},
			applyMatrix4: function() {
				var t = [new a, new a, new a, new a, new a, new a, new a, new a];
				return function(e) {
					return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z)
						.applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(
							e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3]
						.set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max
							.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this
							.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y,
							this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max
							.z).applyMatrix4(e), this.setFromPoints(t), this)
				}
			}(),
			translate: function(t) {
				return this.min.add(t), this.max.add(t), this
			},
			equals: function(t) {
				return t.min.equals(this.min) && t.max.equals(this.max)
			}
		}), Object.assign(it.prototype, {
			set: function(t, e) {
				return this.center.copy(t), this.radius = e, this
			},
			setFromPoints: function() {
				var t = new et;
				return function(e, i) {
					var n = this.center;
					void 0 !== i ? n.copy(i) : t.setFromPoints(e).getCenter(n);
					for (var r = 0, a = 0, o = e.length; a < o; a++) r = Math.max(r, n
						.distanceToSquared(e[a]));
					return this.radius = Math.sqrt(r), this
				}
			}(),
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.center.copy(t.center), this.radius = t.radius, this
			},
			empty: function() {
				return this.radius <= 0
			},
			containsPoint: function(t) {
				return t.distanceToSquared(this.center) <= this.radius * this.radius
			},
			distanceToPoint: function(t) {
				return t.distanceTo(this.center) - this.radius
			},
			intersectsSphere: function(t) {
				var e = this.radius + t.radius;
				return t.center.distanceToSquared(this.center) <= e * e
			},
			intersectsBox: function(t) {
				return t.intersectsSphere(this)
			},
			intersectsPlane: function(t) {
				return Math.abs(t.distanceToPoint(this.center)) <= this.radius
			},
			clampPoint: function(t, e) {
				var i = this.center.distanceToSquared(t),
					n = e || new a;
				return n.copy(t), i > this.radius * this.radius && (n.sub(this.center).normalize(), n
					.multiplyScalar(this.radius).add(this.center)), n
			},
			getBoundingBox: function(t) {
				var e = t || new et;
				return e.set(this.center, this.center), e.expandByScalar(this.radius), e
			},
			applyMatrix4: function(t) {
				return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
			},
			translate: function(t) {
				return this.center.add(t), this
			},
			equals: function(t) {
				return t.center.equals(this.center) && t.radius === this.radius
			}
		}), Object.assign(nt.prototype, {
			set: function(t, e) {
				return this.normal.copy(t), this.constant = e, this
			},
			setComponents: function(t, e, i, n) {
				return this.normal.set(t, e, i), this.constant = n, this
			},
			setFromNormalAndCoplanarPoint: function(t, e) {
				return this.normal.copy(t), this.constant = -e.dot(this.normal), this
			},
			setFromCoplanarPoints: function() {
				var t = new a,
					e = new a;
				return function(i, n, r) {
					var a = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize();
					return this.setFromNormalAndCoplanarPoint(a, i), this
				}
			}(),
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.normal.copy(t.normal), this.constant = t.constant, this
			},
			normalize: function() {
				var t = 1 / this.normal.length();
				return this.normal.multiplyScalar(t), this.constant *= t, this
			},
			negate: function() {
				return this.constant *= -1, this.normal.negate(), this
			},
			distanceToPoint: function(t) {
				return this.normal.dot(t) + this.constant
			},
			distanceToSphere: function(t) {
				return this.distanceToPoint(t.center) - t.radius
			},
			projectPoint: function(t, e) {
				var i = e || new a;
				return i.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
			},
			intersectLine: function() {
				var t = new a;
				return function(e, i) {
					var n = i || new a,
						r = e.delta(t),
						o = this.normal.dot(r);
					if (0 !== o) {
						var s = -(e.start.dot(this.normal) + this.constant) / o;
						if (!(s < 0 || s > 1)) return n.copy(r).multiplyScalar(s).add(e.start)
					} else if (0 === this.distanceToPoint(e.start)) return n.copy(e.start)
				}
			}(),
			intersectsLine: function(t) {
				var e = this.distanceToPoint(t.start),
					i = this.distanceToPoint(t.end);
				return e < 0 && i > 0 || i < 0 && e > 0
			},
			intersectsBox: function(t) {
				return t.intersectsPlane(this)
			},
			intersectsSphere: function(t) {
				return t.intersectsPlane(this)
			},
			coplanarPoint: function(t) {
				var e = t || new a;
				return e.copy(this.normal).multiplyScalar(-this.constant)
			},
			applyMatrix4: function() {
				var t = new a,
					e = new o;
				return function(i, n) {
					var r = n || e.getNormalMatrix(i),
						a = this.coplanarPoint(t).applyMatrix4(i),
						o = this.normal.applyMatrix3(r).normalize();
					return this.constant = -a.dot(o), this
				}
			}(),
			translate: function(t) {
				return this.constant -= t.dot(this.normal), this
			},
			equals: function(t) {
				return t.normal.equals(this.normal) && t.constant === this.constant
			}
		}), Object.assign(rt.prototype, {
			set: function(t, e, i, n, r, a) {
				var o = this.planes;
				return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a),
					this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
				return this
			},
			setFromMatrix: function(t) {
				var e = this.planes,
					i = t.elements,
					n = i[0],
					r = i[1],
					a = i[2],
					o = i[3],
					s = i[4],
					c = i[5],
					h = i[6],
					l = i[7],
					u = i[8],
					p = i[9],
					d = i[10],
					f = i[11],
					m = i[12],
					g = i[13],
					v = i[14],
					y = i[15];
				return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n,
						l + s, f + u, y + m).normalize(), e[2].setComponents(o + r, l + c, f + p, y + g)
					.normalize(), e[3].setComponents(o - r, l - c, f - p, y - g).normalize(), e[4]
					.setComponents(o - a, l - h, f - d, y - v).normalize(), e[5].setComponents(o + a, l + h,
						f + d, y + v).normalize(), this
			},
			intersectsObject: function() {
				var t = new it;
				return function(e) {
					var i = e.geometry;
					return null === i.boundingSphere && i.computeBoundingSphere(), t.copy(i
						.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
				}
			}(),
			intersectsSprite: function() {
				var t = new it;
				return function(e) {
					return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e
						.matrixWorld), this.intersectsSphere(t)
				}
			}(),
			intersectsSphere: function(t) {
				for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
					var a = e[r].distanceToPoint(i);
					if (a < n) return !1
				}
				return !0
			},
			intersectsBox: function() {
				var t = new a,
					e = new a;
				return function(i) {
					for (var n = this.planes, r = 0; r < 6; r++) {
						var a = n[r];
						t.x = a.normal.x > 0 ? i.min.x : i.max.x, e.x = a.normal.x > 0 ? i.max.x : i.min
							.x, t.y = a.normal.y > 0 ? i.min.y : i.max.y, e.y = a.normal.y > 0 ? i.max
							.y : i.min.y, t.z = a.normal.z > 0 ? i.min.z : i.max.z, e.z = a.normal.z >
							0 ? i.max.z : i.min.z;
						var o = a.distanceToPoint(t),
							s = a.distanceToPoint(e);
						if (o < 0 && s < 0) return !1
					}
					return !0
				}
			}(),
			containsPoint: function(t) {
				for (var e = this.planes, i = 0; i < 6; i++)
					if (e[i].distanceToPoint(t) < 0) return !1;
				return !0
			}
		}), st.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], st.DefaultOrder = "XYZ", Object
		.defineProperties(st.prototype, {
			x: {
				get: function() {
					return this._x
				},
				set: function(t) {
					this._x = t, this.onChangeCallback()
				}
			},
			y: {
				get: function() {
					return this._y
				},
				set: function(t) {
					this._y = t, this.onChangeCallback()
				}
			},
			z: {
				get: function() {
					return this._z
				},
				set: function(t) {
					this._z = t, this.onChangeCallback()
				}
			},
			order: {
				get: function() {
					return this._order
				},
				set: function(t) {
					this._order = t, this.onChangeCallback()
				}
			}
		}), Object.assign(st.prototype, {
			isEuler: !0,
			set: function(t, e, i, n) {
				return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this
					.onChangeCallback(), this
			},
			clone: function() {
				return new this.constructor(this._x, this._y, this._z, this._order)
			},
			copy: function(t) {
				return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this
					.onChangeCallback(), this
			},
			setFromRotationMatrix: function(t, e, i) {
				var n = Ps.clamp,
					r = t.elements,
					a = r[0],
					o = r[4],
					s = r[8],
					c = r[1],
					h = r[5],
					l = r[9],
					u = r[2],
					p = r[6],
					d = r[10];
				return e = e || this._order, "XYZ" === e ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) <
						.99999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-o, a)) : (this._x =
							Math.atan2(p, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1,
						1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c,
						h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === e ? (this._x = Math
						.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z =
							Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ?
					(this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d),
						this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) :
					"YZX" === e ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math
						.atan2(-l, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math
						.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) <
						.99999 ? (this._x = Math.atan2(p, h), this._y = Math.atan2(s, a)) : (this._x = Math
							.atan2(-l, d), this._y = 0)) : console.warn(
						"THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this
					._order = e, i !== !1 && this.onChangeCallback(), this
			},
			setFromQuaternion: function() {
				var t = new n;
				return function(e, i, n) {
					return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, n)
				}
			}(),
			setFromVector3: function(t, e) {
				return this.set(t.x, t.y, t.z, e || this._order)
			},
			reorder: function() {
				var t = new r;
				return function(e) {
					return t.setFromEuler(this), this.setFromQuaternion(t, e)
				}
			}(),
			equals: function(t) {
				return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
			},
			fromArray: function(t) {
				return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[
					3]), this.onChangeCallback(), this
			},
			toArray: function(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this
					._y, t[e + 2] = this._z, t[e + 3] = this._order, t
			},
			toVector3: function(t) {
				return t ? t.set(this._x, this._y, this._z) : new a(this._x, this._y, this._z)
			},
			onChange: function(t) {
				return this.onChangeCallback = t, this
			},
			onChangeCallback: function() {}
		}), Object.assign(ct.prototype, {
			set: function(t) {
				this.mask = 1 << t | 0
			},
			enable: function(t) {
				this.mask |= 1 << t | 0
			},
			toggle: function(t) {
				this.mask ^= 1 << t | 0
			},
			disable: function(t) {
				this.mask &= ~(1 << t | 0)
			},
			test: function(t) {
				return 0 !== (this.mask & t.mask)
			}
		});
	var Xh = 0;
	ht.DefaultUp = new a(0, 1, 0), ht.DefaultMatrixAutoUpdate = !0, Object.assign(ht.prototype, e.prototype, {
		isObject3D: !0,
		onBeforeRender: function() {},
		onAfterRender: function() {},
		applyMatrix: function(t) {
			this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this
				.quaternion, this.scale)
		},
		applyQuaternion: function(t) {
			return this.quaternion.premultiply(t), this
		},
		setRotationFromAxisAngle: function(t, e) {
			this.quaternion.setFromAxisAngle(t, e)
		},
		setRotationFromEuler: function(t) {
			this.quaternion.setFromEuler(t, !0)
		},
		setRotationFromMatrix: function(t) {
			this.quaternion.setFromRotationMatrix(t)
		},
		setRotationFromQuaternion: function(t) {
			this.quaternion.copy(t)
		},
		rotateOnAxis: function() {
			var t = new r;
			return function(e, i) {
				return t.setFromAxisAngle(e, i), this.quaternion.multiply(t), this
			}
		}(),
		rotateOnWorldAxis: function() {
			var t = new r;
			return function(e, i) {
				return t.setFromAxisAngle(e, i), this.quaternion.premultiply(t), this
			}
		}(),
		rotateX: function() {
			var t = new a(1, 0, 0);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		rotateY: function() {
			var t = new a(0, 1, 0);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		rotateZ: function() {
			var t = new a(0, 0, 1);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		translateOnAxis: function() {
			var t = new a;
			return function(e, i) {
				return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t
					.multiplyScalar(i)), this
			}
		}(),
		translateX: function() {
			var t = new a(1, 0, 0);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		translateY: function() {
			var t = new a(0, 1, 0);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		translateZ: function() {
			var t = new a(0, 0, 1);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		localToWorld: function(t) {
			return t.applyMatrix4(this.matrixWorld)
		},
		worldToLocal: function() {
			var t = new n;
			return function(e) {
				return e.applyMatrix4(t.getInverse(this.matrixWorld))
			}
		}(),
		lookAt: function() {
			var t = new n,
				e = new a;
			return function(i, n, r) {
				i.isVector3 ? e.copy(i) : e.set(i, n, r), this.isCamera ? t.lookAt(this.position, e,
						this.up) : t.lookAt(e, this.position, this.up), this.quaternion
					.setFromRotationMatrix(t)
			}
		}(),
		add: function(t) {
			if (arguments.length > 1) {
				for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
				return this
			}
			return t === this ? (console.error(
				"THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t &&
				t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t
					.dispatchEvent({
						type: "added"
					}), this.children.push(t)) : console.error(
					"THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
		},
		remove: function(t) {
			if (arguments.length > 1) {
				for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
				return this
			}
			var i = this.children.indexOf(t);
			return i !== -1 && (t.parent = null, t.dispatchEvent({
				type: "removed"
			}), this.children.splice(i, 1)), this
		},
		getObjectById: function(t) {
			return this.getObjectByProperty("id", t)
		},
		getObjectByName: function(t) {
			return this.getObjectByProperty("name", t)
		},
		getObjectByProperty: function(t, e) {
			if (this[t] === e) return this;
			for (var i = 0, n = this.children.length; i < n; i++) {
				var r = this.children[i],
					a = r.getObjectByProperty(t, e);
				if (void 0 !== a) return a
			}
		},
		getWorldPosition: function(t) {
			var e = t || new a;
			return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
		},
		getWorldQuaternion: function() {
			var t = new a,
				e = new a;
			return function(i) {
				var n = i || new r;
				return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, n, e), n
			}
		}(),
		getWorldRotation: function() {
			var t = new r;
			return function(e) {
				var i = e || new st;
				return this.getWorldQuaternion(t), i.setFromQuaternion(t, this.rotation.order, !1)
			}
		}(),
		getWorldScale: function() {
			var t = new a,
				e = new r;
			return function(i) {
				var n = i || new a;
				return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, n), n
			}
		}(),
		getWorldDirection: function() {
			var t = new r;
			return function(e) {
				var i = e || new a;
				return this.getWorldQuaternion(t), i.set(0, 0, 1).applyQuaternion(t)
			}
		}(),
		raycast: function() {},
		traverse: function(t) {
			t(this);
			for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
		},
		traverseVisible: function(t) {
			if (this.visible !== !1) {
				t(this);
				for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
			}
		},
		traverseAncestors: function(t) {
			var e = this.parent;
			null !== e && (t(e), e.traverseAncestors(t))
		},
		updateMatrix: function() {
			this.matrix.compose(this.position, this.quaternion, this.scale), this
				.matrixWorldNeedsUpdate = !0
		},
		updateMatrixWorld: function(t) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (
				null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld
				.multiplyMatrices(this.parent.matrixWorld, this.matrix), this
				.matrixWorldNeedsUpdate = !1, t = !0);
			for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
		},
		toJSON: function(t) {
			function e(e, i) {
				return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
			}

			function i(t) {
				var e = [];
				for (var i in t) {
					var n = t[i];
					delete n.metadata, e.push(n)
				}
				return e
			}
			var n = void 0 === t || "string" == typeof t,
				r = {};
			n && (t = {
				geometries: {},
				materials: {},
				textures: {},
				images: {}
			}, r.metadata = {
				version: 4.5,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			var a = {};
			if (a.uuid = this.uuid, a.type = this.type, "" !== this.name && (a.name = this.name), this
				.castShadow === !0 && (a.castShadow = !0), this.receiveShadow === !0 && (a
					.receiveShadow = !0), this.visible === !1 && (a.visible = !1), "{}" !== JSON
				.stringify(this.userData) && (a.userData = this.userData), a.matrix = this.matrix
				.toArray(), void 0 !== this.geometry && (a.geometry = e(t.geometries, this.geometry)),
				void 0 !== this.material)
				if (Array.isArray(this.material)) {
					for (var o = [], s = 0, c = this.material.length; s < c; s++) o.push(e(t.materials,
						this.material[s]));
					a.material = o
				} else a.material = e(t.materials, this.material);
			if (this.children.length > 0) {
				a.children = [];
				for (var s = 0; s < this.children.length; s++) a.children.push(this.children[s].toJSON(
					t).object)
			}
			if (n) {
				var h = i(t.geometries),
					l = i(t.materials),
					u = i(t.textures),
					p = i(t.images);
				h.length > 0 && (r.geometries = h), l.length > 0 && (r.materials = l), u.length > 0 && (
					r.textures = u), p.length > 0 && (r.images = p)
			}
			return r.object = a, r
		},
		clone: function(t) {
			return (new this.constructor).copy(this, t)
		},
		copy: function(t, e) {
			if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t
					.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this
				.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t
				.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers
				.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this
				.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this
				.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)),
				e === !0)
				for (var i = 0; i < t.children.length; i++) {
					var n = t.children[i];
					this.add(n.clone())
				}
			return this
		}
	}), lt.prototype = Object.assign(Object.create(ht.prototype), {
		constructor: lt,
		isCamera: !0,
		copy: function(t, e) {
			return ht.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t
				.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
		},
		getWorldDirection: function() {
			var t = new r;
			return function(e) {
				var i = e || new a;
				return this.getWorldQuaternion(t), i.set(0, 0, -1).applyQuaternion(t)
			}
		}(),
		updateMatrixWorld: function(t) {
			ht.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this
				.matrixWorld)
		},
		clone: function() {
			return (new this.constructor).copy(this)
		}
	}), ut.prototype = Object.assign(Object.create(lt.prototype), {
		constructor: ut,
		isOrthographicCamera: !0,
		copy: function(t, e) {
			return lt.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this
				.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom =
				t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
		},
		setViewOffset: function(t, e, i, n, r, a) {
			null === this.view && (this.view = {
					enabled: !0,
					fullWidth: 1,
					fullHeight: 1,
					offsetX: 0,
					offsetY: 0,
					width: 1,
					height: 1
				}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view
				.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this
				.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var t = (this.right - this.left) / (2 * this.zoom),
				e = (this.top - this.bottom) / (2 * this.zoom),
				i = (this.right + this.left) / 2,
				n = (this.top + this.bottom) / 2,
				r = i - t,
				a = i + t,
				o = n + e,
				s = n - e;
			if (null !== this.view && this.view.enabled) {
				var c = this.zoom / (this.view.width / this.view.fullWidth),
					h = this.zoom / (this.view.height / this.view.fullHeight),
					l = (this.right - this.left) / this.view.width,
					u = (this.top - this.bottom) / this.view.height;
				r += l * (this.view.offsetX / c), a = r + l * (this.view.width / c), o -= u * (this.view
					.offsetY / h), s = o - u * (this.view.height / h)
			}
			this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far)
		},
		toJSON: function(t) {
			var e = ht.prototype.toJSON.call(this, t);
			return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e
				.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e
				.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this
					.view)), e
		}
	}), Object.assign(pt.prototype, {
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t
				.color), this.materialIndex = t.materialIndex;
			for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t
				.vertexNormals[e].clone();
			for (var e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t
				.vertexColors[e].clone();
			return this
		}
	});
	var qh = 0;
	Object.assign(dt.prototype, e.prototype, {
			isGeometry: !0,
			applyMatrix: function(t) {
				for (var e = (new o).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
					var r = this.vertices[i];
					r.applyMatrix4(t)
				}
				for (var i = 0, n = this.faces.length; i < n; i++) {
					var a = this.faces[i];
					a.normal.applyMatrix3(e).normalize();
					for (var s = 0, c = a.vertexNormals.length; s < c; s++) a.vertexNormals[s].applyMatrix3(
						e).normalize()
				}
				return null !== this.boundingBox && this.computeBoundingBox(), null !== this
					.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this
					.normalsNeedUpdate = !0, this
			},
			rotateX: function() {
				var t = new n;
				return function(e) {
					return t.makeRotationX(e), this.applyMatrix(t), this
				}
			}(),
			rotateY: function() {
				var t = new n;
				return function(e) {
					return t.makeRotationY(e), this.applyMatrix(t), this
				}
			}(),
			rotateZ: function() {
				var t = new n;
				return function(e) {
					return t.makeRotationZ(e), this.applyMatrix(t), this
				}
			}(),
			translate: function() {
				var t = new n;
				return function(e, i, n) {
					return t.makeTranslation(e, i, n), this.applyMatrix(t), this
				}
			}(),
			scale: function() {
				var t = new n;
				return function(e, i, n) {
					return t.makeScale(e, i, n), this.applyMatrix(t), this
				}
			}(),
			lookAt: function() {
				var t = new ht;
				return function(e) {
					t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
				}
			}(),
			fromBufferGeometry: function(t) {
				function e(t, e, i, r) {
					var a = void 0 !== c ? [p[t].clone(), p[e].clone(), p[i].clone()] : [],
						o = void 0 !== h ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[i].clone()] :
						[],
						s = new pt(t, e, i, a, o, r);
					n.faces.push(s), void 0 !== l && n.faceVertexUvs[0].push([d[t].clone(), d[e].clone(), d[
						i].clone()]), void 0 !== u && n.faceVertexUvs[1].push([f[t].clone(), f[e]
						.clone(), f[i].clone()
					])
				}
				var n = this,
					r = null !== t.index ? t.index.array : void 0,
					o = t.attributes,
					s = o.position.array,
					c = void 0 !== o.normal ? o.normal.array : void 0,
					h = void 0 !== o.color ? o.color.array : void 0,
					l = void 0 !== o.uv ? o.uv.array : void 0,
					u = void 0 !== o.uv2 ? o.uv2.array : void 0;
				void 0 !== u && (this.faceVertexUvs[1] = []);
				for (var p = [], d = [], f = [], m = 0, g = 0; m < s.length; m += 3, g += 2) n.vertices
					.push(new a(s[m], s[m + 1], s[m + 2])), void 0 !== c && p.push(new a(c[m], c[m + 1], c[
						m + 2])), void 0 !== h && n.colors.push(new q(h[m], h[m + 1], h[m + 2])), void 0 !==
					l && d.push(new i(l[g], l[g + 1])), void 0 !== u && f.push(new i(u[g], u[g + 1]));
				var v = t.groups;
				if (v.length > 0)
					for (var m = 0; m < v.length; m++)
						for (var y = v[m], x = y.start, b = y.count, g = x, _ = x + b; g < _; g += 3)
							void 0 !== r ? e(r[g], r[g + 1], r[g + 2], y.materialIndex) : e(g, g + 1, g + 2,
								y.materialIndex);
				else if (void 0 !== r)
					for (var m = 0; m < r.length; m += 3) e(r[m], r[m + 1], r[m + 2]);
				else
					for (var m = 0; m < s.length / 3; m += 3) e(m, m + 1, m + 2);
				return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t
					.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t
					.boundingSphere.clone()), this
			},
			center: function() {
				this.computeBoundingBox();
				var t = this.boundingBox.getCenter().negate();
				return this.translate(t.x, t.y, t.z), t
			},
			normalize: function() {
				this.computeBoundingSphere();
				var t = this.boundingSphere.center,
					e = this.boundingSphere.radius,
					i = 0 === e ? 1 : 1 / e,
					r = new n;
				return r.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this
					.applyMatrix(r), this
			},
			computeFaceNormals: function() {
				for (var t = new a, e = new a, i = 0, n = this.faces.length; i < n; i++) {
					var r = this.faces[i],
						o = this.vertices[r.a],
						s = this.vertices[r.b],
						c = this.vertices[r.c];
					t.subVectors(c, s), e.subVectors(o, s), t.cross(e), t.normalize(), r.normal.copy(t)
				}
			},
			computeVertexNormals: function(t) {
				void 0 === t && (t = !0);
				var e, i, n, r, o, s;
				for (s = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) s[
					e] = new a;
				if (t) {
					var c, h, l, u = new a,
						p = new a;
					for (n = 0, r = this.faces.length; n < r; n++) o = this.faces[n], c = this.vertices[o
							.a], h = this.vertices[o.b], l = this.vertices[o.c], u.subVectors(l, h), p
						.subVectors(c, h), u.cross(p), s[o.a].add(u), s[o.b].add(u), s[o.c].add(u)
				} else
					for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o = this
						.faces[n], s[o.a].add(o.normal), s[o.b].add(o.normal), s[o.c].add(o.normal);
				for (e = 0, i = this.vertices.length; e < i; e++) s[e].normalize();
				for (n = 0, r = this.faces.length; n < r; n++) {
					o = this.faces[n];
					var d = o.vertexNormals;
					3 === d.length ? (d[0].copy(s[o.a]), d[1].copy(s[o.b]), d[2].copy(s[o.c])) : (d[0] = s[o
						.a].clone(), d[1] = s[o.b].clone(), d[2] = s[o.c].clone())
				}
				this.faces.length > 0 && (this.normalsNeedUpdate = !0)
			},
			computeFlatVertexNormals: function() {
				var t, e, i;
				for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
					i = this.faces[t];
					var n = i.vertexNormals;
					3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[
						0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
				}
				this.faces.length > 0 && (this.normalsNeedUpdate = !0)
			},
			computeMorphNormals: function() {
				var t, e, i, n, r;
				for (i = 0, n = this.faces.length; i < n; i++)
					for (r = this.faces[i], r.__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) :
						r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r
							.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r
						.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[
							t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
				var o = new dt;
				for (o.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
					if (!this.morphNormals[t]) {
						this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[
							t].vertexNormals = [];
						var s, c, h = this.morphNormals[t].faceNormals,
							l = this.morphNormals[t].vertexNormals;
						for (i = 0, n = this.faces.length; i < n; i++) s = new a, c = {
							a: new a,
							b: new a,
							c: new a
						}, h.push(s), l.push(c)
					}
					var u = this.morphNormals[t];
					o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o
						.computeVertexNormals();
					var s, c;
					for (i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], s = u.faceNormals[i],
						c = u.vertexNormals[i], s.copy(r.normal), c.a.copy(r.vertexNormals[0]), c.b.copy(r
							.vertexNormals[1]), c.c.copy(r.vertexNormals[2])
				}
				for (i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], r.normal = r
					.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
			},
			computeLineDistances: function() {
				for (var t = 0, e = this.vertices, i = 0, n = e.length; i < n; i++) i > 0 && (t += e[i]
					.distanceTo(e[i - 1])), this.lineDistances[i] = t
			},
			computeBoundingBox: function() {
				null === this.boundingBox && (this.boundingBox = new et), this.boundingBox.setFromPoints(
					this.vertices)
			},
			computeBoundingSphere: function() {
				null === this.boundingSphere && (this.boundingSphere = new it), this.boundingSphere
					.setFromPoints(this.vertices)
			},
			merge: function(t, e, i) {
				if (!t || !t.isGeometry) return void console.error(
					"THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
				var n, r = this.vertices.length,
					a = this.vertices,
					s = t.vertices,
					c = this.faces,
					h = t.faces,
					l = this.faceVertexUvs[0],
					u = t.faceVertexUvs[0],
					p = this.colors,
					d = t.colors;
				void 0 === i && (i = 0), void 0 !== e && (n = (new o).getNormalMatrix(e));
				for (var f = 0, m = s.length; f < m; f++) {
					var g = s[f],
						v = g.clone();
					void 0 !== e && v.applyMatrix4(e), a.push(v)
				}
				for (var f = 0, m = d.length; f < m; f++) p.push(d[f].clone());
				for (f = 0, m = h.length; f < m; f++) {
					var y, x, b, _ = h[f],
						w = _.vertexNormals,
						M = _.vertexColors;
					y = new pt(_.a + r, _.b + r, _.c + r), y.normal.copy(_.normal), void 0 !== n && y.normal
						.applyMatrix3(n).normalize();
					for (var E = 0, T = w.length; E < T; E++) x = w[E].clone(), void 0 !== n && x
						.applyMatrix3(n).normalize(), y.vertexNormals.push(x);
					y.color.copy(_.color);
					for (var E = 0, T = M.length; E < T; E++) b = M[E], y.vertexColors.push(b.clone());
					y.materialIndex = _.materialIndex + i, c.push(y)
				}
				for (f = 0, m = u.length; f < m; f++) {
					var S = u[f],
						A = [];
					if (void 0 !== S) {
						for (var E = 0, T = S.length; E < T; E++) A.push(S[E].clone());
						l.push(A)
					}
				}
			},
			mergeMesh: function(t) {
				return t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), void this.merge(t.geometry,
					t.matrix)) : void console.error(
					"THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
			},
			mergeVertices: function() {
				var t, e, i, n, r, a, o, s, c = {},
					h = [],
					l = [],
					u = 4,
					p = Math.pow(10, u);
				for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], e = Math.round(t.x *
					p) + "_" + Math.round(t.y * p) + "_" + Math.round(t.z * p), void 0 === c[e] ? (c[
					e] = i, h.push(this.vertices[i]), l[i] = h.length - 1) : l[i] = l[c[e]];
				var d = [];
				for (i = 0, n = this.faces.length; i < n; i++) {
					r = this.faces[i], r.a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
					for (var f = 0; f < 3; f++)
						if (a[f] === a[(f + 1) % 3]) {
							d.push(i);
							break
						}
				}
				for (i = d.length - 1; i >= 0; i--) {
					var m = d[i];
					for (this.faces.splice(m, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this
						.faceVertexUvs[o].splice(m, 1)
				}
				var g = this.vertices.length - h.length;
				return this.vertices = h, g
			},
			setFromPoints: function(t) {
				this.vertices = [];
				for (var e = 0, i = t.length; e < i; e++) {
					var n = t[e];
					this.vertices.push(new a(n.x, n.y, n.z || 0))
				}
				return this
			},
			sortFacesByMaterialIndex: function() {
				function t(t, e) {
					return t.materialIndex - e.materialIndex
				}
				for (var e = this.faces, i = e.length, n = 0; n < i; n++) e[n]._id = n;
				e.sort(t);
				var r, a, o = this.faceVertexUvs[0],
					s = this.faceVertexUvs[1];
				o && o.length === i && (r = []), s && s.length === i && (a = []);
				for (var n = 0; n < i; n++) {
					var c = e[n]._id;
					r && r.push(o[c]), a && a.push(s[c])
				}
				r && (this.faceVertexUvs[0] = r), a && (this.faceVertexUvs[1] = a)
			},
			toJSON: function() {
				function t(t, e, i) {
					return i ? t | 1 << e : t & ~(1 << e)
				}

				function e(t) {
					var e = t.x.toString() + t.y.toString() + t.z.toString();
					return void 0 !== p[e] ? p[e] : (p[e] = u.length / 3, u.push(t.x, t.y, t.z), p[e])
				}

				function i(t) {
					var e = t.r.toString() + t.g.toString() + t.b.toString();
					return void 0 !== f[e] ? f[e] : (f[e] = d.length, d.push(t.getHex()), f[e])
				}

				function n(t) {
					var e = t.x.toString() + t.y.toString();
					return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2, m.push(t.x, t.y), g[e])
				}
				var r = {
					metadata: {
						version: 4.5,
						type: "Geometry",
						generator: "Geometry.toJSON"
					}
				};
				if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name),
					void 0 !== this.parameters) {
					var a = this.parameters;
					for (var o in a) void 0 !== a[o] && (r[o] = a[o]);
					return r
				}
				for (var s = [], c = 0; c < this.vertices.length; c++) {
					var h = this.vertices[c];
					s.push(h.x, h.y, h.z)
				}
				for (var l = [], u = [], p = {}, d = [], f = {}, m = [], g = {}, c = 0; c < this.faces
					.length; c++) {
					var v = this.faces[c],
						y = !0,
						x = !1,
						b = void 0 !== this.faceVertexUvs[0][c],
						_ = v.normal.length() > 0,
						w = v.vertexNormals.length > 0,
						M = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b,
						E = v.vertexColors.length > 0,
						T = 0;
					if (T = t(T, 0, 0), T = t(T, 1, y), T = t(T, 2, x), T = t(T, 3, b), T = t(T, 4, _), T =
						t(T, 5, w), T = t(T, 6, M), T = t(T, 7, E), l.push(T), l.push(v.a, v.b, v.c), l
						.push(v.materialIndex), b) {
						var S = this.faceVertexUvs[0][c];
						l.push(n(S[0]), n(S[1]), n(S[2]))
					}
					if (_ && l.push(e(v.normal)), w) {
						var A = v.vertexNormals;
						l.push(e(A[0]), e(A[1]), e(A[2]))
					}
					if (M && l.push(i(v.color)), E) {
						var R = v.vertexColors;
						l.push(i(R[0]), i(R[1]), i(R[2]))
					}
				}
				return r.data = {}, r.data.vertices = s, r.data.normals = u, d.length > 0 && (r.data
					.colors = d), m.length > 0 && (r.data.uvs = [m]), r.data.faces = l, r
			},
			clone: function() {
				return (new dt).copy(this)
			},
			copy: function(t) {
				var e, i, n, r, a, o;
				this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
						[]
					], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this
					.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this
					.boundingSphere = null, this.name = t.name;
				var s = t.vertices;
				for (e = 0, i = s.length; e < i; e++) this.vertices.push(s[e].clone());
				var c = t.colors;
				for (e = 0, i = c.length; e < i; e++) this.colors.push(c[e].clone());
				var h = t.faces;
				for (e = 0, i = h.length; e < i; e++) this.faces.push(h[e].clone());
				for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
					var l = t.faceVertexUvs[e];
					for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l
						.length; n < r; n++) {
						var u = l[n],
							p = [];
						for (a = 0, o = u.length; a < o; a++) {
							var d = u[a];
							p.push(d.clone())
						}
						this.faceVertexUvs[e].push(p)
					}
				}
				var f = t.morphTargets;
				for (e = 0, i = f.length; e < i; e++) {
					var m = {};
					if (m.name = f[e].name, void 0 !== f[e].vertices)
						for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) m.vertices.push(
							f[e].vertices[n].clone());
					if (void 0 !== f[e].normals)
						for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++) m.normals.push(f[e]
							.normals[n].clone());
					this.morphTargets.push(m)
				}
				var g = t.morphNormals;
				for (e = 0, i = g.length; e < i; e++) {
					var v = {};
					if (void 0 !== g[e].vertexNormals)
						for (v.vertexNormals = [], n = 0, r = g[e].vertexNormals.length; n < r; n++) {
							var y = g[e].vertexNormals[n],
								x = {};
							x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x)
						}
					if (void 0 !== g[e].faceNormals)
						for (v.faceNormals = [], n = 0, r = g[e].faceNormals.length; n < r; n++) v
							.faceNormals.push(g[e].faceNormals[n].clone());
					this.morphNormals.push(v)
				}
				var b = t.skinWeights;
				for (e = 0, i = b.length; e < i; e++) this.skinWeights.push(b[e].clone());
				var _ = t.skinIndices;
				for (e = 0, i = _.length; e < i; e++) this.skinIndices.push(_[e].clone());
				var w = t.lineDistances;
				for (e = 0, i = w.length; e < i; e++) this.lineDistances.push(w[e]);
				var M = t.boundingBox;
				null !== M && (this.boundingBox = M.clone());
				var E = t.boundingSphere;
				return null !== E && (this.boundingSphere = E.clone()), this.elementsNeedUpdate = t
					.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this
					.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this
					.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t
					.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), Object.defineProperty(ft.prototype, "needsUpdate", {
			set: function(t) {
				t === !0 && this.version++
			}
		}), Object.assign(ft.prototype, {
			isBufferAttribute: !0,
			setArray: function(t) {
				if (Array.isArray(t)) throw new TypeError(
					"THREE.BufferAttribute: array should be a Typed Array.");
				this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t
			},
			setDynamic: function(t) {
				return this.dynamic = t, this
			},
			copy: function(t) {
				return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this
					.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
			},
			copyAt: function(t, e, i) {
				t *= this.itemSize, i *= e.itemSize;
				for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
				return this
			},
			copyArray: function(t) {
				return this.array.set(t), this
			},
			copyColorsArray: function(t) {
				for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
					var a = t[n];
					void 0 === a && (console.warn(
							"THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a =
						new q), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
				}
				return this
			},
			copyIndicesArray: function(t) {
				for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
					var a = t[n];
					e[i++] = a.a, e[i++] = a.b, e[i++] = a.c
				}
				return this
			},
			copyVector2sArray: function(t) {
				for (var e = this.array, n = 0, r = 0, a = t.length; r < a; r++) {
					var o = t[r];
					void 0 === o && (console.warn(
							"THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), o =
						new i), e[n++] = o.x, e[n++] = o.y
				}
				return this
			},
			copyVector3sArray: function(t) {
				for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
					var o = t[n];
					void 0 === o && (console.warn(
							"THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), o =
						new a), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z
				}
				return this
			},
			copyVector4sArray: function(t) {
				for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
					var a = t[n];
					void 0 === a && (console.warn(
							"THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a =
						new c), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w
				}
				return this
			},
			set: function(t, e) {
				return void 0 === e && (e = 0), this.array.set(t, e), this
			},
			getX: function(t) {
				return this.array[t * this.itemSize]
			},
			setX: function(t, e) {
				return this.array[t * this.itemSize] = e, this
			},
			getY: function(t) {
				return this.array[t * this.itemSize + 1]
			},
			setY: function(t, e) {
				return this.array[t * this.itemSize + 1] = e, this
			},
			getZ: function(t) {
				return this.array[t * this.itemSize + 2]
			},
			setZ: function(t, e) {
				return this.array[t * this.itemSize + 2] = e, this
			},
			getW: function(t) {
				return this.array[t * this.itemSize + 3]
			},
			setW: function(t, e) {
				return this.array[t * this.itemSize + 3] = e, this
			},
			setXY: function(t, e, i) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
			},
			setXYZ: function(t, e, i, n) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] =
					n, this
			},
			setXYZW: function(t, e, i, n, r) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] =
					n, this.array[t + 3] = r, this
			},
			onUpload: function(t) {
				return this.onUploadCallback = t, this
			},
			clone: function() {
				return new this.constructor(this.array, this.itemSize).copy(this)
			}
		}), mt.prototype = Object.create(ft.prototype), mt.prototype.constructor = mt, gt.prototype = Object.create(
			ft.prototype), gt.prototype.constructor = gt, vt.prototype = Object.create(ft.prototype), vt.prototype
		.constructor = vt, yt.prototype = Object.create(ft.prototype), yt.prototype.constructor = yt, xt.prototype =
		Object.create(ft.prototype), xt.prototype.constructor = xt, bt.prototype = Object.create(ft.prototype), bt
		.prototype.constructor = bt, _t.prototype = Object.create(ft.prototype), _t.prototype.constructor = _t, wt
		.prototype = Object.create(ft.prototype), wt.prototype.constructor = wt, Mt.prototype = Object.create(ft
			.prototype), Mt.prototype.constructor = Mt, Object.assign(Et.prototype, {
			computeGroups: function(t) {
				for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
					var o = r[a];
					o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e
						.start, i.push(e)), e = {
						start: 3 * a,
						materialIndex: n
					})
				}
				void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i
			},
			fromGeometry: function(t) {
				var e, n = t.faces,
					r = t.vertices,
					a = t.faceVertexUvs,
					o = a[0] && a[0].length > 0,
					s = a[1] && a[1].length > 0,
					c = t.morphTargets,
					h = c.length;
				if (h > 0) {
					e = [];
					for (var l = 0; l < h; l++) e[l] = [];
					this.morphTargets.position = e
				}
				var u, p = t.morphNormals,
					d = p.length;
				if (d > 0) {
					u = [];
					for (var l = 0; l < d; l++) u[l] = [];
					this.morphTargets.normal = u
				}
				for (var f = t.skinIndices, m = t.skinWeights, g = f.length === r.length, v = m.length === r
						.length, l = 0; l < n.length; l++) {
					var y = n[l];
					this.vertices.push(r[y.a], r[y.b], r[y.c]);
					var x = y.vertexNormals;
					if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
					else {
						var b = y.normal;
						this.normals.push(b, b, b)
					}
					var _ = y.vertexColors;
					if (3 === _.length) this.colors.push(_[0], _[1], _[2]);
					else {
						var w = y.color;
						this.colors.push(w, w, w)
					}
					if (o === !0) {
						var M = a[0][l];
						void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn(
								"THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs
							.push(new i, new i, new i))
					}
					if (s === !0) {
						var M = a[1][l];
						void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn(
								"THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this
							.uvs2.push(new i, new i, new i))
					}
					for (var E = 0; E < h; E++) {
						var T = c[E].vertices;
						e[E].push(T[y.a], T[y.b], T[y.c])
					}
					for (var E = 0; E < d; E++) {
						var S = p[E].vertexNormals[l];
						u[E].push(S.a, S.b, S.c)
					}
					g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a],
						m[y.b], m[y.c])
				}
				return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this
					.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate,
					this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
			}
		});
	var Yh = 1;
	Object.assign(St.prototype, e.prototype, {
			isBufferGeometry: !0,
			getIndex: function() {
				return this.index
			},
			setIndex: function(t) {
				Array.isArray(t) ? this.index = new(Tt(t) > 65535 ? _t : xt)(t, 1) : this.index = t
			},
			addAttribute: function(t, e) {
				return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (
					console.warn(
						"THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
					void this.setIndex(e)) : (this.attributes[t] = e, this) : (console.warn(
						"THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
					void this.addAttribute(t, new ft(arguments[1], arguments[2])))
			},
			getAttribute: function(t) {
				return this.attributes[t]
			},
			removeAttribute: function(t) {
				return delete this.attributes[t], this
			},
			addGroup: function(t, e, i) {
				this.groups.push({
					start: t,
					count: e,
					materialIndex: void 0 !== i ? i : 0
				})
			},
			clearGroups: function() {
				this.groups = []
			},
			setDrawRange: function(t, e) {
				this.drawRange.start = t, this.drawRange.count = e
			},
			applyMatrix: function(t) {
				var e = this.attributes.position;
				void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
				var i = this.attributes.normal;
				if (void 0 !== i) {
					var n = (new o).getNormalMatrix(t);
					n.applyToBufferAttribute(i), i.needsUpdate = !0
				}
				return null !== this.boundingBox && this.computeBoundingBox(), null !== this
					.boundingSphere && this.computeBoundingSphere(), this
			},
			rotateX: function() {
				var t = new n;
				return function(e) {
					return t.makeRotationX(e), this.applyMatrix(t), this
				}
			}(),
			rotateY: function() {
				var t = new n;
				return function(e) {
					return t.makeRotationY(e), this.applyMatrix(t), this
				}
			}(),
			rotateZ: function() {
				var t = new n;
				return function(e) {
					return t.makeRotationZ(e), this.applyMatrix(t), this
				}
			}(),
			translate: function() {
				var t = new n;
				return function(e, i, n) {
					return t.makeTranslation(e, i, n), this.applyMatrix(t), this
				}
			}(),
			scale: function() {
				var t = new n;
				return function(e, i, n) {
					return t.makeScale(e, i, n), this.applyMatrix(t), this
				}
			}(),
			lookAt: function() {
				var t = new ht;
				return function(e) {
					t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
				}
			}(),
			center: function() {
				this.computeBoundingBox();
				var t = this.boundingBox.getCenter().negate();
				return this.translate(t.x, t.y, t.z), t
			},
			setFromObject: function(t) {
				var e = t.geometry;
				if (t.isPoints || t.isLine) {
					var i = new wt(3 * e.vertices.length, 3),
						n = new wt(3 * e.colors.length, 3);
					if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute(
							"color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances
						.length === e.vertices.length) {
						var r = new wt(e.lineDistances.length, 1);
						this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
					}
					null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !==
						e.boundingBox && (this.boundingBox = e.boundingBox.clone())
				} else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
				return this
			},
			setFromPoints: function(t) {
				for (var e = [], i = 0, n = t.length; i < n; i++) {
					var r = t[i];
					e.push(r.x, r.y, r.z || 0)
				}
				return this.addAttribute("position", new wt(e, 3)), this
			},
			updateFromObject: function(t) {
				var e = t.geometry;
				if (t.isMesh) {
					var i = e.__directGeometry;
					if (e.elementsNeedUpdate === !0 && (i = void 0, e.elementsNeedUpdate = !1), void 0 ===
						i) return this.fromGeometry(e);
					i.verticesNeedUpdate = e.verticesNeedUpdate, i.normalsNeedUpdate = e.normalsNeedUpdate,
						i.colorsNeedUpdate = e.colorsNeedUpdate, i.uvsNeedUpdate = e.uvsNeedUpdate, i
						.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e
						.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e
						.groupsNeedUpdate = !1, e = i
				}
				var n;
				return e.verticesNeedUpdate === !0 && (n = this.attributes.position, void 0 !== n && (n
						.copyVector3sArray(e.vertices), n.needsUpdate = !0), e.verticesNeedUpdate = !1), e
					.normalsNeedUpdate === !0 && (n = this.attributes.normal, void 0 !== n && (n
						.copyVector3sArray(e.normals), n.needsUpdate = !0), e.normalsNeedUpdate = !1), e
					.colorsNeedUpdate === !0 && (n = this.attributes.color, void 0 !== n && (n
						.copyColorsArray(e.colors), n.needsUpdate = !0), e.colorsNeedUpdate = !1), e
					.uvsNeedUpdate && (n = this.attributes.uv, void 0 !== n && (n.copyVector2sArray(e.uvs),
						n.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (n = this
						.attributes.lineDistance, void 0 !== n && (n.copyArray(e.lineDistances), n
							.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e
						.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
			},
			fromGeometry: function(t) {
				return t.__directGeometry = (new Et).fromGeometry(t), this.fromDirectGeometry(t
					.__directGeometry)
			},
			fromDirectGeometry: function(t) {
				var e = new Float32Array(3 * t.vertices.length);
				if (this.addAttribute("position", new ft(e, 3).copyVector3sArray(t.vertices)), t.normals
					.length > 0) {
					var i = new Float32Array(3 * t.normals.length);
					this.addAttribute("normal", new ft(i, 3).copyVector3sArray(t.normals))
				}
				if (t.colors.length > 0) {
					var n = new Float32Array(3 * t.colors.length);
					this.addAttribute("color", new ft(n, 3).copyColorsArray(t.colors))
				}
				if (t.uvs.length > 0) {
					var r = new Float32Array(2 * t.uvs.length);
					this.addAttribute("uv", new ft(r, 2).copyVector2sArray(t.uvs))
				}
				if (t.uvs2.length > 0) {
					var a = new Float32Array(2 * t.uvs2.length);
					this.addAttribute("uv2", new ft(a, 2).copyVector2sArray(t.uvs2))
				}
				if (t.indices.length > 0) {
					var o = Tt(t.indices) > 65535 ? Uint32Array : Uint16Array,
						s = new o(3 * t.indices.length);
					this.setIndex(new ft(s, 1).copyIndicesArray(t.indices))
				}
				this.groups = t.groups;
				for (var c in t.morphTargets) {
					for (var h = [], l = t.morphTargets[c], u = 0, p = l.length; u < p; u++) {
						var d = l[u],
							f = new wt(3 * d.length, 3);
						h.push(f.copyVector3sArray(d))
					}
					this.morphAttributes[c] = h
				}
				if (t.skinIndices.length > 0) {
					var m = new wt(4 * t.skinIndices.length, 4);
					this.addAttribute("skinIndex", m.copyVector4sArray(t.skinIndices))
				}
				if (t.skinWeights.length > 0) {
					var g = new wt(4 * t.skinWeights.length, 4);
					this.addAttribute("skinWeight", g.copyVector4sArray(t.skinWeights))
				}
				return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
					null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
			},
			computeBoundingBox: function() {
				null === this.boundingBox && (this.boundingBox = new et);
				var t = this.attributes.position;
				void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (
					isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this
						.boundingBox.min.z)) && console.error(
					'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
					this)
			},
			computeBoundingSphere: function() {
				var t = new et,
					e = new a;
				return function() {
					null === this.boundingSphere && (this.boundingSphere = new it);
					var i = this.attributes.position;
					if (i) {
						var n = this.boundingSphere.center;
						t.setFromBufferAttribute(i), t.getCenter(n);
						for (var r = 0, a = 0, o = i.count; a < o; a++) e.x = i.getX(a), e.y = i.getY(
							a), e.z = i.getZ(a), r = Math.max(r, n.distanceToSquared(e));
						this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) &&
							console.error(
								'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
								this)
					}
				}
			}(),
			computeFaceNormals: function() {},
			computeVertexNormals: function() {
				var t = this.index,
					e = this.attributes,
					i = this.groups;
				if (e.position) {
					var n = e.position.array;
					if (void 0 === e.normal) this.addAttribute("normal", new ft(new Float32Array(n.length),
						3));
					else
						for (var r = e.normal.array, o = 0, s = r.length; o < s; o++) r[o] = 0;
					var c, h, l, u = e.normal.array,
						p = new a,
						d = new a,
						f = new a,
						m = new a,
						g = new a;
					if (t) {
						var v = t.array;
						0 === i.length && this.addGroup(0, v.length);
						for (var y = 0, x = i.length; y < x; ++y)
							for (var b = i[y], _ = b.start, w = b.count, o = _, s = _ + w; o < s; o += 3)
								c = 3 * v[o + 0], h = 3 * v[o + 1], l = 3 * v[o + 2], p.fromArray(n, c), d
								.fromArray(n, h), f.fromArray(n, l), m.subVectors(f, d), g.subVectors(p, d),
								m.cross(g), u[c] += m.x, u[c + 1] += m.y, u[c + 2] += m.z, u[h] += m.x, u[
									h + 1] += m.y, u[h + 2] += m.z, u[l] += m.x, u[l + 1] += m.y, u[l +
									2] += m.z
					} else
						for (var o = 0, s = n.length; o < s; o += 9) p.fromArray(n, o), d.fromArray(n, o +
								3), f.fromArray(n, o + 6), m.subVectors(f, d), g.subVectors(p, d), m.cross(
								g), u[o] = m.x, u[o + 1] = m.y, u[o + 2] = m.z, u[o + 3] = m.x, u[o + 4] = m
							.y, u[o + 5] = m.z, u[o + 6] = m.x, u[o + 7] = m.y, u[o + 8] = m.z;
					this.normalizeNormals(), e.normal.needsUpdate = !0
				}
			},
			merge: function(t, e) {
				if (!t || !t.isBufferGeometry) return void console.error(
					"THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
					t);
				void 0 === e && (e = 0);
				var i = this.attributes;
				for (var n in i)
					if (void 0 !== t.attributes[n])
						for (var r = i[n], a = r.array, o = t.attributes[n], s = o.array, c = o.itemSize,
								h = 0, l = c * e; h < s.length; h++, l++) a[l] = s[h];
				return this
			},
			normalizeNormals: function() {
				var t = new a;
				return function() {
					for (var e = this.attributes.normal, i = 0, n = e.count; i < n; i++) t.x = e.getX(
						i), t.y = e.getY(i), t.z = e.getZ(i), t.normalize(), e.setXYZ(i, t.x, t.y, t
						.z)
				}
			}(),
			toNonIndexed: function() {
				if (null === this.index) return console.warn(
					"THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
				var t = new St,
					e = this.index.array,
					i = this.attributes;
				for (var n in i) {
					for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor(e.length * o), c =
							0, h = 0, l = 0, u = e.length; l < u; l++) {
						c = e[l] * o;
						for (var p = 0; p < o; p++) s[h++] = a[c++]
					}
					t.addAttribute(n, new ft(s, o))
				}
				return t
			},
			toJSON: function() {
				var t = {
					metadata: {
						version: 4.5,
						type: "BufferGeometry",
						generator: "BufferGeometry.toJSON"
					}
				};
				if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name),
					void 0 !== this.parameters) {
					var e = this.parameters;
					for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
					return t
				}
				t.data = {
					attributes: {}
				};
				var n = this.index;
				if (null !== n) {
					var r = Array.prototype.slice.call(n.array);
					t.data.index = {
						type: n.array.constructor.name,
						array: r
					}
				}
				var a = this.attributes;
				for (var i in a) {
					var o = a[i],
						r = Array.prototype.slice.call(o.array);
					t.data.attributes[i] = {
						itemSize: o.itemSize,
						type: o.array.constructor.name,
						array: r,
						normalized: o.normalized
					}
				}
				var s = this.groups;
				s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
				var c = this.boundingSphere;
				return null !== c && (t.data.boundingSphere = {
					center: c.center.toArray(),
					radius: c.radius
				}), t
			},
			clone: function() {
				return (new St).copy(this)
			},
			copy: function(t) {
				var e, i, n;
				this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this
					.boundingBox = null, this.boundingSphere = null, this.name = t.name;
				var r = t.index;
				null !== r && this.setIndex(r.clone());
				var a = t.attributes;
				for (e in a) {
					var o = a[e];
					this.addAttribute(e, o.clone())
				}
				var s = t.morphAttributes;
				for (e in s) {
					var c = [],
						h = s[e];
					for (i = 0, n = h.length; i < n; i++) c.push(h[i].clone());
					this.morphAttributes[e] = c
				}
				var l = t.groups;
				for (i = 0, n = l.length; i < n; i++) {
					var u = l[i];
					this.addGroup(u.start, u.count, u.materialIndex)
				}
				var p = t.boundingBox;
				null !== p && (this.boundingBox = p.clone());
				var d = t.boundingSphere;
				return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange
					.start, this.drawRange.count = t.drawRange.count, this
			},
			dispose: function() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), At.prototype = Object.create(dt.prototype), At.prototype.constructor = At, Rt.prototype = Object.create(
			St.prototype), Rt.prototype.constructor = Rt, Lt.prototype = Object.create(dt.prototype), Lt.prototype
		.constructor = Lt, Pt.prototype = Object.create(St.prototype), Pt.prototype.constructor = Pt, Ct.prototype =
		Object.create(K.prototype), Ct.prototype.constructor = Ct, Ct.prototype.isMeshBasicMaterial = !0, Ct
		.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t
				.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity =
				t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t
				.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t
				.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
				.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this
				.skinning = t.skinning, this.morphTargets = t.morphTargets, this
		}, It.prototype = Object.create(K.prototype), It.prototype.constructor = It, It.prototype
		.isShaderMaterial = !0, It.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t
				.vertexShader, this.uniforms = Hs.clone(t.uniforms), this.defines = t.defines, this.wireframe = t
				.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping =
				t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t
				.morphNormals, this.extensions = t.extensions, this
		}, It.prototype.toJSON = function(t) {
			var e = K.prototype.toJSON.call(this, t);
			return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this
				.fragmentShader, e
		}, Object.assign(Ut.prototype, {
			set: function(t, e) {
				return this.origin.copy(t), this.direction.copy(e), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.origin.copy(t.origin), this.direction.copy(t.direction), this
			},
			at: function(t, e) {
				var i = e || new a;
				return i.copy(this.direction).multiplyScalar(t).add(this.origin)
			},
			lookAt: function(t) {
				return this.direction.copy(t).sub(this.origin).normalize(), this
			},
			recast: function() {
				var t = new a;
				return function(e) {
					return this.origin.copy(this.at(e, t)), this
				}
			}(),
			closestPointToPoint: function(t, e) {
				var i = e || new a;
				i.subVectors(t, this.origin);
				var n = i.dot(this.direction);
				return n < 0 ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(n).add(this
					.origin)
			},
			distanceToPoint: function(t) {
				return Math.sqrt(this.distanceSqToPoint(t))
			},
			distanceSqToPoint: function() {
				var t = new a;
				return function(e) {
					var i = t.subVectors(e, this.origin).dot(this.direction);
					return i < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction)
						.multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
				}
			}(),
			distanceSqToSegment: function() {
				var t = new a,
					e = new a,
					i = new a;
				return function(n, r, a, o) {
					t.copy(n).add(r).multiplyScalar(.5), e.copy(r).sub(n).normalize(), i.copy(this
						.origin).sub(t);
					var s, c, h, l, u = .5 * n.distanceTo(r),
						p = -this.direction.dot(e),
						d = i.dot(this.direction),
						f = -i.dot(e),
						m = i.lengthSq(),
						g = Math.abs(1 - p * p);
					if (g > 0)
						if (s = p * f - d, c = p * d - f, l = u * g, s >= 0)
							if (c >= -l)
								if (c <= l) {
									var v = 1 / g;
									s *= v, c *= v, h = s * (s + p * c + 2 * d) + c * (p * s + c + 2 *
										f) + m
								} else c = u, s = Math.max(0, -(p * c + d)), h = -s * s + c * (c + 2 *
									f) + m;
					else c = -u, s = Math.max(0, -(p * c + d)), h = -s * s + c * (c + 2 * f) + m;
					else c <= -l ? (s = Math.max(0, -(-p * u + d)), c = s > 0 ? -u : Math.min(Math.max(-
						u, -f), u), h = -s * s + c * (c + 2 * f) + m) : c <= l ? (s = 0, c = Math
						.min(Math.max(-u, -f), u), h = c * (c + 2 * f) + m) : (s = Math.max(0, -(p *
							u + d)), c = s > 0 ? u : Math.min(Math.max(-u, -f), u), h = -s * s + c *
						(c + 2 * f) + m);
					else c = p > 0 ? -u : u, s = Math.max(0, -(p * c + d)), h = -s * s + c * (c + 2 *
						f) + m;
					return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(
						e).multiplyScalar(c).add(t), h
				}
			}(),
			intersectSphere: function() {
				var t = new a;
				return function(e, i) {
					t.subVectors(e.center, this.origin);
					var n = t.dot(this.direction),
						r = t.dot(t) - n * n,
						a = e.radius * e.radius;
					if (r > a) return null;
					var o = Math.sqrt(a - r),
						s = n - o,
						c = n + o;
					return s < 0 && c < 0 ? null : s < 0 ? this.at(c, i) : this.at(s, i)
				}
			}(),
			intersectsSphere: function(t) {
				return this.distanceToPoint(t.center) <= t.radius
			},
			distanceToPlane: function(t) {
				var e = t.normal.dot(this.direction);
				if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
				var i = -(this.origin.dot(t.normal) + t.constant) / e;
				return i >= 0 ? i : null
			},
			intersectPlane: function(t, e) {
				var i = this.distanceToPlane(t);
				return null === i ? null : this.at(i, e)
			},
			intersectsPlane: function(t) {
				var e = t.distanceToPoint(this.origin);
				if (0 === e) return !0;
				var i = t.normal.dot(this.direction);
				return i * e < 0
			},
			intersectBox: function(t, e) {
				var i, n, r, a, o, s, c = 1 / this.direction.x,
					h = 1 / this.direction.y,
					l = 1 / this.direction.z,
					u = this.origin;
				return c >= 0 ? (i = (t.min.x - u.x) * c, n = (t.max.x - u.x) * c) : (i = (t.max.x - u.x) *
						c, n = (t.min.x - u.x) * c), h >= 0 ? (r = (t.min.y - u.y) * h, a = (t.max.y - u
						.y) * h) : (r = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), i > a || r > n ?
					null : ((r > i || i !== i) && (i = r), (a < n || n !== n) && (n = a), l >= 0 ? (o = (t
						.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t
						.min.z - u.z) * l), i > s || o > n ? null : ((o > i || i !== i) && (i = o), (s <
						n || n !== n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
			},
			intersectsBox: function() {
				var t = new a;
				return function(e) {
					return null !== this.intersectBox(e, t)
				}
			}(),
			intersectTriangle: function() {
				var t = new a,
					e = new a,
					i = new a,
					n = new a;
				return function(r, a, o, s, c) {
					e.subVectors(a, r), i.subVectors(o, r), n.crossVectors(e, i);
					var h, l = this.direction.dot(n);
					if (l > 0) {
						if (s) return null;
						h = 1
					} else {
						if (!(l < 0)) return null;
						h = -1, l = -l
					}
					t.subVectors(this.origin, r);
					var u = h * this.direction.dot(i.crossVectors(t, i));
					if (u < 0) return null;
					var p = h * this.direction.dot(e.cross(t));
					if (p < 0) return null;
					if (u + p > l) return null;
					var d = -h * t.dot(n);
					return d < 0 ? null : this.at(d / l, c)
				}
			}(),
			applyMatrix4: function(t) {
				return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
			},
			equals: function(t) {
				return t.origin.equals(this.origin) && t.direction.equals(this.direction)
			}
		}), Object.assign(Dt.prototype, {
			set: function(t, e) {
				return this.start.copy(t), this.end.copy(e), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.start.copy(t.start), this.end.copy(t.end), this
			},
			getCenter: function(t) {
				var e = t || new a;
				return e.addVectors(this.start, this.end).multiplyScalar(.5)
			},
			delta: function(t) {
				var e = t || new a;
				return e.subVectors(this.end, this.start)
			},
			distanceSq: function() {
				return this.start.distanceToSquared(this.end)
			},
			distance: function() {
				return this.start.distanceTo(this.end)
			},
			at: function(t, e) {
				var i = e || new a;
				return this.delta(i).multiplyScalar(t).add(this.start)
			},
			closestPointToPointParameter: function() {
				var t = new a,
					e = new a;
				return function(i, n) {
					t.subVectors(i, this.start), e.subVectors(this.end, this.start);
					var r = e.dot(e),
						a = e.dot(t),
						o = a / r;
					return n && (o = Ps.clamp(o, 0, 1)), o
				}
			}(),
			closestPointToPoint: function(t, e, i) {
				var n = this.closestPointToPointParameter(t, e),
					r = i || new a;
				return this.delta(r).multiplyScalar(n).add(this.start)
			},
			applyMatrix4: function(t) {
				return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
			},
			equals: function(t) {
				return t.start.equals(this.start) && t.end.equals(this.end)
			}
		}), Object.assign(Ot, {
			normal: function() {
				var t = new a;
				return function(e, i, n, r) {
					var o = r || new a;
					o.subVectors(n, i), t.subVectors(e, i), o.cross(t);
					var s = o.lengthSq();
					return s > 0 ? o.multiplyScalar(1 / Math.sqrt(s)) : o.set(0, 0, 0)
				}
			}(),
			barycoordFromPoint: function() {
				var t = new a,
					e = new a,
					i = new a;
				return function(n, r, o, s, c) {
					t.subVectors(s, r), e.subVectors(o, r), i.subVectors(n, r);
					var h = t.dot(t),
						l = t.dot(e),
						u = t.dot(i),
						p = e.dot(e),
						d = e.dot(i),
						f = h * p - l * l,
						m = c || new a;
					if (0 === f) return m.set(-2, -1, -1);
					var g = 1 / f,
						v = (p * u - l * d) * g,
						y = (h * d - l * u) * g;
					return m.set(1 - v - y, y, v)
				}
			}(),
			containsPoint: function() {
				var t = new a;
				return function(e, i, n, r) {
					var a = Ot.barycoordFromPoint(e, i, n, r, t);
					return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
				}
			}()
		}), Object.assign(Ot.prototype, {
			set: function(t, e, i) {
				return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
			},
			setFromPointsAndIndices: function(t, e, i, n) {
				return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
			},
			area: function() {
				var t = new a,
					e = new a;
				return function() {
					return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e)
						.length()
				}
			}(),
			midpoint: function(t) {
				var e = t || new a;
				return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
			},
			normal: function(t) {
				return Ot.normal(this.a, this.b, this.c, t)
			},
			plane: function(t) {
				var e = t || new nt;
				return e.setFromCoplanarPoints(this.a, this.b, this.c)
			},
			barycoordFromPoint: function(t, e) {
				return Ot.barycoordFromPoint(t, this.a, this.b, this.c, e)
			},
			containsPoint: function(t) {
				return Ot.containsPoint(t, this.a, this.b, this.c)
			},
			closestPointToPoint: function() {
				var t = new nt,
					e = [new Dt, new Dt, new Dt],
					i = new a,
					n = new a;
				return function(r, o) {
					var s = o || new a,
						c = 1 / 0;
					if (t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(r, i), this
						.containsPoint(i) === !0) s.copy(i);
					else {
						e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a);
						for (var h = 0; h < e.length; h++) {
							e[h].closestPointToPoint(i, !0, n);
							var l = i.distanceToSquared(n);
							l < c && (c = l, s.copy(n))
						}
					}
					return s
				}
			}(),
			equals: function(t) {
				return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
			}
		}), Nt.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Nt,
			isMesh: !0,
			setDrawMode: function(t) {
				this.drawMode = t
			},
			copy: function(t) {
				return ht.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t
					.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences
						.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary =
						Object
						.assign({}, t.morphTargetDictionary)), this
			},
			updateMorphTargets: function() {
				var t, e, i, n = this.geometry;
				if (n.isBufferGeometry) {
					var r = n.morphAttributes,
						a = Object.keys(r);
					if (a.length > 0) {
						var o = r[a[0]];
						if (void 0 !== o)
							for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0,
								e = o.length; t < e; t++) i = o[t].name || String(t), this
								.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
					}
				} else {
					var s = n.morphTargets;
					if (void 0 !== s && s.length > 0)
						for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s
							.length; t < e; t++) i = s[t].name || String(t), this.morphTargetInfluences
							.push(0), this.morphTargetDictionary[i] = t
				}
			},
			raycast: function() {
				function t(t, e, i, n, r, a, o) {
					return Ot.barycoordFromPoint(t, e, i, n, y), r.multiplyScalar(y.x), a.multiplyScalar(y
						.y), o.multiplyScalar(y.z), r.add(a).add(o), r.clone()
				}

				function e(t, e, i, n, r, a, o, s) {
					var c;
					if (c = e.side === Ea ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a,
							o, e.side !== Ta, s), null === c) return null;
					b.copy(s), b.applyMatrix4(t.matrixWorld);
					var h = i.ray.origin.distanceTo(b);
					return h < i.near || h > i.far ? null : {
						distance: h,
						point: b.clone(),
						object: t
					}
				}

				function r(i, n, r, a, o, s, c, p) {
					h.fromBufferAttribute(a, s), l.fromBufferAttribute(a, c), u.fromBufferAttribute(a, p);
					var d = e(i, i.material, n, r, h, l, u, x);
					return d && (o && (m.fromBufferAttribute(o, s), g.fromBufferAttribute(o, c), v
						.fromBufferAttribute(o, p), d.uv = t(x, h, l, u, m, g, v)), d.face = new pt(
						s, c, p, Ot.normal(h, l, u)), d.faceIndex = s), d
				}
				var o = new n,
					s = new Ut,
					c = new it,
					h = new a,
					l = new a,
					u = new a,
					p = new a,
					d = new a,
					f = new a,
					m = new i,
					g = new i,
					v = new i,
					y = new a,
					x = new a,
					b = new a;
				return function(i, n) {
					var a = this.geometry,
						y = this.material,
						b = this.matrixWorld;
					if (void 0 !== y && (null === a.boundingSphere && a.computeBoundingSphere(), c.copy(
								a.boundingSphere), c.applyMatrix4(b), i.ray.intersectsSphere(c) !== !
							1 && (o.getInverse(b), s.copy(i.ray).applyMatrix4(o), null === a
								.boundingBox || s.intersectsBox(a.boundingBox) !== !1))) {
						var _;
						if (a.isBufferGeometry) {
							var w, M, E, T, S, A = a.index,
								R = a.attributes.position,
								L = a.attributes.uv;
							if (null !== A)
								for (T = 0, S = A.count; T < S; T += 3) w = A.getX(T), M = A.getX(T +
									1), E = A.getX(T + 2), _ = r(this, i, s, R, L, w, M, E), _ && (_
									.faceIndex = Math.floor(T / 3), n.push(_));
							else if (void 0 !== R)
								for (T = 0, S = R.count; T < S; T += 3) w = T, M = T + 1, E = T + 2, _ =
									r(this, i, s, R, L, w, M, E), _ && (_.index = w, n.push(_))
						} else if (a.isGeometry) {
							var P, C, I, U, D = Array.isArray(y),
								O = a.vertices,
								N = a.faces,
								F = a.faceVertexUvs[0];
							F.length > 0 && (U = F);
							for (var B = 0, z = N.length; B < z; B++) {
								var G = N[B],
									H = D ? y[G.materialIndex] : y;
								if (void 0 !== H) {
									if (P = O[G.a], C = O[G.b], I = O[G.c], H.morphTargets === !0) {
										var V = a.morphTargets,
											k = this.morphTargetInfluences;
										h.set(0, 0, 0), l.set(0, 0, 0), u.set(0, 0, 0);
										for (var j = 0, W = V.length; j < W; j++) {
											var X = k[j];
											if (0 !== X) {
												var q = V[j].vertices;
												h.addScaledVector(p.subVectors(q[G.a], P), X), l
													.addScaledVector(d.subVectors(q[G.b], C), X), u
													.addScaledVector(f.subVectors(q[G.c], I), X)
											}
										}
										h.add(P), l.add(C), u.add(I), P = h, C = l, I = u
									}
									if (_ = e(this, H, i, s, P, C, I, x)) {
										if (U && U[B]) {
											var Y = U[B];
											m.copy(Y[0]), g.copy(Y[1]), v.copy(Y[2]), _.uv = t(x, P, C,
												I, m, g, v)
										}
										_.face = G, _.faceIndex = B, n.push(_)
									}
								}
							}
						}
					}
				}
			}(),
			clone: function() {
				return new this.constructor(this.geometry, this.material).copy(this)
			}
		});
	var Zh = 0;
	me.prototype = Object.assign(Object.create(lt.prototype), {
			constructor: me,
			isPerspectiveCamera: !0,
			copy: function(t, e) {
				return lt.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near =
					t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view =
					null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this
					.filmOffset = t.filmOffset, this
			},
			setFocalLength: function(t) {
				var e = .5 * this.getFilmHeight() / t;
				this.fov = 2 * Ps.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
			},
			getFocalLength: function() {
				var t = Math.tan(.5 * Ps.DEG2RAD * this.fov);
				return .5 * this.getFilmHeight() / t
			},
			getEffectiveFOV: function() {
				return 2 * Ps.RAD2DEG * Math.atan(Math.tan(.5 * Ps.DEG2RAD * this.fov) / this.zoom)
			},
			getFilmWidth: function() {
				return this.filmGauge * Math.min(this.aspect, 1)
			},
			getFilmHeight: function() {
				return this.filmGauge / Math.max(this.aspect, 1)
			},
			setViewOffset: function(t, e, i, n, r, a) {
				this.aspect = t / e, null === this.view && (this.view = {
						enabled: !0,
						fullWidth: 1,
						fullHeight: 1,
						offsetX: 0,
						offsetY: 0,
						width: 1,
						height: 1
					}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view
					.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this
					.updateProjectionMatrix()
			},
			clearViewOffset: function() {
				null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
			},
			updateProjectionMatrix: function() {
				var t = this.near,
					e = t * Math.tan(.5 * Ps.DEG2RAD * this.fov) / this.zoom,
					i = 2 * e,
					n = this.aspect * i,
					r = -.5 * n,
					a = this.view;
				if (null !== this.view && this.view.enabled) {
					var o = a.fullWidth,
						s = a.fullHeight;
					r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
				}
				var c = this.filmOffset;
				0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r +
					n, e, e - i, t, this.far)
			},
			toJSON: function(t) {
				var e = ht.prototype.toJSON.call(this, t);
				return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e
					.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect,
					null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object
					.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
			}
		}), ge.prototype = Object.assign(Object.create(me.prototype), {
			constructor: ge,
			isArrayCamera: !0
		}), we.prototype.isFogExp2 = !0, we.prototype.clone = function() {
			return new we(this.color.getHex(), this.density)
		}, we.prototype.toJSON = function() {
			return {
				type: "FogExp2",
				color: this.color.getHex(),
				density: this.density
			}
		}, Me.prototype.isFog = !0, Me.prototype.clone = function() {
			return new Me(this.color.getHex(), this.near, this.far)
		}, Me.prototype.toJSON = function() {
			return {
				type: "Fog",
				color: this.color.getHex(),
				near: this.near,
				far: this.far
			}
		}, Ee.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Ee,
			copy: function(t, e) {
				return ht.prototype.copy.call(this, t, e), null !== t.background && (this.background = t
						.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t
					.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this
					.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
			},
			toJSON: function(t) {
				var e = ht.prototype.toJSON.call(this, t);
				return null !== this.background && (e.object.background = this.background.toJSON(t)),
					null !== this.fog && (e.object.fog = this.fog.toJSON()), e
			}
		}), Te.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Te,
			isLensFlare: !0,
			copy: function(t) {
				ht.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this
					.customUpdateCallback = t.customUpdateCallback;
				for (var e = 0, i = t.lensFlares.length; e < i; e++) this.lensFlares.push(t.lensFlares[e]);
				return this
			},
			add: function(t, e, i, n, r, a) {
				void 0 === e && (e = -1), void 0 === i && (i = 0), void 0 === a && (a = 1), void 0 === r &&
					(r = new q(16777215)), void 0 === n && (n = Ia), i = Math.min(i, Math.max(0, i)), this
					.lensFlares.push({
						texture: t,
						size: e,
						distance: i,
						x: 0,
						y: 0,
						z: 0,
						scale: 1,
						rotation: 0,
						opacity: a,
						color: r,
						blending: n
					})
			},
			updateLensFlares: function() {
				var t, e, i = this.lensFlares.length,
					n = 2 * -this.positionScreen.x,
					r = 2 * -this.positionScreen.y;
				for (t = 0; t < i; t++) e = this.lensFlares[t], e.x = this.positionScreen.x + n * e
					.distance, e.y = this.positionScreen.y + r * e.distance, e.wantedRotation = e.x * Math
					.PI * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
			}
		}), Se.prototype = Object.create(K.prototype), Se.prototype.constructor = Se, Se.prototype
		.isSpriteMaterial = !0, Se.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t
				.rotation, this
		}, Ae.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Ae,
			isSprite: !0,
			raycast: function() {
				var t = new a,
					e = new a,
					i = new a;
				return function(n, r) {
					e.setFromMatrixPosition(this.matrixWorld), n.ray.closestPointToPoint(e, t), i
						.setFromMatrixScale(this.matrixWorld);
					var a = i.x * i.y / 4;
					if (!(e.distanceToSquared(t) > a)) {
						var o = n.ray.origin.distanceTo(t);
						o < n.near || o > n.far || r.push({
							distance: o,
							point: t.clone(),
							face: null,
							object: this
						})
					}
				}
			}(),
			clone: function() {
				return new this.constructor(this.material).copy(this)
			}
		}), Re.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Re,
			copy: function(t) {
				ht.prototype.copy.call(this, t, !1);
				for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
					var r = e[i];
					this.addLevel(r.object.clone(), r.distance)
				}
				return this
			},
			addLevel: function(t, e) {
				void 0 === e && (e = 0), e = Math.abs(e);
				for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
				i.splice(n, 0, {
					distance: e,
					object: t
				}), this.add(t)
			},
			getObjectForDistance: function(t) {
				for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
				return e[i - 1].object
			},
			raycast: function() {
				var t = new a;
				return function(e, i) {
					t.setFromMatrixPosition(this.matrixWorld);
					var n = e.ray.origin.distanceTo(t);
					this.getObjectForDistance(n).raycast(e, i)
				}
			}(),
			update: function() {
				var t = new a,
					e = new a;
				return function(i) {
					var n = this.levels;
					if (n.length > 1) {
						t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this
							.matrixWorld);
						var r = t.distanceTo(e);
						n[0].object.visible = !0;
						for (var a = 1, o = n.length; a < o && r >= n[a].distance; a++) n[a - 1].object
							.visible = !1, n[a].object.visible = !0;
						for (; a < o; a++) n[a].object.visible = !1
					}
				}
			}(),
			toJSON: function(t) {
				var e = ht.prototype.toJSON.call(this, t);
				e.object.levels = [];
				for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
					var a = i[n];
					e.object.levels.push({
						object: a.object.uuid,
						distance: a.distance
					})
				}
				return e
			}
		}), Object.assign(Le.prototype, {
			calculateInverses: function() {
				this.boneInverses = [];
				for (var t = 0, e = this.bones.length; t < e; t++) {
					var i = new n;
					this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
				}
			},
			pose: function() {
				var t, e, i;
				for (e = 0, i = this.bones.length; e < i; e++) t = this.bones[e], t && t.matrixWorld
					.getInverse(this.boneInverses[e]);
				for (e = 0, i = this.bones.length; e < i; e++) t = this.bones[e], t && (t.parent && t.parent
					.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t
						.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t
						.quaternion, t.scale))
			},
			update: function() {
				var t = new n,
					e = new n;
				return function() {
					for (var i = this.bones, n = this.boneInverses, r = this.boneMatrices, a = this
							.boneTexture, o = 0, s = i.length; o < s; o++) {
						var c = i[o] ? i[o].matrixWorld : e;
						t.multiplyMatrices(c, n[o]), t.toArray(r, 16 * o)
					}
					void 0 !== a && (a.needsUpdate = !0)
				}
			}(),
			clone: function() {
				return new Le(this.bones, this.boneInverses)
			}
		}), Pe.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Pe,
			isBone: !0
		}), Ce.prototype = Object.assign(Object.create(Nt.prototype), {
			constructor: Ce,
			isSkinnedMesh: !0,
			initBones: function() {
				var t, e, i, n, r = [];
				if (this.geometry && void 0 !== this.geometry.bones) {
					for (i = 0, n = this.geometry.bones.length; i < n; i++) e = this.geometry.bones[i], t =
						new Pe, r.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion
						.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl);
					for (i = 0, n = this.geometry.bones.length; i < n; i++) e = this.geometry.bones[i], e
						.parent !== -1 && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[
							i]) : this.add(r[i])
				}
				return this.updateMatrixWorld(!0), r
			},
			bind: function(t, e) {
				this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton
						.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this
					.bindMatrixInverse.getInverse(e)
			},
			pose: function() {
				this.skeleton.pose()
			},
			normalizeSkinWeights: function() {
				var t, e;
				if (this.geometry && this.geometry.isGeometry)
					for (e = 0; e < this.geometry.skinWeights.length; e++) {
						var i = this.geometry.skinWeights[e];
						t = 1 / i.manhattanLength(), t !== 1 / 0 ? i.multiplyScalar(t) : i.set(1, 0, 0, 0)
					} else if (this.geometry && this.geometry.isBufferGeometry) {
						var n = new c,
							r = this.geometry.attributes.skinWeight;
						for (e = 0; e < r.count; e++) n.x = r.getX(e), n.y = r.getY(e), n.z = r.getZ(e), n
							.w = r.getW(e), t = 1 / n.manhattanLength(), t !== 1 / 0 ? n.multiplyScalar(t) :
							n.set(1, 0, 0, 0), r.setXYZW(e, n.x, n.y, n.z, n.w)
					}
			},
			updateMatrixWorld: function(t) {
				Nt.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this
					.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this
					.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn(
						"THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
			},
			clone: function() {
				return new this.constructor(this.geometry, this.material).copy(this)
			}
		}), Ie.prototype = Object.create(K.prototype), Ie.prototype.constructor = Ie, Ie.prototype
		.isLineBasicMaterial = !0, Ie.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this
				.linecap = t.linecap, this.linejoin = t.linejoin, this
		}, Ue.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Ue,
			isLine: !0,
			raycast: function() {
				var t = new n,
					e = new Ut,
					i = new it;
				return function(n, r) {
					var o = n.linePrecision,
						s = o * o,
						c = this.geometry,
						h = this.matrixWorld;
					if (null === c.boundingSphere && c.computeBoundingSphere(), i.copy(c
							.boundingSphere), i.applyMatrix4(h), n.ray.intersectsSphere(i) !== !1) {
						t.getInverse(h), e.copy(n.ray).applyMatrix4(t);
						var l = new a,
							u = new a,
							p = new a,
							d = new a,
							f = this && this.isLineSegments ? 2 : 1;
						if (c.isBufferGeometry) {
							var m = c.index,
								g = c.attributes,
								v = g.position.array;
							if (null !== m)
								for (var y = m.array, x = 0, b = y.length - 1; x < b; x += f) {
									var _ = y[x],
										w = y[x + 1];
									l.fromArray(v, 3 * _), u.fromArray(v, 3 * w);
									var M = e.distanceSqToSegment(l, u, d, p);
									if (!(M > s)) {
										d.applyMatrix4(this.matrixWorld);
										var E = n.ray.origin.distanceTo(d);
										E < n.near || E > n.far || r.push({
											distance: E,
											point: p.clone().applyMatrix4(this.matrixWorld),
											index: x,
											face: null,
											faceIndex: null,
											object: this
										})
									}
								} else
									for (var x = 0, b = v.length / 3 - 1; x < b; x += f) {
										l.fromArray(v, 3 * x), u.fromArray(v, 3 * x + 3);
										var M = e.distanceSqToSegment(l, u, d, p);
										if (!(M > s)) {
											d.applyMatrix4(this.matrixWorld);
											var E = n.ray.origin.distanceTo(d);
											E < n.near || E > n.far || r.push({
												distance: E,
												point: p.clone().applyMatrix4(this.matrixWorld),
												index: x,
												face: null,
												faceIndex: null,
												object: this
											})
										}
									}
						} else if (c.isGeometry)
							for (var T = c.vertices, S = T.length, x = 0; x < S - 1; x += f) {
								var M = e.distanceSqToSegment(T[x], T[x + 1], d, p);
								if (!(M > s)) {
									d.applyMatrix4(this.matrixWorld);
									var E = n.ray.origin.distanceTo(d);
									E < n.near || E > n.far || r.push({
										distance: E,
										point: p.clone().applyMatrix4(this.matrixWorld),
										index: x,
										face: null,
										faceIndex: null,
										object: this
									})
								}
							}
					}
				}
			}(),
			clone: function() {
				return new this.constructor(this.geometry, this.material).copy(this)
			}
		}), De.prototype = Object.assign(Object.create(Ue.prototype), {
			constructor: De,
			isLineSegments: !0
		}), Oe.prototype = Object.assign(Object.create(Ue.prototype), {
			constructor: Oe,
			isLineLoop: !0
		}), Ne.prototype = Object.create(K.prototype), Ne.prototype.constructor = Ne, Ne.prototype
		.isPointsMaterial = !0, Ne.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size,
				this.sizeAttenuation = t.sizeAttenuation, this
		}, Fe.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Fe,
			isPoints: !0,
			raycast: function() {
				var t = new n,
					e = new Ut,
					i = new it;
				return function(n, r) {
					function o(t, i) {
						var a = e.distanceSqToPoint(t);
						if (a < p) {
							var o = e.closestPointToPoint(t);
							o.applyMatrix4(h);
							var c = n.ray.origin.distanceTo(o);
							if (c < n.near || c > n.far) return;
							r.push({
								distance: c,
								distanceToRay: Math.sqrt(a),
								point: o.clone(),
								index: i,
								face: null,
								object: s
							})
						}
					}
					var s = this,
						c = this.geometry,
						h = this.matrixWorld,
						l = n.params.Points.threshold;
					if (null === c.boundingSphere && c.computeBoundingSphere(), i.copy(c
							.boundingSphere), i.applyMatrix4(h), i.radius += l, n.ray.intersectsSphere(
							i) !== !1) {
						t.getInverse(h), e.copy(n.ray).applyMatrix4(t);
						var u = l / ((this.scale.x + this.scale.y + this.scale.z) / 3),
							p = u * u,
							d = new a;
						if (c.isBufferGeometry) {
							var f = c.index,
								m = c.attributes,
								g = m.position.array;
							if (null !== f)
								for (var v = f.array, y = 0, x = v.length; y < x; y++) {
									var b = v[y];
									d.fromArray(g, 3 * b), o(d, b)
								} else
									for (var y = 0, _ = g.length / 3; y < _; y++) d.fromArray(g, 3 * y),
										o(d, y)
						} else
							for (var w = c.vertices, y = 0, _ = w.length; y < _; y++) o(w[y], y)
					}
				}
			}(),
			clone: function() {
				return new this.constructor(this.geometry, this.material).copy(this)
			}
		}), Be.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: Be
		}), ze.prototype = Object.create(s.prototype), ze.prototype.constructor = ze, Ge.prototype = Object.create(s
			.prototype), Ge.prototype.constructor = Ge, Ge.prototype.isCompressedTexture = !0, He.prototype = Object
		.create(s.prototype), He.prototype.constructor = He, He.prototype.isDepthTexture = !0, Ve.prototype = Object
		.create(St.prototype), Ve.prototype.constructor = Ve, ke.prototype = Object.create(dt.prototype), ke
		.prototype.constructor = ke, je.prototype = Object.create(St.prototype), je.prototype.constructor = je, We
		.prototype = Object.create(dt.prototype), We.prototype.constructor = We, Xe.prototype = Object.create(St
			.prototype), Xe.prototype.constructor = Xe, qe.prototype = Object.create(dt.prototype), qe.prototype
		.constructor = qe, Ye.prototype = Object.create(Xe.prototype), Ye.prototype.constructor = Ye, Ze.prototype =
		Object.create(dt.prototype), Ze.prototype.constructor = Ze, Je.prototype = Object.create(Xe.prototype), Je
		.prototype.constructor = Je, Qe.prototype = Object.create(dt.prototype), Qe.prototype.constructor = Qe, Ke
		.prototype = Object.create(Xe.prototype), Ke.prototype.constructor = Ke, $e.prototype = Object.create(dt
			.prototype), $e.prototype.constructor = $e, ti.prototype = Object.create(Xe.prototype), ti.prototype
		.constructor = ti, ei.prototype = Object.create(dt.prototype), ei.prototype.constructor = ei, ii.prototype =
		Object.create(St.prototype), ii.prototype.constructor = ii, ni.prototype = Object.create(dt.prototype), ni
		.prototype.constructor = ni, ri.prototype = Object.create(St.prototype), ri.prototype.constructor = ri, ai
		.prototype = Object.create(dt.prototype), ai.prototype.constructor = ai, oi.prototype = Object.create(St
			.prototype), oi.prototype.constructor = oi;
	var Jh = {
		area: function(t) {
			for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x *
				t[n].y;
			return .5 * i
		},
		triangulate: function() {
			function t(t, e, i, n, r, a) {
				var o, s, c, h, l, u, p, d, f;
				if (s = t[a[e]].x, c = t[a[e]].y, h = t[a[i]].x, l = t[a[i]].y, u = t[a[n]].x, p = t[a[n]]
					.y, (h - s) * (p - c) - (l - c) * (u - s) <= 0) return !1;
				var m, g, v, y, x, b, _, w, M, E, T, S, A, R, L;
				for (m = u - h, g = p - l, v = s - u, y = c - p, x = h - s, b = l - c, o = 0; o < r; o++)
					if (d = t[a[o]].x, f = t[a[o]].y, !(d === s && f === c || d === h && f === l || d ===
							u && f === p) && (_ = d - s, w = f - c, M = d - h, E = f - l, T = d - u, S = f -
							p, L = m * E - g * M, A = x * w - b * _, R = v * S - y * T, L >= -Number
							.EPSILON && R >= -Number.EPSILON && A >= -Number.EPSILON)) return !1;
				return !0
			}
			return function(e, i) {
				var n = e.length;
				if (n < 3) return null;
				var r, a, o, s = [],
					c = [],
					h = [];
				if (Jh.area(e) > 0)
					for (a = 0; a < n; a++) c[a] = a;
				else
					for (a = 0; a < n; a++) c[a] = n - 1 - a;
				var l = n,
					u = 2 * l;
				for (a = l - 1; l > 2;) {
					if (u-- <= 0) return console.warn(
							"THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),
						i ? h : s;
					if (r = a, l <= r && (r = 0), a = r + 1, l <= a && (a = 0), o = a + 1, l <= o && (
							o = 0), t(e, r, a, o, l, c)) {
						var p, d, f, m, g;
						for (p = c[r], d = c[a], f = c[o], s.push([e[p], e[d], e[f]]), h.push([c[r], c[
								a], c[o]]), m = a, g = a + 1; g < l; m++, g++) c[m] = c[g];
						l--, u = 2 * l
					}
				}
				return i ? h : s
			}
		}(),
		triangulateShape: function(t, e) {
			function i(t) {
				var e = t.length;
				e > 2 && t[e - 1].equals(t[0]) && t.pop()
			}

			function n(t, e, i) {
				return t.x !== e.x ? t.x < e.x ? t.x <= i.x && i.x <= e.x : e.x <= i.x && i.x <= t.x : t.y <
					e.y ? t.y <= i.y && i.y <= e.y : e.y <= i.y && i.y <= t.y
			}

			function r(t, e, i, r, a) {
				var o = e.x - t.x,
					s = e.y - t.y,
					c = r.x - i.x,
					h = r.y - i.y,
					l = t.x - i.x,
					u = t.y - i.y,
					p = s * c - o * h,
					d = s * l - o * u;
				if (Math.abs(p) > Number.EPSILON) {
					var f;
					if (p > 0) {
						if (d < 0 || d > p) return [];
						if (f = h * l - c * u, f < 0 || f > p) return []
					} else {
						if (d > 0 || d < p) return [];
						if (f = h * l - c * u, f > 0 || f < p) return []
					}
					if (0 === f) return !a || 0 !== d && d !== p ? [t] : [];
					if (f === p) return !a || 0 !== d && d !== p ? [e] : [];
					if (0 === d) return [i];
					if (d === p) return [r];
					var m = f / p;
					return [{
						x: t.x + m * o,
						y: t.y + m * s
					}]
				}
				if (0 !== d || h * l !== c * u) return [];
				var g = 0 === o && 0 === s,
					v = 0 === c && 0 === h;
				if (g && v) return t.x !== i.x || t.y !== i.y ? [] : [t];
				if (g) return n(i, r, t) ? [t] : [];
				if (v) return n(t, e, i) ? [i] : [];
				var y, x, b, _, w, M, E, T;
				return 0 !== o ? (t.x < e.x ? (y = t, b = t.x, x = e, _ = e.x) : (y = e, b = e.x, x = t, _ =
						t.x), i.x < r.x ? (w = i, E = i.x, M = r, T = r.x) : (w = r, E = r.x, M = i, T =
						i.x)) : (t.y < e.y ? (y = t, b = t.y, x = e, _ = e.y) : (y = e, b = e.y, x = t, _ =
						t.y), i.y < r.y ? (w = i, E = i.y, M = r, T = r.y) : (w = r, E = r.y, M = i, T =
						i.y)), b <= E ? _ < E ? [] : _ === E ? a ? [] : [w] : _ <= T ? [w, x] : [w, M] : b >
					T ? [] : b === T ? a ? [] : [y] : _ <= T ? [y, x] : [y, M]
			}

			function a(t, e, i, n) {
				var r = e.x - t.x,
					a = e.y - t.y,
					o = i.x - t.x,
					s = i.y - t.y,
					c = n.x - t.x,
					h = n.y - t.y,
					l = r * s - a * o,
					u = r * h - a * c;
				if (Math.abs(l) > Number.EPSILON) {
					var p = c * s - h * o;
					return l > 0 ? u >= 0 && p >= 0 : u >= 0 || p >= 0
				}
				return u > 0
			}

			function o(t, e) {
				function i(t, e) {
					var i = y.length - 1,
						n = t - 1;
					n < 0 && (n = i);
					var r = t + 1;
					r > i && (r = 0);
					var o = a(y[t], y[n], y[r], s[e]);
					if (!o) return !1;
					var c = s.length - 1,
						h = e - 1;
					h < 0 && (h = c);
					var l = e + 1;
					return l > c && (l = 0), o = a(s[e], s[h], s[l], y[t]), !!o
				}

				function n(t, e) {
					var i, n, a;
					for (i = 0; i < y.length; i++)
						if (n = i + 1, n %= y.length, a = r(t, e, y[i], y[n], !0), a.length > 0) return !0;
					return !1
				}

				function o(t, i) {
					var n, a, o, s, c;
					for (n = 0; n < x.length; n++)
						for (a = e[x[n]], o = 0; o < a.length; o++)
							if (s = o + 1, s %= a.length, c = r(t, i, a[o], a[s], !0), c.length > 0)
								return !0;
					return !1
				}
				for (var s, c, h, l, u, p, d, f, m, g, v, y = t.concat(), x = [], b = [], _ = 0, w = e
						.length; _ < w; _++) x.push(_);
				for (var M = 0, E = 2 * x.length; x.length > 0;) {
					if (E--, E < 0) {
						console.log(
							'THREE.ShapeUtils: Infinite Loop! Holes left:" + indepHoles.length + ", Probably Hole outside Shape!'
						);
						break
					}
					for (h = M; h < y.length; h++) {
						l = y[h], c = -1;
						for (var _ = 0; _ < x.length; _++)
							if (p = x[_], d = l.x + ":" + l.y + ":" + p, void 0 === b[d]) {
								s = e[p];
								for (var T = 0; T < s.length; T++)
									if (u = s[T], i(h, T) && !n(l, u) && !o(l, u)) {
										c = T, x.splice(_, 1), f = y.slice(0, h + 1), m = y.slice(h), g = s
											.slice(c), v = s.slice(0, c + 1), y = f.concat(g).concat(v)
											.concat(m), M = h;
										break
									} if (c >= 0) break;
								b[d] = !0
							} if (c >= 0) break
					}
				}
				return y
			}
			i(t), e.forEach(i);
			for (var s, c, h, l, u, p, d = {}, f = t.concat(), m = 0, g = e.length; m < g; m++) Array
				.prototype.push.apply(f, e[m]);
			for (s = 0, c = f.length; s < c; s++) u = f[s].x + ":" + f[s].y, void 0 !== d[u] && console
				.warn("THREE.ShapeUtils: Duplicate point", u, s), d[u] = s;
			var v = o(t, e),
				y = Jh.triangulate(v, !1);
			for (s = 0, c = y.length; s < c; s++)
				for (l = y[s], h = 0; h < 3; h++) u = l[h].x + ":" + l[h].y, p = d[u], void 0 !== p && (l[
					h] = p);
			return y.concat()
		},
		isClockWise: function(t) {
			return Jh.area(t) < 0
		}
	};
	si.prototype = Object.create(dt.prototype), si.prototype.constructor = si, ci.prototype = Object.create(St
			.prototype), ci.prototype.constructor = ci, ci.prototype.getArrays = function() {
			var t = this.getAttribute("position"),
				e = t ? Array.prototype.slice.call(t.array) : [],
				i = this.getAttribute("uv"),
				n = i ? Array.prototype.slice.call(i.array) : [],
				r = this.index,
				a = r ? Array.prototype.slice.call(r.array) : [];
			return {
				position: e,
				uv: n,
				index: a
			}
		}, ci.prototype.addShapeList = function(t, e) {
			var i = t.length;
			e.arrays = this.getArrays();
			for (var n = 0; n < i; n++) {
				var r = t[n];
				this.addShape(r, e)
			}
			this.setIndex(e.arrays.index), this.addAttribute("position", new wt(e.arrays.position, 3)), this
				.addAttribute("uv", new wt(e.arrays.uv, 2))
		}, ci.prototype.addShape = function(t, e) {
			function n(t, e, i) {
				return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i)
					.add(t)
			}

			function r(t, e, n) {
				var r, a, o, s = t.x - e.x,
					c = t.y - e.y,
					h = n.x - t.x,
					l = n.y - t.y,
					u = s * s + c * c,
					p = s * l - c * h;
				if (Math.abs(p) > Number.EPSILON) {
					var d = Math.sqrt(u),
						f = Math.sqrt(h * h + l * l),
						m = e.x - c / d,
						g = e.y + s / d,
						v = n.x - l / f,
						y = n.y + h / f,
						x = ((v - m) * l - (y - g) * h) / (s * l - c * h);
					r = m + s * x - t.x, a = g + c * x - t.y;
					var b = r * r + a * a;
					if (b <= 2) return new i(r, a);
					o = Math.sqrt(b / 2)
				} else {
					var _ = !1;
					s > Number.EPSILON ? h > Number.EPSILON && (_ = !0) : s < -Number.EPSILON ? h < -Number
						.EPSILON && (_ = !0) : Math.sign(c) === Math.sign(l) && (_ = !0), _ ? (r = -c, a = s, o =
							Math.sqrt(u)) : (r = s, a = c, o = Math.sqrt(u / 2))
				}
				return new i(r / o, a / o)
			}

			function o() {
				var t = b.length / 3;
				if (R) {
					var i = 0,
						n = J * i;
					for ($ = 0; $ < Q; $++) Z = V[$], l(Z[2] + n, Z[1] + n, Z[0] + n);
					for (i = P + 2 * A, n = J * i, $ = 0; $ < Q; $++) Z = V[$], l(Z[0] + n, Z[1] + n, Z[2] + n)
				} else {
					for ($ = 0; $ < Q; $++) Z = V[$], l(Z[2], Z[1], Z[0]);
					for ($ = 0; $ < Q; $++) Z = V[$], l(Z[0] + J * P, Z[1] + J * P, Z[2] + J * P)
				}
				F.addGroup(t, b.length / 3 - t, void 0 !== e.material ? e.material : 0)
			}

			function s() {
				var t = b.length / 3,
					i = 0;
				for (c(k, i), i += k.length, O = 0, N = G.length; O < N; O++) D = G[O], c(D, i), i += D.length;
				F.addGroup(t, b.length / 3 - t, void 0 !== e.extrudeMaterial ? e.extrudeMaterial : 1)
			}

			function c(t, e) {
				var i, n;
				for ($ = t.length; --$ >= 0;) {
					i = $, n = $ - 1, n < 0 && (n = t.length - 1);
					var r = 0,
						a = P + 2 * A;
					for (r = 0; r < a; r++) {
						var o = J * r,
							s = J * (r + 1),
							c = e + i + o,
							h = e + n + o,
							l = e + n + s,
							p = e + i + s;
						u(c, h, l, p)
					}
				}
			}

			function h(t, e, i) {
				M.push(t), M.push(e), M.push(i)
			}

			function l(t, e, i) {
				p(t), p(e), p(i);
				var n = b.length / 3,
					r = U.generateTopUV(F, b, n - 3, n - 2, n - 1);
				d(r[0]), d(r[1]), d(r[2])
			}

			function u(t, e, i, n) {
				p(t), p(e), p(n), p(e), p(i), p(n);
				var r = b.length / 3,
					a = U.generateSideWallUV(F, b, r - 6, r - 3, r - 2, r - 1);
				d(a[0]), d(a[1]), d(a[3]), d(a[1]), d(a[2]), d(a[3])
			}

			function p(t) {
				_.push(b.length / 3), b.push(M[3 * t + 0]), b.push(M[3 * t + 1]), b.push(M[3 * t + 2])
			}

			function d(t) {
				w.push(t.x), w.push(t.y)
			}
			var f, m, g, v, y, x = e.arrays ? e.arrays : this.getArrays(),
				b = x.position,
				_ = x.index,
				w = x.uv,
				M = [],
				E = void 0 !== e.amount ? e.amount : 100,
				T = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
				S = void 0 !== e.bevelSize ? e.bevelSize : T - 2,
				A = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
				R = void 0 === e.bevelEnabled || e.bevelEnabled,
				L = void 0 !== e.curveSegments ? e.curveSegments : 12,
				P = void 0 !== e.steps ? e.steps : 1,
				C = e.extrudePath,
				I = !1,
				U = void 0 !== e.UVGenerator ? e.UVGenerator : si.WorldUVGenerator;
			C && (f = C.getSpacedPoints(P), I = !0, R = !1, m = void 0 !== e.frames ? e.frames : C
				.computeFrenetFrames(P, !1), g = new a, v = new a, y = new a), R || (A = 0, T = 0, S = 0);
			var D, O, N, F = this,
				B = t.extractPoints(L),
				z = B.shape,
				G = B.holes,
				H = !Jh.isClockWise(z);
			if (H)
				for (z = z.reverse(), O = 0, N = G.length; O < N; O++) D = G[O], Jh.isClockWise(D) && (G[O] = D
					.reverse());
			var V = Jh.triangulateShape(z, G),
				k = z;
			for (O = 0, N = G.length; O < N; O++) D = G[O], z = z.concat(D);
			for (var j, W, X, q, Y, Z, J = z.length, Q = V.length, K = [], $ = 0, tt = k.length, et = tt - 1, it =
					$ + 1; $ < tt; $++, et++, it++) et === tt && (et = 0), it === tt && (it = 0), K[$] = r(k[$], k[
				et], k[it]);
			var nt, rt = [],
				at = K.concat();
			for (O = 0, N = G.length; O < N; O++) {
				for (D = G[O], nt = [], $ = 0, tt = D.length, et = tt - 1, it = $ + 1; $ < tt; $++, et++, it++)
					et === tt && (et = 0), it === tt && (it = 0), nt[$] = r(D[$], D[et], D[it]);
				rt.push(nt), at = at.concat(nt)
			}
			for (j = 0; j < A; j++) {
				for (X = j / A, q = T * Math.cos(X * Math.PI / 2), W = S * Math.sin(X * Math.PI / 2), $ = 0, tt = k
					.length; $ < tt; $++) Y = n(k[$], K[$], W), h(Y.x, Y.y, -q);
				for (O = 0, N = G.length; O < N; O++)
					for (D = G[O], nt = rt[O], $ = 0, tt = D.length; $ < tt; $++) Y = n(D[$], nt[$], W), h(Y.x, Y.y,
						-q)
			}
			for (W = S, $ = 0; $ < J; $++) Y = R ? n(z[$], at[$], W) : z[$], I ? (v.copy(m.normals[0])
				.multiplyScalar(Y.x), g.copy(m.binormals[0]).multiplyScalar(Y.y), y.copy(f[0]).add(v).add(g), h(
					y.x, y.y, y.z)) : h(Y.x, Y.y, 0);
			var ot;
			for (ot = 1; ot <= P; ot++)
				for ($ = 0; $ < J; $++) Y = R ? n(z[$], at[$], W) : z[$], I ? (v.copy(m.normals[ot]).multiplyScalar(
					Y.x), g.copy(m.binormals[ot]).multiplyScalar(Y.y), y.copy(f[ot]).add(v).add(g), h(y.x, y
					.y, y.z)) : h(Y.x, Y.y, E / P * ot);
			for (j = A - 1; j >= 0; j--) {
				for (X = j / A, q = T * Math.cos(X * Math.PI / 2), W = S * Math.sin(X * Math.PI / 2), $ = 0, tt = k
					.length; $ < tt; $++) Y = n(k[$], K[$], W), h(Y.x, Y.y, E + q);
				for (O = 0, N = G.length; O < N; O++)
					for (D = G[O], nt = rt[O], $ = 0, tt = D.length; $ < tt; $++) Y = n(D[$], nt[$], W), I ? h(Y.x,
						Y.y + f[P - 1].y, f[P - 1].x + q) : h(Y.x, Y.y, E + q)
			}
			o(), s(), e.arrays || (this.setIndex(_), this.addAttribute("position", new wt(b, 3)), this.addAttribute(
				"uv", new wt(e.arrays.uv, 2)))
		}, si.WorldUVGenerator = {
			generateTopUV: function(t, e, n, r, a) {
				var o = e[3 * n],
					s = e[3 * n + 1],
					c = e[3 * r],
					h = e[3 * r + 1],
					l = e[3 * a],
					u = e[3 * a + 1];
				return [new i(o, s), new i(c, h), new i(l, u)]
			},
			generateSideWallUV: function(t, e, n, r, a, o) {
				var s = e[3 * n],
					c = e[3 * n + 1],
					h = e[3 * n + 2],
					l = e[3 * r],
					u = e[3 * r + 1],
					p = e[3 * r + 2],
					d = e[3 * a],
					f = e[3 * a + 1],
					m = e[3 * a + 2],
					g = e[3 * o],
					v = e[3 * o + 1],
					y = e[3 * o + 2];
				return Math.abs(c - u) < .01 ? [new i(s, 1 - h), new i(l, 1 - p), new i(d, 1 - m), new i(g, 1 -
					y)] : [new i(c, 1 - h), new i(u, 1 - p), new i(f, 1 - m), new i(v, 1 - y)]
			}
		}, hi.prototype = Object.create(dt.prototype), hi.prototype.constructor = hi, li.prototype = Object.create(
			ci.prototype), li.prototype.constructor = li, ui.prototype = Object.create(dt.prototype), ui.prototype
		.constructor = ui, pi.prototype = Object.create(St.prototype), pi.prototype.constructor = pi, di.prototype =
		Object.create(dt.prototype), di.prototype.constructor = di, fi.prototype = Object.create(St.prototype), fi
		.prototype.constructor = fi, mi.prototype = Object.create(dt.prototype), mi.prototype.constructor = mi, gi
		.prototype = Object.create(St.prototype), gi.prototype.constructor = gi, vi.prototype = Object.create(dt
			.prototype), vi.prototype.constructor = vi, yi.prototype = Object.create(St.prototype), yi.prototype
		.constructor = yi, xi.prototype = Object.create(St.prototype), xi.prototype.constructor = xi, bi.prototype =
		Object.create(dt.prototype), bi.prototype.constructor = bi, _i.prototype = Object.create(St.prototype), _i
		.prototype.constructor = _i, wi.prototype = Object.create(bi.prototype), wi.prototype.constructor = wi, Mi
		.prototype = Object.create(_i.prototype), Mi.prototype.constructor = Mi, Ei.prototype = Object.create(dt
			.prototype), Ei.prototype.constructor = Ei, Ti.prototype = Object.create(St.prototype), Ti.prototype
		.constructor = Ti;
	var Qh = Object.freeze({
		WireframeGeometry: Ve,
		ParametricGeometry: ke,
		ParametricBufferGeometry: je,
		TetrahedronGeometry: qe,
		TetrahedronBufferGeometry: Ye,
		OctahedronGeometry: Ze,
		OctahedronBufferGeometry: Je,
		IcosahedronGeometry: Qe,
		IcosahedronBufferGeometry: Ke,
		DodecahedronGeometry: $e,
		DodecahedronBufferGeometry: ti,
		PolyhedronGeometry: We,
		PolyhedronBufferGeometry: Xe,
		TubeGeometry: ei,
		TubeBufferGeometry: ii,
		TorusKnotGeometry: ni,
		TorusKnotBufferGeometry: ri,
		TorusGeometry: ai,
		TorusBufferGeometry: oi,
		TextGeometry: hi,
		TextBufferGeometry: li,
		SphereGeometry: ui,
		SphereBufferGeometry: pi,
		RingGeometry: di,
		RingBufferGeometry: fi,
		PlaneGeometry: Lt,
		PlaneBufferGeometry: Pt,
		LatheGeometry: mi,
		LatheBufferGeometry: gi,
		ShapeGeometry: vi,
		ShapeBufferGeometry: yi,
		ExtrudeGeometry: si,
		ExtrudeBufferGeometry: ci,
		EdgesGeometry: xi,
		ConeGeometry: wi,
		ConeBufferGeometry: Mi,
		CylinderGeometry: bi,
		CylinderBufferGeometry: _i,
		CircleGeometry: Ei,
		CircleBufferGeometry: Ti,
		BoxGeometry: At,
		BoxBufferGeometry: Rt
	});
	Si.prototype = Object.create(K.prototype), Si.prototype.constructor = Si, Si.prototype.isShadowMaterial = !0, Ai
		.prototype = Object.create(It.prototype), Ai.prototype.constructor = Ai, Ai.prototype
		.isRawShaderMaterial = !0, Ri.prototype = Object.create(K.prototype), Ri.prototype.constructor = Ri, Ri
		.prototype.isMeshStandardMaterial = !0, Ri.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.defines = {
					STANDARD: ""
				}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map =
				t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t
				.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t
				.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this
				.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this
				.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this
				.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t
				.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t
				.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this
				.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this
				.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t
				.morphTargets, this.morphNormals = t.morphNormals, this
		}, Li.prototype = Object.create(Ri.prototype), Li.prototype.constructor = Li, Li.prototype
		.isMeshPhysicalMaterial = !0, Li.prototype.copy = function(t) {
			return Ri.prototype.copy.call(this, t), this.defines = {
					PHYSICAL: ""
				}, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t
				.clearCoatRoughness, this
		}, Pi.prototype = Object.create(K.prototype), Pi.prototype.constructor = Pi, Pi.prototype
		.isMeshPhongMaterial = !0, Pi.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this
				.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t
				.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive
				.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity,
				this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this
				.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale =
				t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap,
				this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t
				.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this
				.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this
				.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t
				.morphTargets, this.morphNormals = t.morphNormals, this
		}, Ci.prototype = Object.create(Pi.prototype), Ci.prototype.constructor = Ci, Ci.prototype
		.isMeshToonMaterial = !0, Ci.prototype.copy = function(t) {
			return Pi.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
		}, Ii.prototype = Object.create(K.prototype), Ii.prototype.constructor = Ii, Ii.prototype
		.isMeshNormalMaterial = !0, Ii.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this
				.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t
				.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t
				.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth,
				this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals,
				this
		}, Ui.prototype = Object.create(K.prototype), Ui.prototype.constructor = Ui, Ui.prototype
		.isMeshLambertMaterial = !0, Ui.prototype.copy = function(t) {
			return K.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t
				.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity =
				t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this
				.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t
				.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity,
				this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t
				.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t
				.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
				.morphNormals = t.morphNormals, this
		}, Di.prototype = Object.create(Ie.prototype), Di.prototype.constructor = Di, Di.prototype
		.isLineDashedMaterial = !0, Di.prototype.copy = function(t) {
			return Ie.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize =
				t.gapSize, this
		};
	var Kh = Object.freeze({
			ShadowMaterial: Si,
			SpriteMaterial: Se,
			RawShaderMaterial: Ai,
			ShaderMaterial: It,
			PointsMaterial: Ne,
			MeshPhysicalMaterial: Li,
			MeshStandardMaterial: Ri,
			MeshPhongMaterial: Pi,
			MeshToonMaterial: Ci,
			MeshNormalMaterial: Ii,
			MeshLambertMaterial: Ui,
			MeshDepthMaterial: $,
			MeshDistanceMaterial: tt,
			MeshBasicMaterial: Ct,
			LineDashedMaterial: Di,
			LineBasicMaterial: Ie,
			Material: K
		}),
		$h = {
			enabled: !1,
			files: {},
			add: function(t, e) {
				this.enabled !== !1 && (this.files[t] = e)
			},
			get: function(t) {
				if (this.enabled !== !1) return this.files[t]
			},
			remove: function(t) {
				delete this.files[t]
			},
			clear: function() {
				this.files = {}
			}
		},
		tl = new Oi,
		el = {};
	Object.assign(Ni.prototype, {
		load: function(t, e, i, n) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager
				.resolveURL(t);
			var r = this,
				a = $h.get(t);
			if (void 0 !== a) return r.manager.itemStart(t), setTimeout(function() {
				e && e(a), r.manager.itemEnd(t)
			}, 0), a;
			if (void 0 !== el[t]) return void el[t].push({
				onLoad: e,
				onProgress: i,
				onError: n
			});
			var o = /^data:(.*?)(;base64)?,(.*)$/,
				s = t.match(o);
			if (s) {
				var c = s[1],
					h = !!s[2],
					l = s[3];
				l = window.decodeURIComponent(l), h && (l = window.atob(l));
				try {
					var u, p = (this.responseType || "").toLowerCase();
					switch (p) {
						case "arraybuffer":
						case "blob":
							for (var d = new Uint8Array(l.length), f = 0; f < l.length; f++) d[f] = l
								.charCodeAt(f);
							u = "blob" === p ? new Blob([d.buffer], {
								type: c
							}) : d.buffer;
							break;
						case "document":
							var m = new DOMParser;
							u = m.parseFromString(l, c);
							break;
						case "json":
							u = JSON.parse(l);
							break;
						default:
							u = l
					}
					window.setTimeout(function() {
						e && e(u), r.manager.itemEnd(t)
					}, 0)
				} catch (g) {
					window.setTimeout(function() {
						n && n(g), r.manager.itemEnd(t), r.manager.itemError(t)
					}, 0)
				}
			} else {
				el[t] = [], el[t].push({
					onLoad: e,
					onProgress: i,
					onError: n
				});
				var v = new XMLHttpRequest;
				v.open("GET", t, !0), v.addEventListener("load", function(e) {
						var i = e.target.response;
						$h.add(t, i);
						var n = el[t];
						if (delete el[t], 200 === this.status) {
							for (var a = 0, o = n.length; a < o; a++) {
								var s = n[a];
								s.onLoad && s.onLoad(i)
							}
							r.manager.itemEnd(t)
						} else if (0 === this.status) {
							console.warn("THREE.FileLoader: HTTP Status 0 received.");
							for (var a = 0, o = n.length; a < o; a++) {
								var s = n[a];
								s.onLoad && s.onLoad(i)
							}
							r.manager.itemEnd(t)
						} else {
							for (var a = 0, o = n.length; a < o; a++) {
								var s = n[a];
								s.onError && s.onError(e)
							}
							r.manager.itemEnd(t), r.manager.itemError(t)
						}
					}, !1), v.addEventListener("progress", function(e) {
						for (var i = el[t], n = 0, r = i.length; n < r; n++) {
							var a = i[n];
							a.onProgress && a.onProgress(e)
						}
					}, !1), v.addEventListener("error", function(e) {
						var i = el[t];
						delete el[t];
						for (var n = 0, a = i.length; n < a; n++) {
							var o = i[n];
							o.onError && o.onError(e)
						}
						r.manager.itemEnd(t), r.manager.itemError(t)
					}, !1), void 0 !== this.responseType && (v.responseType = this.responseType),
					void 0 !== this.withCredentials && (v.withCredentials = this.withCredentials), v
					.overrideMimeType && v.overrideMimeType(void 0 !== this.mimeType ? this.mimeType :
						"text/plain");
				for (var y in this.requestHeader) v.setRequestHeader(y, this.requestHeader[y]);
				v.send(null)
			}
			return r.manager.itemStart(t), v
		},
		setPath: function(t) {
			return this.path = t, this
		},
		setResponseType: function(t) {
			return this.responseType = t, this
		},
		setWithCredentials: function(t) {
			return this.withCredentials = t, this
		},
		setMimeType: function(t) {
			return this.mimeType = t, this
		},
		setRequestHeader: function(t) {
			return this.requestHeader = t, this
		}
	}), Object.assign(Fi.prototype, {
		load: function(t, e, i, n) {
			function r(r) {
				c.load(t[r], function(t) {
					var i = a._parser(t, !0);
					o[r] = {
						width: i.width,
						height: i.height,
						format: i.format,
						mipmaps: i.mipmaps
					}, h += 1, 6 === h && (1 === i.mipmapCount && (s.minFilter = Po), s
						.format = i.format, s.needsUpdate = !0, e && e(s))
				}, i, n)
			}
			var a = this,
				o = [],
				s = new Ge;
			s.image = o;
			var c = new Ni(this.manager);
			if (c.setPath(this.path), c.setResponseType("arraybuffer"), Array.isArray(t))
				for (var h = 0, l = 0, u = t.length; l < u; ++l) r(l);
			else c.load(t, function(t) {
				var i = a._parser(t, !0);
				if (i.isCubemap)
					for (var n = i.mipmaps.length / i.mipmapCount, r = 0; r < n; r++) {
						o[r] = {
							mipmaps: []
						};
						for (var c = 0; c < i.mipmapCount; c++) o[r].mipmaps.push(i.mipmaps[r *
								i.mipmapCount + c]), o[r].format = i.format, o[r].width = i
							.width, o[r].height = i.height
					} else s.image.width = i.width, s.image.height = i.height, s.mipmaps = i
						.mipmaps;
				1 === i.mipmapCount && (s.minFilter = Po), s.format = i.format, s
					.needsUpdate = !0, e && e(s)
			}, i, n);
			return s
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Bi.prototype, {
		load: function(t, e, i, n) {
			var r = this,
				a = new u,
				o = new Ni(this.manager);
			return o.setResponseType("arraybuffer"), o.load(t, function(t) {
				var i = r._parser(t);
				i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image
						.width = i.width, a.image.height = i.height, a.image.data = i.data),
					a.wrapS = void 0 !== i.wrapS ? i.wrapS : To, a.wrapT = void 0 !== i
					.wrapT ? i.wrapT : To, a.magFilter = void 0 !== i.magFilter ? i
					.magFilter : Po, a.minFilter = void 0 !== i.minFilter ? i.minFilter :
					Io, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1,
					void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a
						.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps),
					1 === i.mipmapCount && (a.minFilter = Po), a.needsUpdate = !0, e && e(a,
						i))
			}, i, n), a
		}
	}), Object.assign(zi.prototype, {
		crossOrigin: "Anonymous",
		load: function(t, e, i, n) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager
				.resolveURL(t);
			var r = this,
				a = $h.get(t);
			if (void 0 !== a) return r.manager.itemStart(t), setTimeout(function() {
				e && e(a), r.manager.itemEnd(t)
			}, 0), a;
			var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
			return o.addEventListener("load", function() {
				$h.add(t, this), e && e(this), r.manager.itemEnd(t)
			}, !1), o.addEventListener("error", function(e) {
				n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
			}, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin =
				this.crossOrigin), r.manager.itemStart(t), o.src = t, o
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = "Anonymous", this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Gi.prototype, {
		crossOrigin: "Anonymous",
		load: function(t, e, i, n) {
			function r(i) {
				o.load(t[i], function(t) {
					a.images[i] = t, s++, 6 === s && (a.needsUpdate = !0, e && e(a))
				}, void 0, n)
			}
			var a = new p,
				o = new zi(this.manager);
			o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
			for (var s = 0, c = 0; c < t.length; ++c) r(c);
			return a
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = "Anonymous", this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Hi.prototype, {
		crossOrigin: "Anonymous",
		load: function(t, e, i, n) {
			var r = new zi(this.manager);
			r.setCrossOrigin(this.crossOrigin), r.setPath(this.path);
			var a = new s;
			return a.image = r.load(t, function() {
				var i = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
				a.format = i ? Xo : qo, a.needsUpdate = !0, void 0 !== e && e(a)
			}, i, n), a
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = "Anonymous", this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Vi.prototype = Object.assign(Object.create(ht.prototype), {
		constructor: Vi,
		isLight: !0,
		copy: function(t) {
			return ht.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t
				.intensity, this
		},
		toJSON: function(t) {
			var e = ht.prototype.toJSON.call(this, t);
			return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !==
				this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this
				.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object
					.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay),
				void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this
				.shadow && (e.object.shadow = this.shadow.toJSON()), e
		}
	}), ki.prototype = Object.assign(Object.create(Vi.prototype), {
		constructor: ki,
		isHemisphereLight: !0,
		copy: function(t) {
			return Vi.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
		}
	}), Object.assign(ji.prototype, {
		copy: function(t) {
			return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this
				.mapSize.copy(t.mapSize), this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		toJSON: function() {
			var t = {};
			return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this
					.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this
					.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera
				.matrix, t
		}
	}), Wi.prototype = Object.assign(Object.create(ji.prototype), {
		constructor: Wi,
		isSpotLightShadow: !0,
		update: function(t) {
			var e = this.camera,
				i = 2 * Ps.RAD2DEG * t.angle,
				n = this.mapSize.width / this.mapSize.height,
				r = t.distance || e.far;
			i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e
				.updateProjectionMatrix())
		}
	}), Xi.prototype = Object.assign(Object.create(Vi.prototype), {
		constructor: Xi,
		isSpotLight: !0,
		copy: function(t) {
			return Vi.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle,
				this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this
				.shadow = t.shadow.clone(), this
		}
	}), qi.prototype = Object.assign(Object.create(Vi.prototype), {
		constructor: qi,
		isPointLight: !0,
		copy: function(t) {
			return Vi.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay,
				this.shadow = t.shadow.clone(), this
		}
	}), Yi.prototype = Object.assign(Object.create(ji.prototype), {
		constructor: Yi
	}), Zi.prototype = Object.assign(Object.create(Vi.prototype), {
		constructor: Zi,
		isDirectionalLight: !0,
		copy: function(t) {
			return Vi.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t
				.shadow.clone(), this
		}
	}), Ji.prototype = Object.assign(Object.create(Vi.prototype), {
		constructor: Ji,
		isAmbientLight: !0
	}), Qi.prototype = Object.assign(Object.create(Vi.prototype), {
		constructor: Qi,
		isRectAreaLight: !0,
		copy: function(t) {
			return Vi.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
		},
		toJSON: function(t) {
			var e = Vi.prototype.toJSON.call(this, t);
			return e.object.width = this.width, e.object.height = this.height, e
		}
	});
	var il = {
		arraySlice: function(t, e, i) {
			return il.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t
				.slice(e, i)
		},
		convertArray: function(t, e, i) {
			return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) :
				Array.prototype.slice.call(t)
		},
		isTypedArray: function(t) {
			return ArrayBuffer.isView(t) && !(t instanceof DataView)
		},
		getKeyframeOrder: function(t) {
			function e(e, i) {
				return t[e] - t[i]
			}
			for (var i = t.length, n = new Array(i), r = 0; r !== i; ++r) n[r] = r;
			return n.sort(e), n
		},
		sortedArray: function(t, e, i) {
			for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
				for (var s = i[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
			return r
		},
		flattenJSON: function(t, e, i, n) {
			for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
			if (void 0 !== a) {
				var o = a[n];
				if (void 0 !== o)
					if (Array.isArray(o)) {
						do o = a[n], void 0 !== o && (e.push(a.time), i.push.apply(i, o)), a = t[
							r++]; while (void 0 !== a)
					} else if (void 0 !== o.toArray) {
					do o = a[n], void 0 !== o && (e.push(a.time), o.toArray(i, i.length)), a = t[
						r++]; while (void 0 !== a)
				} else
					do o = a[n], void 0 !== o && (e.push(a.time), i.push(o)), a = t[r++]; while (void 0 !==
						a)
			}
		}
	};
	Object.assign(Ki.prototype, {
		evaluate: function(t) {
			var e = this.parameterPositions,
				i = this._cachedIndex,
				n = e[i],
				r = e[i - 1];
			t: {
				e: {
					var a;i: {
						n: if (!(t < n)) {
							for (var o = i + 2;;) {
								if (void 0 === n) {
									if (t < r) break n;
									return i = e.length, this._cachedIndex = i, this.afterEnd_(
										i - 1, t, r)
								}
								if (i === o) break;
								if (r = n, n = e[++i], t < n) break e
							}
							a = e.length;
							break i
						} {
							if (t >= r) break t;
							var s = e[1];
							t < s && (i = 2, r = s);
							for (var o = i - 2;;) {
								if (void 0 === r) return this._cachedIndex = 0, this
									.beforeStart_(0, t, n);
								if (i === o) break;
								if (n = r, r = e[--i - 1], t >= r) break e
							}
							a = i, i = 0
						}
					}
					for (; i < a;) {
						var c = i + a >>> 1;
						t < e[c] ? a = c : i = c + 1
					}
					if (n = e[i], r = e[i - 1], void 0 === r) return this._cachedIndex = 0,
					this.beforeStart_(0, t, n);
					if (void 0 === n) return i = e.length,
					this._cachedIndex = i,
					this.afterEnd_(i - 1, r, t)
				}
				this._cachedIndex = i,
				this.intervalChanged_(i, r, n)
			}
			return this.interpolate_(i, r, t, n)
		},
		settings: null,
		DefaultSettings_: {},
		getSettings_: function() {
			return this.settings || this.DefaultSettings_
		},
		copySampleValue_: function(t) {
			for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a =
					0; a !== n; ++a) e[a] = i[r + a];
			return e
		},
		interpolate_: function() {
			throw new Error("call to abstract method")
		},
		intervalChanged_: function() {}
	}), Object.assign(Ki.prototype, {
		beforeStart_: Ki.prototype.copySampleValue_,
		afterEnd_: Ki.prototype.copySampleValue_
	}), $i.prototype = Object.assign(Object.create(Ki.prototype), {
		constructor: $i,
		DefaultSettings_: {
			endingStart: fs,
			endingEnd: fs
		},
		intervalChanged_: function(t, e, i) {
			var n = this.parameterPositions,
				r = t - 2,
				a = t + 1,
				o = n[r],
				s = n[a];
			if (void 0 === o) switch (this.getSettings_().endingStart) {
				case ms:
					r = t, o = 2 * e - i;
					break;
				case gs:
					r = n.length - 2, o = e + n[r] - n[r + 1];
					break;
				default:
					r = t, o = i
			}
			if (void 0 === s) switch (this.getSettings_().endingEnd) {
				case ms:
					a = t, s = 2 * i - e;
					break;
				case gs:
					a = 1, s = i + n[1] - n[0];
					break;
				default:
					a = t - 1, s = e
			}
			var c = .5 * (i - e),
				h = this.valueSize;
			this._weightPrev = c / (e - o), this._weightNext = c / (s - i), this._offsetPrev = r * h,
				this._offsetNext = a * h
		},
		interpolate_: function(t, e, i, n) {
			for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c =
					s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this
					._weightNext, d = (i - e) / (n - e), f = d * d, m = f * d, g = -u * m + 2 * u * f -
					u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m +
					(1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) r[b] = g * a[h +
				b] + v * a[c + b] + y * a[s + b] + x * a[l + b];
			return r
		}
	}), tn.prototype = Object.assign(Object.create(Ki.prototype), {
		constructor: tn,
		interpolate_: function(t, e, i, n) {
			for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c =
					s - o, h = (i - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u) r[u] = a[c + u] * l +
				a[s + u] * h;
			return r
		}
	}), en.prototype = Object.assign(Object.create(Ki.prototype), {
		constructor: en,
		interpolate_: function(t) {
			return this.copySampleValue_(t - 1)
		}
	});
	var nl;
	nl = {
		TimeBufferType: Float32Array,
		ValueBufferType: Float32Array,
		DefaultInterpolation: ps,
		InterpolantFactoryMethodDiscrete: function(t) {
			return new en(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodLinear: function(t) {
			return new tn(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodSmooth: function(t) {
			return new $i(this.times, this.values, this.getValueSize(), t)
		},
		setInterpolation: function(t) {
			var e;
			switch (t) {
				case us:
					e = this.InterpolantFactoryMethodDiscrete;
					break;
				case ps:
					e = this.InterpolantFactoryMethodLinear;
					break;
				case ds:
					e = this.InterpolantFactoryMethodSmooth
			}
			if (void 0 === e) {
				var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " +
					this.name;
				if (void 0 === this.createInterpolant) {
					if (t === this.DefaultInterpolation) throw new Error(i);
					this.setInterpolation(this.DefaultInterpolation)
				}
				return void console.warn("THREE.KeyframeTrackPrototype:", i)
			}
			this.createInterpolant = e
		},
		getInterpolation: function() {
			switch (this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete:
					return us;
				case this.InterpolantFactoryMethodLinear:
					return ps;
				case this.InterpolantFactoryMethodSmooth:
					return ds
			}
		},
		getValueSize: function() {
			return this.values.length / this.times.length
		},
		shift: function(t) {
			if (0 !== t)
				for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
			return this
		},
		scale: function(t) {
			if (1 !== t)
				for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
			return this
		},
		trim: function(t, e) {
			for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
			for (; a !== -1 && i[a] > e;) --a;
			if (++a, 0 !== r || a !== n) {
				r >= a && (a = Math.max(a, 1), r = a - 1);
				var o = this.getValueSize();
				this.times = il.arraySlice(i, r, a), this.values = il.arraySlice(this.values, r * o, a * o)
			}
			return this
		},
		validate: function() {
			var t = !0,
				e = this.getValueSize();
			e - Math.floor(e) !== 0 && (console.error(
				"THREE.KeyframeTrackPrototype: Invalid value size in track.", this), t = !1);
			var i = this.times,
				n = this.values,
				r = i.length;
			0 === r && (console.error("THREE.KeyframeTrackPrototype: Track is empty.", this), t = !1);
			for (var a = null, o = 0; o !== r; o++) {
				var s = i[o];
				if ("number" == typeof s && isNaN(s)) {
					console.error("THREE.KeyframeTrackPrototype: Time is not a valid number.", this, o, s),
						t = !1;
					break
				}
				if (null !== a && a > s) {
					console.error("THREE.KeyframeTrackPrototype: Out of order keys.", this, o, s, a), t = !
						1;
					break
				}
				a = s
			}
			if (void 0 !== n && il.isTypedArray(n))
				for (var o = 0, c = n.length; o !== c; ++o) {
					var h = n[o];
					if (isNaN(h)) {
						console.error("THREE.KeyframeTrackPrototype: Value is not a valid number.", this, o,
							h), t = !1;
						break
					}
				}
			return t
		},
		optimize: function() {
			for (var t = this.times, e = this.values, i = this.getValueSize(), n = this
					.getInterpolation() === ds, r = 1, a = t.length - 1, o = 1; o < a; ++o) {
				var s = !1,
					c = t[o],
					h = t[o + 1];
				if (c !== h && (1 !== o || c !== c[0]))
					if (n) s = !0;
					else
						for (var l = o * i, u = l - i, p = l + i, d = 0; d !== i; ++d) {
							var f = e[l + d];
							if (f !== e[u + d] || f !== e[p + d]) {
								s = !0;
								break
							}
						}
				if (s) {
					if (o !== r) {
						t[r] = t[o];
						for (var m = o * i, g = r * i, d = 0; d !== i; ++d) e[g + d] = e[m + d]
					}++r
				}
			}
			if (a > 0) {
				t[r] = t[a];
				for (var m = a * i, g = r * i, d = 0; d !== i; ++d) e[g + d] = e[m + d];
				++r
			}
			return r !== t.length && (this.times = il.arraySlice(t, 0, r), this.values = il.arraySlice(e, 0,
				r * i)), this
		}
	}, rn.prototype = Object.assign(Object.create(nl), {
		constructor: rn,
		ValueTypeName: "vector"
	}), an.prototype = Object.assign(Object.create(Ki.prototype), {
		constructor: an,
		interpolate_: function(t, e, i, n) {
			for (var a = this.resultBuffer, o = this.sampleValues, s = this.valueSize, c = t * s, h = (
					i - e) / (n - e), l = c + s; c !== l; c += 4) r.slerpFlat(a, 0, o, c - s, o, c, h);
			return a
		}
	}), on.prototype = Object.assign(Object.create(nl), {
		constructor: on,
		ValueTypeName: "quaternion",
		DefaultInterpolation: ps,
		InterpolantFactoryMethodLinear: function(t) {
			return new an(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodSmooth: void 0
	}), sn.prototype = Object.assign(Object.create(nl), {
		constructor: sn,
		ValueTypeName: "number"
	}), cn.prototype = Object.assign(Object.create(nl), {
		constructor: cn,
		ValueTypeName: "string",
		ValueBufferType: Array,
		DefaultInterpolation: us,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), hn.prototype = Object.assign(Object.create(nl), {
		constructor: hn,
		ValueTypeName: "bool",
		ValueBufferType: Array,
		DefaultInterpolation: us,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), ln.prototype = Object.assign(Object.create(nl), {
		constructor: ln,
		ValueTypeName: "color"
	}), un.prototype = nl, nl.constructor = un, Object.assign(un, {
		parse: function(t) {
			if (void 0 === t.type) throw new Error("track type undefined, can not parse");
			var e = un._getTrackTypeForValueTypeName(t.type);
			if (void 0 === t.times) {
				var i = [],
					n = [];
				il.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
			}
			return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
		},
		toJSON: function(t) {
			var e, i = t.constructor;
			if (void 0 !== i.toJSON) e = i.toJSON(t);
			else {
				e = {
					name: t.name,
					times: il.convertArray(t.times, Array),
					values: il.convertArray(t.values, Array)
				};
				var n = t.getInterpolation();
				n !== t.DefaultInterpolation && (e.interpolation = n)
			}
			return e.type = t.ValueTypeName, e
		},
		_getTrackTypeForValueTypeName: function(t) {
			switch (t.toLowerCase()) {
				case "scalar":
				case "double":
				case "float":
				case "number":
				case "integer":
					return sn;
				case "vector":
				case "vector2":
				case "vector3":
				case "vector4":
					return rn;
				case "color":
					return ln;
				case "quaternion":
					return on;
				case "bool":
				case "boolean":
					return hn;
				case "string":
					return cn
			}
			throw new Error("Unsupported typeName: " + t)
		}
	}), Object.assign(pn, {
		parse: function(t) {
			for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e
				.push(un.parse(i[r]).scale(n));
			return new pn(t.name, t.duration, e)
		},
		toJSON: function(t) {
			for (var e = [], i = t.tracks, n = {
					name: t.name,
					duration: t.duration,
					tracks: e
				}, r = 0, a = i.length; r !== a; ++r) e.push(un.toJSON(i[r]));
			return n
		},
		CreateFromMorphTargetSequence: function(t, e, i, n) {
			for (var r = e.length, a = [], o = 0; o < r; o++) {
				var s = [],
					c = [];
				s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
				var h = il.getKeyframeOrder(s);
				s = il.sortedArray(s, 1, h), c = il.sortedArray(c, 1, h), n || 0 !== s[0] || (s.push(r),
					c.push(c[0])), a.push(new sn(".morphTargetInfluences[" + e[o].name + "]", s, c)
					.scale(1 / i))
			}
			return new pn(t, (-1), a)
		},
		findByName: function(t, e) {
			var i = t;
			if (!Array.isArray(t)) {
				var n = t;
				i = n.geometry && n.geometry.animations || n.animations
			}
			for (var r = 0; r < i.length; r++)
				if (i[r].name === e) return i[r];
			return null
		},
		CreateClipsFromMorphTargetSequences: function(t, e, i) {
			for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
				var s = t[a],
					c = s.name.match(r);
				if (c && c.length > 1) {
					var h = c[1],
						l = n[h];
					l || (n[h] = l = []), l.push(s)
				}
			}
			var u = [];
			for (var h in n) u.push(pn.CreateFromMorphTargetSequence(h, n[h], e, i));
			return u
		},
		parseAnimation: function(t, e) {
			if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
			for (var i = function(t, e, i, n, r) {
						if (0 !== i.length) {
							var a = [],
								o = [];
							il.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o))
						}
					}, n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t
					.hierarchy || [], c = 0; c < s.length; c++) {
				var h = s[c].keys;
				if (h && 0 !== h.length)
					if (h[0].morphTargets) {
						for (var l = {}, u = 0; u < h.length; u++)
							if (h[u].morphTargets)
								for (var p = 0; p < h[u].morphTargets.length; p++) l[h[u].morphTargets[
									p]] = -1;
						for (var d in l) {
							for (var f = [], m = [], p = 0; p !== h[u].morphTargets.length; ++p) {
								var g = h[u];
								f.push(g.time), m.push(g.morphTarget === d ? 1 : 0)
							}
							n.push(new sn(".morphTargetInfluence[" + d + "]", f, m))
						}
						a = l.length * (o || 1)
					} else {
						var v = ".bones[" + e[c].name + "]";
						i(rn, v + ".position", h, "pos", n), i(on, v + ".quaternion", h, "rot", n), i(
							rn, v + ".scale", h, "scl", n)
					}
			}
			if (0 === n.length) return null;
			var y = new pn(r, a, n);
			return y
		}
	}), Object.assign(pn.prototype, {
		resetDuration: function() {
			for (var t = this.tracks, e = 0, i = 0, n = t.length; i !== n; ++i) {
				var r = this.tracks[i];
				e = Math.max(e, r.times[r.times.length - 1])
			}
			this.duration = e
		},
		trim: function() {
			for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
			return this
		},
		optimize: function() {
			for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
			return this
		}
	}), Object.assign(dn.prototype, {
		load: function(t, e, i, n) {
			var r = this,
				a = new Ni(r.manager);
			a.load(t, function(t) {
				e(r.parse(JSON.parse(t)))
			}, i, n)
		},
		setTextures: function(t) {
			this.textures = t
		},
		parse: function(t) {
			function e(t) {
				return void 0 === n[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), n[
					t]
			}
			var n = this.textures,
				r = new Kh[t.type];
			if (void 0 !== t.uuid && (r.uuid = t.uuid), void 0 !== t.name && (r.name = t.name),
				void 0 !== t.color && r.color.setHex(t.color), void 0 !== t.roughness && (r.roughness =
					t.roughness), void 0 !== t.metalness && (r.metalness = t.metalness), void 0 !== t
				.emissive && r.emissive.setHex(t.emissive), void 0 !== t.specular && r.specular.setHex(t
					.specular), void 0 !== t.shininess && (r.shininess = t.shininess), void 0 !== t
				.clearCoat && (r.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (r
					.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (r.uniforms =
					t.uniforms), void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader),
				void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader), void 0 !== t
				.vertexColors && (r.vertexColors = t.vertexColors), void 0 !== t.fog && (r.fog = t.fog),
				void 0 !== t.flatShading && (r.flatShading = t.flatShading), void 0 !== t.blending && (r
					.blending = t.blending), void 0 !== t.side && (r.side = t.side), void 0 !== t
				.opacity && (r.opacity = t.opacity), void 0 !== t.transparent && (r.transparent = t
					.transparent), void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest), void 0 !== t
				.depthTest && (r.depthTest = t.depthTest), void 0 !== t.depthWrite && (r.depthWrite = t
					.depthWrite), void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite), void 0 !== t
				.wireframe && (r.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (r
					.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (r
					.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (r
					.wireframeLinejoin = t.wireframeLinejoin),
				void 0 !== t.rotation && (r.rotation = t.rotation), 1 !== t.linewidth && (r.linewidth =
					t.linewidth), void 0 !== t.dashSize && (r.dashSize = t.dashSize), void 0 !== t
				.gapSize && (r.gapSize = t.gapSize), void 0 !== t.scale && (r.scale = t.scale),
				void 0 !== t.skinning && (r.skinning = t.skinning), void 0 !== t.morphTargets && (r
					.morphTargets = t.morphTargets), void 0 !== t.dithering && (r.dithering = t
					.dithering), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t
				.userData && (r.userData = t.userData), void 0 !== t.shading && (r.flatShading = 1 === t
					.shading), void 0 !== t.size && (r.size = t.size), void 0 !== t.sizeAttenuation && (
					r.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (r.map = e(t.map)),
				void 0 !== t.alphaMap && (r.alphaMap = e(t.alphaMap), r.transparent = !0), void 0 !== t
				.bumpMap && (r.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (r.bumpScale = t
					.bumpScale), void 0 !== t.normalMap && (r.normalMap = e(t.normalMap)), void 0 !== t
				.normalScale) {
				var a = t.normalScale;
				Array.isArray(a) === !1 && (a = [a, a]), r.normalScale = (new i).fromArray(a)
			}
			return void 0 !== t.displacementMap && (r.displacementMap = e(t.displacementMap)),
				void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale),
				void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias), void 0 !== t
				.roughnessMap && (r.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (r
					.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (r.emissiveMap = e(t
					.emissiveMap)), void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t
					.emissiveIntensity), void 0 !== t.specularMap && (r.specularMap = e(t.specularMap)),
				void 0 !== t.envMap && (r.envMap = e(t.envMap)), void 0 !== t.reflectivity && (r
					.reflectivity = t.reflectivity), void 0 !== t.lightMap && (r.lightMap = e(t
					.lightMap)), void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t
					.lightMapIntensity), void 0 !== t.aoMap && (r.aoMap = e(t.aoMap)), void 0 !== t
				.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (r
					.gradientMap = e(t.gradientMap)), r
		}
	}), Object.assign(fn.prototype, {
		load: function(t, e, i, n) {
			var r = this,
				a = new Ni(r.manager);
			a.load(t, function(t) {
				e(r.parse(JSON.parse(t)))
			}, i, n)
		},
		parse: function(t) {
			var e = new St,
				i = t.data.index;
			if (void 0 !== i) {
				var n = new rl[i.type](i.array);
				e.setIndex(new ft(n, 1))
			}
			var r = t.data.attributes;
			for (var o in r) {
				var s = r[o],
					n = new rl[s.type](s.array);
				e.addAttribute(o, new ft(n, s.itemSize, s.normalized))
			}
			var c = t.data.groups || t.data.drawcalls || t.data.offsets;
			if (void 0 !== c)
				for (var h = 0, l = c.length; h !== l; ++h) {
					var u = c[h];
					e.addGroup(u.start, u.count, u.materialIndex)
				}
			var p = t.data.boundingSphere;
			if (void 0 !== p) {
				var d = new a;
				void 0 !== p.center && d.fromArray(p.center), e.boundingSphere = new it(d, p.radius)
			}
			return e
		}
	});
	var rl = {
		Int8Array: Int8Array,
		Uint8Array: Uint8Array,
		Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
		Int16Array: Int16Array,
		Uint16Array: Uint16Array,
		Int32Array: Int32Array,
		Uint32Array: Uint32Array,
		Float32Array: Float32Array,
		Float64Array: Float64Array
	};
	mn.Handlers = {
		handlers: [],
		add: function(t, e) {
			this.handlers.push(t, e)
		},
		get: function(t) {
			for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
				var r = e[i],
					a = e[i + 1];
				if (r.test(t)) return a
			}
			return null
		}
	}, Object.assign(mn.prototype, {
		crossOrigin: void 0,
		extractUrlBase: function(t) {
			var e = t.split("/");
			return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
		},
		initMaterials: function(t, e, i) {
			for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i);
			return n
		},
		createMaterial: function() {
			var t = {
					NoBlending: Ca,
					NormalBlending: Ia,
					AdditiveBlending: Ua,
					SubtractiveBlending: Da,
					MultiplyBlending: Oa,
					CustomBlending: Na
				},
				e = new q,
				i = new Hi,
				n = new dn;
			return function(r, a, o) {
				function s(t, e, n, r, s) {
					var h, l = a + t,
						u = mn.Handlers.get(l);
					null !== u ? h = u.load(l) : (i.setCrossOrigin(o), h = i.load(l)), void 0 !==
						e && (h.repeat.fromArray(e), 1 !== e[0] && (h.wrapS = Eo), 1 !== e[1] && (h
							.wrapT = Eo)), void 0 !== n && h.offset.fromArray(n), void 0 !== r && (
							"repeat" === r[0] && (h.wrapS = Eo), "mirror" === r[0] && (h.wrapS =
								So), "repeat" === r[1] && (h.wrapT = Eo), "mirror" === r[1] && (h
								.wrapT = So)), void 0 !== s && (h.anisotropy = s);
					var p = Ps.generateUUID();
					return c[p] = h, p
				}
				var c = {},
					h = {
						uuid: Ps.generateUUID(),
						type: "MeshLambertMaterial"
					};
				for (var l in r) {
					var u = r[l];
					switch (l) {
						case "DbgColor":
						case "DbgIndex":
						case "opticalDensity":
						case "illumination":
							break;
						case "DbgName":
							h.name = u;
							break;
						case "blending":
							h.blending = t[u];
							break;
						case "colorAmbient":
						case "mapAmbient":
							console.warn("THREE.Loader.createMaterial:", l,
								"is no longer supported.");
							break;
						case "colorDiffuse":
							h.color = e.fromArray(u).getHex();
							break;
						case "colorSpecular":
							h.specular = e.fromArray(u).getHex();
							break;
						case "colorEmissive":
							h.emissive = e.fromArray(u).getHex();
							break;
						case "specularCoef":
							h.shininess = u;
							break;
						case "shading":
							"basic" === u.toLowerCase() && (h.type = "MeshBasicMaterial"),
								"phong" === u.toLowerCase() && (h.type = "MeshPhongMaterial"),
								"standard" === u.toLowerCase() && (h.type = "MeshStandardMaterial");
							break;
						case "mapDiffuse":
							h.map = s(u, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r
								.mapDiffuseAnisotropy);
							break;
						case "mapDiffuseRepeat":
						case "mapDiffuseOffset":
						case "mapDiffuseWrap":
						case "mapDiffuseAnisotropy":
							break;
						case "mapEmissive":
							h.emissiveMap = s(u, r.mapEmissiveRepeat, r.mapEmissiveOffset, r
								.mapEmissiveWrap, r.mapEmissiveAnisotropy);
							break;
						case "mapEmissiveRepeat":
						case "mapEmissiveOffset":
						case "mapEmissiveWrap":
						case "mapEmissiveAnisotropy":
							break;
						case "mapLight":
							h.lightMap = s(u, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r
								.mapLightAnisotropy);
							break;
						case "mapLightRepeat":
						case "mapLightOffset":
						case "mapLightWrap":
						case "mapLightAnisotropy":
							break;
						case "mapAO":
							h.aoMap = s(u, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r
								.mapAOAnisotropy);
							break;
						case "mapAORepeat":
						case "mapAOOffset":
						case "mapAOWrap":
						case "mapAOAnisotropy":
							break;
						case "mapBump":
							h.bumpMap = s(u, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r
								.mapBumpAnisotropy);
							break;
						case "mapBumpScale":
							h.bumpScale = u;
							break;
						case "mapBumpRepeat":
						case "mapBumpOffset":
						case "mapBumpWrap":
						case "mapBumpAnisotropy":
							break;
						case "mapNormal":
							h.normalMap = s(u, r.mapNormalRepeat, r.mapNormalOffset, r
								.mapNormalWrap, r.mapNormalAnisotropy);
							break;
						case "mapNormalFactor":
							h.normalScale = [u, u];
							break;
						case "mapNormalRepeat":
						case "mapNormalOffset":
						case "mapNormalWrap":
						case "mapNormalAnisotropy":
							break;
						case "mapSpecular":
							h.specularMap = s(u, r.mapSpecularRepeat, r.mapSpecularOffset, r
								.mapSpecularWrap, r.mapSpecularAnisotropy);
							break;
						case "mapSpecularRepeat":
						case "mapSpecularOffset":
						case "mapSpecularWrap":
						case "mapSpecularAnisotropy":
							break;
						case "mapMetalness":
							h.metalnessMap = s(u, r.mapMetalnessRepeat, r.mapMetalnessOffset, r
								.mapMetalnessWrap, r.mapMetalnessAnisotropy);
							break;
						case "mapMetalnessRepeat":
						case "mapMetalnessOffset":
						case "mapMetalnessWrap":
						case "mapMetalnessAnisotropy":
							break;
						case "mapRoughness":
							h.roughnessMap = s(u, r.mapRoughnessRepeat, r.mapRoughnessOffset, r
								.mapRoughnessWrap, r.mapRoughnessAnisotropy);
							break;
						case "mapRoughnessRepeat":
						case "mapRoughnessOffset":
						case "mapRoughnessWrap":
						case "mapRoughnessAnisotropy":
							break;
						case "mapAlpha":
							h.alphaMap = s(u, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r
								.mapAlphaAnisotropy);
							break;
						case "mapAlphaRepeat":
						case "mapAlphaOffset":
						case "mapAlphaWrap":
						case "mapAlphaAnisotropy":
							break;
						case "flipSided":
							h.side = Ea;
							break;
						case "doubleSided":
							h.side = Ta;
							break;
						case "transparency":
							console.warn(
								"THREE.Loader.createMaterial: transparency has been renamed to opacity"
							), h.opacity = u;
							break;
						case "depthTest":
						case "depthWrite":
						case "colorWrite":
						case "opacity":
						case "reflectivity":
						case "transparent":
						case "visible":
						case "wireframe":
							h[l] = u;
							break;
						case "vertexColors":
							u === !0 && (h.vertexColors = Pa), "face" === u && (h.vertexColors =
								La);
							break;
						default:
							console.error("THREE.Loader.createMaterial: Unsupported", l, u)
					}
				}
				return "MeshBasicMaterial" === h.type && delete h.emissive, "MeshPhongMaterial" !==
					h.type && delete h.specular, h.opacity < 1 && (h.transparent = !0), n
					.setTextures(c), n.parse(h)
			}
		}()
	}), Object.assign(gn.prototype, {
		load: function(t, e, i, n) {
			var r = this,
				a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : mn
				.prototype.extractUrlBase(t),
				o = new Ni(this.manager);
			o.setWithCredentials(this.withCredentials), o.load(t, function(i) {
				var n = JSON.parse(i),
					o = n.metadata;
				if (void 0 !== o) {
					var s = o.type;
					if (void 0 !== s) {
						if ("object" === s.toLowerCase()) return void console.error(
							"THREE.JSONLoader: " + t +
							" should be loaded with THREE.ObjectLoader instead.");
						if ("scene" === s.toLowerCase()) return void console.error(
							"THREE.JSONLoader: " + t +
							" should be loaded with THREE.SceneLoader instead.")
					}
				}
				var c = r.parse(n, a);
				e(c.geometry, c.materials)
			}, i, n)
		},
		setTexturePath: function(t) {
			this.texturePath = t
		},
		parse: function() {
			function t(t, e) {
				function n(t, e) {
					return t & 1 << e
				}
				var r, o, s, c, h, l, u, p, d, f, m, g, v, y, x, b, _, w, M, E, T, S, A, R, L, P, C, I =
					t.faces,
					U = t.vertices,
					D = t.normals,
					O = t.colors,
					N = t.scale,
					F = 0;
				if (void 0 !== t.uvs) {
					for (r = 0; r < t.uvs.length; r++) t.uvs[r].length && F++;
					for (r = 0; r < F; r++) e.faceVertexUvs[r] = []
				}
				for (c = 0, h = U.length; c < h;) w = new a, w.x = U[c++] * N, w.y = U[c++] * N, w.z =
					U[c++] * N, e.vertices.push(w);
				for (c = 0, h = I.length; c < h;)
					if (f = I[c++], m = n(f, 0), g = n(f, 1), v = n(f, 3), y = n(f, 4), x = n(f, 5), b =
						n(f, 6), _ = n(f, 7), m) {
						if (E = new pt, E.a = I[c], E.b = I[c + 1], E.c = I[c + 3], T = new pt, T.a = I[
								c + 1], T.b = I[c + 2], T.c = I[c + 3], c += 4, g && (d = I[c++], E
								.materialIndex = d, T.materialIndex = d), s = e.faces.length, v)
							for (r = 0; r < F; r++)
								for (R = t.uvs[r], e.faceVertexUvs[r][s] = [], e.faceVertexUvs[r][s +
										1
									] = [], o = 0; o < 4; o++) p = I[c++], P = R[2 * p], C = R[2 * p +
										1], L = new i(P, C), 2 !== o && e.faceVertexUvs[r][s].push(L),
									0 !== o && e.faceVertexUvs[r][s + 1].push(L);
						if (y && (u = 3 * I[c++], E.normal.set(D[u++], D[u++], D[u]), T.normal.copy(E
								.normal)), x)
							for (r = 0; r < 4; r++) u = 3 * I[c++], A = new a(D[u++], D[u++], D[u]),
								2 !== r && E.vertexNormals.push(A), 0 !== r && T.vertexNormals.push(A);
						if (b && (l = I[c++], S = O[l], E.color.setHex(S), T.color.setHex(S)), _)
							for (r = 0; r < 4; r++) l = I[c++], S = O[l], 2 !== r && E.vertexColors
								.push(new q(S)), 0 !== r && T.vertexColors.push(new q(S));
						e.faces.push(E), e.faces.push(T)
					} else {
						if (M = new pt, M.a = I[c++], M.b = I[c++], M.c = I[c++], g && (d = I[c++], M
								.materialIndex = d), s = e.faces.length, v)
							for (r = 0; r < F; r++)
								for (R = t.uvs[r], e.faceVertexUvs[r][s] = [], o = 0; o < 3; o++) p = I[
										c++], P = R[2 * p], C = R[2 * p + 1], L = new i(P, C), e
									.faceVertexUvs[r][s].push(L);
						if (y && (u = 3 * I[c++], M.normal.set(D[u++], D[u++], D[u])), x)
							for (r = 0; r < 3; r++) u = 3 * I[c++], A = new a(D[u++], D[u++], D[u]), M
								.vertexNormals.push(A);
						if (b && (l = I[c++], M.color.setHex(O[l])), _)
							for (r = 0; r < 3; r++) l = I[c++], M.vertexColors.push(new q(O[l]));
						e.faces.push(M)
					}
			}

			function e(t, e) {
				var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
				if (t.skinWeights)
					for (var n = 0, r = t.skinWeights.length; n < r; n += i) {
						var a = t.skinWeights[n],
							o = i > 1 ? t.skinWeights[n + 1] : 0,
							s = i > 2 ? t.skinWeights[n + 2] : 0,
							h = i > 3 ? t.skinWeights[n + 3] : 0;
						e.skinWeights.push(new c(a, o, s, h))
					}
				if (t.skinIndices)
					for (var n = 0, r = t.skinIndices.length; n < r; n += i) {
						var l = t.skinIndices[n],
							u = i > 1 ? t.skinIndices[n + 1] : 0,
							p = i > 2 ? t.skinIndices[n + 2] : 0,
							d = i > 3 ? t.skinIndices[n + 3] : 0;
						e.skinIndices.push(new c(l, u, p, d))
					}
				e.bones = t.bones, e.bones && e.bones.length > 0 && (e.skinWeights.length !== e
						.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console
					.warn("When skinning, number of vertices (" + e.vertices.length +
						"), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e
						.skinWeights.length + ") should match.")
			}

			function n(t, e) {
				var i = t.scale;
				if (void 0 !== t.morphTargets)
					for (var n = 0, r = t.morphTargets.length; n < r; n++) {
						e.morphTargets[n] = {}, e.morphTargets[n].name = t.morphTargets[n].name, e
							.morphTargets[n].vertices = [];
						for (var o = e.morphTargets[n].vertices, s = t.morphTargets[n].vertices, c = 0,
								h = s.length; c < h; c += 3) {
							var l = new a;
							l.x = s[c] * i, l.y = s[c + 1] * i, l.z = s[c + 2] * i, o.push(l)
						}
					}
				if (void 0 !== t.morphColors && t.morphColors.length > 0) {
					console.warn(
						'THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'
					);
					for (var u = e.faces, p = t.morphColors[0].colors, n = 0, r = u.length; n < r; n++)
						u[n].color.fromArray(p, 3 * n)
				}
			}

			function r(t, e) {
				var i = [],
					n = [];
				void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations
					.length ? n = n.concat(t.animations) : n.push(t.animations));
				for (var r = 0; r < n.length; r++) {
					var a = pn.parseAnimation(n[r], e.bones);
					a && i.push(a)
				}
				if (e.morphTargets) {
					var o = pn.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
					i = i.concat(o)
				}
				i.length > 0 && (e.animations = i)
			}
			return function(i, a) {
				void 0 !== i.data && (i = i.data), void 0 !== i.scale ? i.scale = 1 / i.scale : i
					.scale = 1;
				var o = new dt;
				if (t(i, o), e(i, o), n(i, o), r(i, o), o.computeFaceNormals(), o
					.computeBoundingSphere(), void 0 === i.materials || 0 === i.materials.length)
					return {
						geometry: o
					};
				var s = mn.prototype.initMaterials(i.materials, a, this.crossOrigin);
				return {
					geometry: o,
					materials: s
				}
			}
		}()
	}), Object.assign(vn.prototype, {
		load: function(t, e, i, n) {
			"" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
			var r = this,
				a = new Ni(r.manager);
			a.load(t, function(i) {
				var a = null;
				try {
					a = JSON.parse(i)
				} catch (o) {
					return void 0 !== n && n(o), void console.error(
						"THREE:ObjectLoader: Can't parse " + t + ".", o.message)
				}
				var s = a.metadata;
				return void 0 === s || void 0 === s.type || "geometry" === s.type
					.toLowerCase() ? void console.error("THREE.ObjectLoader: Can't load " + t +
						". Use THREE.JSONLoader instead.") : void r.parse(a, e)
			}, i, n)
		},
		setTexturePath: function(t) {
			this.texturePath = t
		},
		setCrossOrigin: function(t) {
			this.crossOrigin = "Anonymous"
		},
		parse: function(t, e) {
			var i = this.parseGeometries(t.geometries),
				n = this.parseImages(t.images, function() {
					void 0 !== e && e(o)
				}),
				r = this.parseTextures(t.textures, n),
				a = this.parseMaterials(t.materials, r),
				o = this.parseObject(t.object, i, a);
			return t.animations && (o.animations = this.parseAnimations(t.animations)), void 0 !== t
				.images && 0 !== t.images.length || void 0 !== e && e(o), o
		},
		parseGeometries: function(t) {
			var e = {};
			if (void 0 !== t)
				for (var i = new gn, n = new fn, r = 0, a = t.length; r < a; r++) {
					var o, s = t[r];
					switch (s.type) {
						case "PlaneGeometry":
						case "PlaneBufferGeometry":
							o = new Qh[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
							break;
						case "BoxGeometry":
						case "BoxBufferGeometry":
						case "CubeGeometry":
							o = new Qh[s.type](s.width, s.height, s.depth, s.widthSegments, s
								.heightSegments, s.depthSegments);
							break;
						case "CircleGeometry":
						case "CircleBufferGeometry":
							o = new Qh[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
							break;
						case "CylinderGeometry":
						case "CylinderBufferGeometry":
							o = new Qh[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments,
								s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
							break;
						case "ConeGeometry":
						case "ConeBufferGeometry":
							o = new Qh[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s
								.openEnded, s.thetaStart, s.thetaLength);
							break;
						case "SphereGeometry":
						case "SphereBufferGeometry":
							o = new Qh[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart,
								s.phiLength, s.thetaStart, s.thetaLength);
							break;
						case "DodecahedronGeometry":
						case "DodecahedronBufferGeometry":
						case "IcosahedronGeometry":
						case "IcosahedronBufferGeometry":
						case "OctahedronGeometry":
						case "OctahedronBufferGeometry":
						case "TetrahedronGeometry":
						case "TetrahedronBufferGeometry":
							o = new Qh[s.type](s.radius, s.detail);
							break;
						case "RingGeometry":
						case "RingBufferGeometry":
							o = new Qh[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s
								.phiSegments, s.thetaStart, s.thetaLength);
							break;
						case "TorusGeometry":
						case "TorusBufferGeometry":
							o = new Qh[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s
								.arc);
							break;
						case "TorusKnotGeometry":
						case "TorusKnotBufferGeometry":
							o = new Qh[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s
								.p, s.q);
							break;
						case "LatheGeometry":
						case "LatheBufferGeometry":
							o = new Qh[s.type](s.points, s.segments, s.phiStart, s.phiLength);
							break;
						case "PolyhedronGeometry":
						case "PolyhedronBufferGeometry":
							o = new Qh[s.type](s.vertices, s.indices, s.radius, s.details);
							break;
						case "BufferGeometry":
							o = n.parse(s);
							break;
						case "Geometry":
							o = i.parse(s, this.texturePath).geometry;
							break;
						default:
							console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type +
								'"');
							continue
					}
					o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), e[s.uuid] = o
				}
			return e
		},
		parseMaterials: function(t, e) {
			var i = {};
			if (void 0 !== t) {
				var n = new dn;
				n.setTextures(e);
				for (var r = 0, a = t.length; r < a; r++) {
					var o = t[r];
					if ("MultiMaterial" === o.type) {
						for (var s = [], c = 0; c < o.materials.length; c++) s.push(n.parse(o.materials[
							c]));
						i[o.uuid] = s
					} else i[o.uuid] = n.parse(o)
				}
			}
			return i
		},
		parseAnimations: function(t) {
			for (var e = [], i = 0; i < t.length; i++) {
				var n = pn.parse(t[i]);
				e.push(n)
			}
			return e
		},
		parseImages: function(t, e) {
			function i(t) {
				return n.manager.itemStart(t), o.load(t, function() {
					n.manager.itemEnd(t)
				}, void 0, function() {
					n.manager.itemEnd(t), n.manager.itemError(t)
				})
			}
			var n = this,
				r = {};
			if (void 0 !== t && t.length > 0) {
				var a = new Oi(e),
					o = new zi(a);
				o.setCrossOrigin(this.crossOrigin);
				for (var s = 0, c = t.length; s < c; s++) {
					var h = t[s],
						l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : n.texturePath + h.url;
					r[h.uuid] = i(l)
				}
			}
			return r
		},
		parseTextures: function(t, e) {
			function i(t, e) {
				return "number" == typeof t ? t : (console.warn(
						"THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
					e[t])
			}
			var n = {};
			if (void 0 !== t)
				for (var r = 0, a = t.length; r < a; r++) {
					var o = t[r];
					void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o
						.uuid), void 0 === e[o.image] && console.warn(
						"THREE.ObjectLoader: Undefined image", o.image);
					var c = new s(e[o.image]);
					c.needsUpdate = !0, c.uuid = o.uuid, void 0 !== o.name && (c.name = o.name),
						void 0 !== o.mapping && (c.mapping = i(o.mapping, al)), void 0 !== o.offset && c
						.offset.fromArray(o.offset), void 0 !== o.repeat && c.repeat.fromArray(o
							.repeat), void 0 !== o.center && c.center.fromArray(o.center), void 0 !== o
						.rotation && (c.rotation = o.rotation), void 0 !== o.wrap && (c.wrapS = i(o
							.wrap[0], ol), c.wrapT = i(o.wrap[1], ol)), void 0 !== o.minFilter && (c
							.minFilter = i(o.minFilter, sl)), void 0 !== o.magFilter && (c.magFilter =
							i(o.magFilter, sl)), void 0 !== o.anisotropy && (c.anisotropy = o
							.anisotropy), void 0 !== o.flipY && (c.flipY = o.flipY), n[o.uuid] = c
				}
			return n
		},
		parseObject: function() {
			var t = new n;
			return function(e, i, n) {
				function r(t) {
					return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined geometry",
						t), i[t]
				}

				function a(t) {
					if (void 0 !== t) {
						if (Array.isArray(t)) {
							for (var e = [], i = 0, r = t.length; i < r; i++) {
								var a = t[i];
								void 0 === n[a] && console.warn(
									"THREE.ObjectLoader: Undefined material", a), e.push(n[a])
							}
							return e
						}
						return void 0 === n[t] && console.warn(
							"THREE.ObjectLoader: Undefined material", t), n[t]
					}
				}
				var o;
				switch (e.type) {
					case "Scene":
						o = new Ee, void 0 !== e.background && Number.isInteger(e.background) && (o
							.background = new q(e.background)), void 0 !== e.fog && ("Fog" === e
							.fog.type ? o.fog = new Me(e.fog.color, e.fog.near, e.fog.far) :
							"FogExp2" === e.fog.type && (o.fog = new we(e.fog.color, e.fog
								.density)));
						break;
					case "PerspectiveCamera":
						o = new me(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (o.focus =
								e.focus), void 0 !== e.zoom && (o.zoom = e.zoom), void 0 !== e
							.filmGauge && (o.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (o
								.filmOffset = e.filmOffset), void 0 !== e.view && (o.view = Object
								.assign({}, e.view));
						break;
					case "OrthographicCamera":
						o = new ut(e.left, e.right, e.top, e.bottom, e.near, e.far);
						break;
					case "AmbientLight":
						o = new Ji(e.color, e.intensity);
						break;
					case "DirectionalLight":
						o = new Zi(e.color, e.intensity);
						break;
					case "PointLight":
						o = new qi(e.color, e.intensity, e.distance, e.decay);
						break;
					case "RectAreaLight":
						o = new Qi(e.color, e.intensity, e.width, e.height);
						break;
					case "SpotLight":
						o = new Xi(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
						break;
					case "HemisphereLight":
						o = new ki(e.color, e.groundColor, e.intensity);
						break;
					case "SkinnedMesh":
						console.warn(
							"THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet."
						);
					case "Mesh":
						var s = r(e.geometry),
							c = a(e.material);
						o = s.bones && s.bones.length > 0 ? new Ce(s, c) : new Nt(s, c);
						break;
					case "LOD":
						o = new Re;
						break;
					case "Line":
						o = new Ue(r(e.geometry), a(e.material), e.mode);
						break;
					case "LineLoop":
						o = new Oe(r(e.geometry), a(e.material));
						break;
					case "LineSegments":
						o = new De(r(e.geometry), a(e.material));
						break;
					case "PointCloud":
					case "Points":
						o = new Fe(r(e.geometry), a(e.material));
						break;
					case "Sprite":
						o = new Ae(a(e.material));
						break;
					case "Group":
						o = new Be;
						break;
					default:
						o = new ht
				}
				if (o.uuid = e.uuid, void 0 !== e.name && (o.name = e.name), void 0 !== e.matrix ? (
						t.fromArray(e.matrix), t.decompose(o.position, o.quaternion, o.scale)) : (
						void 0 !== e.position && o.position.fromArray(e.position), void 0 !== e
						.rotation && o.rotation.fromArray(e.rotation), void 0 !== e.quaternion && o
						.quaternion.fromArray(e.quaternion), void 0 !== e.scale && o.scale
						.fromArray(e.scale)), void 0 !== e.castShadow && (o.castShadow = e
						.castShadow), void 0 !== e.receiveShadow && (o.receiveShadow = e
						.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (o.shadow.bias = e
						.shadow.bias), void 0 !== e.shadow.radius && (o.shadow.radius = e.shadow
						.radius), void 0 !== e.shadow.mapSize && o.shadow.mapSize.fromArray(e
						.shadow.mapSize), void 0 !== e.shadow.camera && (o.shadow.camera = this
						.parseObject(e.shadow.camera))), void 0 !== e.visible && (o.visible = e
						.visible), void 0 !== e.userData && (o.userData = e.userData), void 0 !== e
					.children)
					for (var h = e.children, l = 0; l < h.length; l++) o.add(this.parseObject(h[l],
						i, n));
				if ("LOD" === e.type)
					for (var u = e.levels, p = 0; p < u.length; p++) {
						var d = u[p],
							f = o.getObjectByProperty("uuid", d.object);
						void 0 !== f && o.addLevel(f, d.distance)
					}
				return o
			}
		}()
	});
	var al = {
			UVMapping: go,
			CubeReflectionMapping: vo,
			CubeRefractionMapping: yo,
			EquirectangularReflectionMapping: xo,
			EquirectangularRefractionMapping: bo,
			SphericalReflectionMapping: _o,
			CubeUVReflectionMapping: wo,
			CubeUVRefractionMapping: Mo
		},
		ol = {
			RepeatWrapping: Eo,
			ClampToEdgeWrapping: To,
			MirroredRepeatWrapping: So
		},
		sl = {
			NearestFilter: Ao,
			NearestMipMapNearestFilter: Ro,
			NearestMipMapLinearFilter: Lo,
			LinearFilter: Po,
			LinearMipMapNearestFilter: Co,
			LinearMipMapLinearFilter: Io
		};
	Object.assign(Rn.prototype, {
			getPoint: function() {
				return console.warn("THREE.Curve: .getPoint() not implemented."), null
			},
			getPointAt: function(t, e) {
				var i = this.getUtoTmapping(t);
				return this.getPoint(i, e)
			},
			getPoints: function(t) {
				void 0 === t && (t = 5);
				for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
				return e
			},
			getSpacedPoints: function(t) {
				void 0 === t && (t = 5);
				for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
				return e
			},
			getLength: function() {
				var t = this.getLengths();
				return t[t.length - 1]
			},
			getLengths: function(t) {
				if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this
					.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
				this.needsUpdate = !1;
				var e, i, n = [],
					r = this.getPoint(0),
					a = 0;
				for (n.push(0), i = 1; i <= t; i++) e = this.getPoint(i / t), a += e.distanceTo(r), n.push(
					a), r = e;
				return this.cacheArcLengths = n, n
			},
			updateArcLengths: function() {
				this.needsUpdate = !0, this.getLengths()
			},
			getUtoTmapping: function(t, e) {
				var i, n = this.getLengths(),
					r = 0,
					a = n.length;
				i = e ? e : t * n[a - 1];
				for (var o, s = 0, c = a - 1; s <= c;)
					if (r = Math.floor(s + (c - s) / 2), o = n[r] - i, o < 0) s = r + 1;
					else {
						if (!(o > 0)) {
							c = r;
							break
						}
						c = r - 1
					} if (r = c, n[r] === i) return r / (a - 1);
				var h = n[r],
					l = n[r + 1],
					u = l - h,
					p = (i - h) / u,
					d = (r + p) / (a - 1);
				return d
			},
			getTangent: function(t) {
				var e = 1e-4,
					i = t - e,
					n = t + e;
				i < 0 && (i = 0), n > 1 && (n = 1);
				var r = this.getPoint(i),
					a = this.getPoint(n),
					o = a.clone().sub(r);
				return o.normalize()
			},
			getTangentAt: function(t) {
				var e = this.getUtoTmapping(t);
				return this.getTangent(e)
			},
			computeFrenetFrames: function(t, e) {
				var i, r, o, s = new a,
					c = [],
					h = [],
					l = [],
					u = new a,
					p = new n;
				for (i = 0; i <= t; i++) r = i / t, c[i] = this.getTangentAt(r), c[i].normalize();
				h[0] = new a, l[0] = new a;
				var d = Number.MAX_VALUE,
					f = Math.abs(c[0].x),
					m = Math.abs(c[0].y),
					g = Math.abs(c[0].z);
				for (f <= d && (d = f, s.set(1, 0, 0)), m <= d && (d = m, s.set(0, 1, 0)), g <= d && s.set(
						0, 0, 1), u.crossVectors(c[0], s).normalize(), h[0].crossVectors(c[0], u), l[0]
					.crossVectors(c[0], h[0]), i = 1; i <= t; i++) h[i] = h[i - 1].clone(), l[i] = l[i - 1]
					.clone(), u.crossVectors(c[i - 1], c[i]), u.length() > Number.EPSILON && (u.normalize(),
						o = Math.acos(Ps.clamp(c[i - 1].dot(c[i]), -1, 1)), h[i].applyMatrix4(p
							.makeRotationAxis(u, o))), l[i].crossVectors(c[i], h[i]);
				if (e === !0)
					for (o = Math.acos(Ps.clamp(h[0].dot(h[t]), -1, 1)), o /= t, c[0].dot(u.crossVectors(h[
							0], h[t])) > 0 && (o = -o), i = 1; i <= t; i++) h[i].applyMatrix4(p
						.makeRotationAxis(c[i], o * i)), l[i].crossVectors(c[i], h[i]);
				return {
					tangents: c,
					normals: h,
					binormals: l
				}
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.arcLengthDivisions = t.arcLengthDivisions, this
			}
		}), Ln.prototype = Object.create(Rn.prototype), Ln.prototype.constructor = Ln, Ln.prototype.isLineCurve = !
		0, Ln.prototype.getPoint = function(t, e) {
			var n = e || new i;
			return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
		}, Ln.prototype.getPointAt = function(t, e) {
			return this.getPoint(t, e)
		}, Ln.prototype.getTangent = function() {
			var t = this.v2.clone().sub(this.v1);
			return t.normalize()
		}, Ln.prototype.copy = function(t) {
			return Rn.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}, Pn.prototype = Object.assign(Object.create(Rn.prototype), {
			constructor: Pn,
			add: function(t) {
				this.curves.push(t)
			},
			closePath: function() {
				var t = this.curves[0].getPoint(0),
					e = this.curves[this.curves.length - 1].getPoint(1);
				t.equals(e) || this.curves.push(new Ln(e, t))
			},
			getPoint: function(t) {
				for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
					if (i[n] >= e) {
						var r = i[n] - e,
							a = this.curves[n],
							o = a.getLength(),
							s = 0 === o ? 0 : 1 - r / o;
						return a.getPointAt(s)
					}
					n++
				}
				return null
			},
			getLength: function() {
				var t = this.getCurveLengths();
				return t[t.length - 1]
			},
			updateArcLengths: function() {
				this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
			},
			getCurveLengths: function() {
				if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this
					.cacheLengths;
				for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i]
					.getLength(), t.push(e);
				return this.cacheLengths = t, t
			},
			getSpacedPoints: function(t) {
				void 0 === t && (t = 40);
				for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
				return this.autoClose && e.push(e[0]), e
			},
			getPoints: function(t) {
				t = t || 12;
				for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
					for (var a = r[n], o = a && a.isEllipseCurve ? 2 * t : a && a.isLineCurve ? 1 : a && a
							.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s
						.length; c++) {
						var h = s[c];
						e && e.equals(h) || (i.push(h), e = h)
					}
				return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
			},
			copy: function(t) {
				Rn.prototype.copy.call(this, t), this.curves = [];
				for (var e = 0, i = t.curves.length; e < i; e++) {
					var n = t.curves[e];
					this.curves.push(n.clone())
				}
				return this.autoClose = t.autoClose, this
			}
		}), Cn.prototype = Object.create(Rn.prototype), Cn.prototype.constructor = Cn, Cn.prototype
		.isEllipseCurve = !0, Cn.prototype.getPoint = function(t, e) {
			for (var n = e || new i, r = 2 * Math.PI, a = this.aEndAngle - this.aStartAngle, o = Math.abs(a) <
					Number.EPSILON; a < 0;) a += r;
			for (; a > r;) a -= r;
			a < Number.EPSILON && (a = o ? 0 : r), this.aClockwise !== !0 || o || (a === r ? a = -r : a -= r);
			var s = this.aStartAngle + t * a,
				c = this.aX + this.xRadius * Math.cos(s),
				h = this.aY + this.yRadius * Math.sin(s);
			if (0 !== this.aRotation) {
				var l = Math.cos(this.aRotation),
					u = Math.sin(this.aRotation),
					p = c - this.aX,
					d = h - this.aY;
				c = p * l - d * u + this.aX, h = p * u + d * l + this.aY
			}
			return n.set(c, h)
		}, Cn.prototype.copy = function(t) {
			return Rn.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this
				.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this
				.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
		}, In.prototype = Object.create(Rn.prototype), In.prototype.constructor = In, In.prototype.isSplineCurve = !
		0, In.prototype.getPoint = function(t, e) {
			var n = e || new i,
				r = this.points,
				a = (r.length - 1) * t,
				o = Math.floor(a),
				s = a - o,
				c = r[0 === o ? o : o - 1],
				h = r[o],
				l = r[o > r.length - 2 ? r.length - 1 : o + 1],
				u = r[o > r.length - 3 ? r.length - 1 : o + 2];
			return n.set(yn(s, c.x, h.x, l.x, u.x), yn(s, c.y, h.y, l.y, u.y)), n
		}, In.prototype.copy = function(t) {
			Rn.prototype.copy.call(this, t), this.points = [];
			for (var e = 0, i = t.points.length; e < i; e++) {
				var n = t.points[e];
				this.points.push(n.clone())
			}
			return this
		}, Un.prototype = Object.create(Rn.prototype), Un.prototype.constructor = Un, Un.prototype
		.isCubicBezierCurve = !0, Un.prototype.getPoint = function(t, e) {
			var n = e || new i,
				r = this.v0,
				a = this.v1,
				o = this.v2,
				s = this.v3;
			return n.set(An(t, r.x, a.x, o.x, s.x), An(t, r.y, a.y, o.y, s.y)), n
		}, Un.prototype.copy = function(t) {
			return Rn.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
				.v3.copy(t.v3), this
		}, Dn.prototype = Object.create(Rn.prototype), Dn.prototype.constructor = Dn, Dn.prototype
		.isQuadraticBezierCurve = !0, Dn.prototype.getPoint = function(t, e) {
			var n = e || new i,
				r = this.v0,
				a = this.v1,
				o = this.v2;
			return n.set(wn(t, r.x, a.x, o.x), wn(t, r.y, a.y, o.y)), n
		}, Dn.prototype.copy = function(t) {
			return Rn.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		};
	var cl = Object.assign(Object.create(Pn.prototype), {
		setFromPoints: function(t) {
			this.moveTo(t[0].x, t[0].y);
			for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y)
		},
		moveTo: function(t, e) {
			this.currentPoint.set(t, e)
		},
		lineTo: function(t, e) {
			var n = new Ln(this.currentPoint.clone(), new i(t, e));
			this.curves.push(n), this.currentPoint.set(t, e)
		},
		quadraticCurveTo: function(t, e, n, r) {
			var a = new Dn(this.currentPoint.clone(), new i(t, e), new i(n, r));
			this.curves.push(a), this.currentPoint.set(n, r)
		},
		bezierCurveTo: function(t, e, n, r, a, o) {
			var s = new Un(this.currentPoint.clone(), new i(t, e), new i(n, r), new i(a, o));
			this.curves.push(s), this.currentPoint.set(a, o)
		},
		splineThru: function(t) {
			var e = [this.currentPoint.clone()].concat(t),
				i = new In(e);
			this.curves.push(i), this.currentPoint.copy(t[t.length - 1])
		},
		arc: function(t, e, i, n, r, a) {
			var o = this.currentPoint.x,
				s = this.currentPoint.y;
			this.absarc(t + o, e + s, i, n, r, a)
		},
		absarc: function(t, e, i, n, r, a) {
			this.absellipse(t, e, i, i, n, r, a)
		},
		ellipse: function(t, e, i, n, r, a, o, s) {
			var c = this.currentPoint.x,
				h = this.currentPoint.y;
			this.absellipse(t + c, e + h, i, n, r, a, o, s)
		},
		absellipse: function(t, e, i, n, r, a, o, s) {
			var c = new Cn(t, e, i, n, r, a, o, s);
			if (this.curves.length > 0) {
				var h = c.getPoint(0);
				h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
			}
			this.curves.push(c);
			var l = c.getPoint(1);
			this.currentPoint.copy(l)
		},
		copy: function(t) {
			return Pn.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
		}
	});
	On.prototype = cl, cl.constructor = On, Nn.prototype = Object.assign(Object.create(cl), {
		constructor: Nn,
		getPointsHoles: function(t) {
			for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(
				t);
			return e
		},
		extractPoints: function(t) {
			return {
				shape: this.getPoints(t),
				holes: this.getPointsHoles(t)
			}
		},
		copy: function(t) {
			On.prototype.copy.call(this, t), this.holes = [];
			for (var e = 0, i = t.holes.length; e < i; e++) {
				var n = t.holes[e];
				this.holes.push(n.clone())
			}
			return this
		}
	}), Object.assign(Fn.prototype, {
		moveTo: function(t, e) {
			this.currentPath = new On, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t,
				e)
		},
		lineTo: function(t, e) {
			this.currentPath.lineTo(t, e)
		},
		quadraticCurveTo: function(t, e, i, n) {
			this.currentPath.quadraticCurveTo(t, e, i, n)
		},
		bezierCurveTo: function(t, e, i, n, r, a) {
			this.currentPath.bezierCurveTo(t, e, i, n, r, a)
		},
		splineThru: function(t) {
			this.currentPath.splineThru(t)
		},
		toShapes: function(t, e) {
			function i(t) {
				for (var e = [], i = 0, n = t.length; i < n; i++) {
					var r = t[i],
						a = new Nn;
					a.curves = r.curves, e.push(a)
				}
				return e
			}

			function n(t, e) {
				for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
					var o = e[r],
						s = e[a],
						c = s.x - o.x,
						h = s.y - o.y;
					if (Math.abs(h) > Number.EPSILON) {
						if (h < 0 && (o = e[a], c = -c, s = e[r], h = -h), t.y < o.y || t.y > s.y)
							continue;
						if (t.y === o.y) {
							if (t.x === o.x) return !0
						} else {
							var l = h * (t.x - o.x) - c * (t.y - o.y);
							if (0 === l) return !0;
							if (l < 0) continue;
							n = !n
						}
					} else {
						if (t.y !== o.y) continue;
						if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
					}
				}
				return n
			}
			var r = Jh.isClockWise,
				a = this.subPaths;
			if (0 === a.length) return [];
			if (e === !0) return i(a);
			var o, s, c, h = [];
			if (1 === a.length) return s = a[0], c = new Nn, c.curves = s.curves, h.push(c), h;
			var l = !r(a[0].getPoints());
			l = t ? !l : l;
			var u, p = [],
				d = [],
				f = [],
				m = 0;
			d[m] = void 0, f[m] = [];
			for (var g = 0, v = a.length; g < v; g++) s = a[g], u = s.getPoints(), o = r(u), o = t ? !
				o : o, o ? (!l && d[m] && m++, d[m] = {
					s: new Nn,
					p: u
				}, d[m].s.curves = s.curves, l && m++, f[m] = []) : f[m].push({
					h: s,
					p: u[0]
				});
			if (!d[0]) return i(a);
			if (d.length > 1) {
				for (var y = !1, x = [], b = 0, _ = d.length; b < _; b++) p[b] = [];
				for (var b = 0, _ = d.length; b < _; b++)
					for (var w = f[b], M = 0; M < w.length; M++) {
						for (var E = w[M], T = !0, S = 0; S < d.length; S++) n(E.p, d[S].p) && (b !==
							S && x.push({
								froms: b,
								tos: S,
								hole: M
							}), T ? (T = !1, p[S].push(E)) : y = !0);
						T && p[b].push(E)
					}
				x.length > 0 && (y || (f = p))
			}
			for (var A, g = 0, R = d.length; g < R; g++) {
				c = d[g].s, h.push(c), A = f[g];
				for (var L = 0, P = A.length; L < P; L++) c.holes.push(A[L].h)
			}
			return h
		}
	}), Object.assign(Bn.prototype, {
		isFont: !0,
		generateShapes: function(t, e, i) {
			function n(t) {
				for (var i = String(t).split(""), n = e / a.resolution, o = (a.boundingBox.yMax - a
						.boundingBox.yMin + a.underlineThickness) * n, s = 0, c = 0, h = [], l = 0; l <
					i.length; l++) {
					var u = i[l];
					if ("\n" === u) s = 0, c -= o;
					else {
						var p = r(u, n, s, c);
						s += p.offsetX, h.push(p.path)
					}
				}
				return h
			}

			function r(t, e, n, r) {
				var o = a.glyphs[t] || a.glyphs["?"];
				if (o) {
					var s, c, h, l, u, p, d, f, m, g, v, y = new Fn,
						x = [];
					if (o.o)
						for (var b = o._cachedOutline || (o._cachedOutline = o.o.split(" ")), _ = 0, w =
								b.length; _ < w;) {
							var M = b[_++];
							switch (M) {
								case "m":
									s = b[_++] * e + n, c = b[_++] * e + r, y.moveTo(s, c);
									break;
								case "l":
									s = b[_++] * e + n, c = b[_++] * e + r, y.lineTo(s, c);
									break;
								case "q":
									if (h = b[_++] * e + n, l = b[_++] * e + r, d = b[_++] * e + n, f =
										b[_++] * e + r, y.quadraticCurveTo(d, f, h, l), v = x[x.length -
											1]) {
										u = v.x, p = v.y;
										for (var E = 1; E <= i; E++) {
											var T = E / i;
											wn(T, u, d, h), wn(T, p, f, l)
										}
									}
									break;
								case "b":
									if (h = b[_++] * e + n, l = b[_++] * e + r, d = b[_++] * e + n, f =
										b[_++] * e + r, m = b[_++] * e + n, g = b[_++] * e + r, y
										.bezierCurveTo(d, f, m, g, h, l), v = x[x.length - 1]) {
										u = v.x, p = v.y;
										for (var E = 1; E <= i; E++) {
											var T = E / i;
											An(T, u, d, m, h), An(T, p, f, g, l)
										}
									}
							}
						}
					return {
						offsetX: o.ha * e,
						path: y
					}
				}
			}
			void 0 === e && (e = 100), void 0 === i && (i = 4);
			for (var a = this.data, o = n(t), s = [], c = 0, h = o.length; c < h; c++) Array.prototype
				.push.apply(s, o[c].toShapes());
			return s
		}
	}), Object.assign(zn.prototype, {
		load: function(t, e, i, n) {
			var r = this,
				a = new Ni(this.manager);
			a.setPath(this.path), a.load(t, function(t) {
				var i;
				try {
					i = JSON.parse(t)
				} catch (n) {
					console.warn(
						"THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."
					), i = JSON.parse(t.substring(65, t.length - 2))
				}
				var a = r.parse(i);
				e && e(a)
			}, i, n)
		},
		parse: function(t) {
			return new Bn(t)
		},
		setPath: function(t) {
			return this.path = t, this
		}
	});
	var hl, ll = {
		getContext: function() {
			return void 0 === hl && (hl = new(window.AudioContext || window.webkitAudioContext)), hl
		},
		setContext: function(t) {
			hl = t
		}
	};
	Object.assign(Gn.prototype, {
			load: function(t, e, i, n) {
				var r = new Ni(this.manager);
				r.setResponseType("arraybuffer"), r.load(t, function(t) {
					var i = ll.getContext();
					i.decodeAudioData(t, function(t) {
						e(t)
					})
				}, i, n)
			}
		}), Object.assign(Hn.prototype, {
			update: function() {
				var t, e, i, r, a, o, s, c, h = new n,
					l = new n;
				return function(n) {
					var u = t !== this || e !== n.focus || i !== n.fov || r !== n.aspect * this
						.aspect || a !== n.near || o !== n.far || s !== n.zoom || c !== this.eyeSep;
					if (u) {
						t = this, e = n.focus, i = n.fov, r = n.aspect * this.aspect, a = n.near, o = n
							.far, s = n.zoom;
						var p = n.projectionMatrix.clone();
						c = this.eyeSep / 2;
						var d, f, m = c * a / e,
							g = a * Math.tan(Ps.DEG2RAD * i * .5) / s;
						l.elements[12] = -c, h.elements[12] = c, d = -g * r + m, f = g * r + m, p
							.elements[0] = 2 * a / (f - d), p.elements[8] = (f + d) / (f - d), this
							.cameraL.projectionMatrix.copy(p), d = -g * r - m, f = g * r - m, p
							.elements[0] = 2 * a / (f - d), p.elements[8] = (f + d) / (f - d), this
							.cameraR.projectionMatrix.copy(p)
					}
					this.cameraL.matrixWorld.copy(n.matrixWorld).multiply(l), this.cameraR.matrixWorld
						.copy(n.matrixWorld).multiply(h)
				}
			}()
		}), Vn.prototype = Object.create(ht.prototype), Vn.prototype.constructor = Vn, kn.prototype = Object.assign(
			Object.create(ht.prototype), {
				constructor: kn,
				getInput: function() {
					return this.gain
				},
				removeFilter: function() {
					null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this
							.context.destination), this.gain.connect(this.context.destination), this
						.filter = null)
				},
				getFilter: function() {
					return this.filter
				},
				setFilter: function(t) {
					null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this
							.context.destination)) : this.gain.disconnect(this.context.destination), this
						.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context
							.destination)
				},
				getMasterVolume: function() {
					return this.gain.gain.value
				},
				setMasterVolume: function(t) {
					this.gain.gain.value = t
				},
				updateMatrixWorld: function() {
					var t = new a,
						e = new r,
						i = new a,
						n = new a;
					return function(r) {
						ht.prototype.updateMatrixWorld.call(this, r);
						var a = this.context.listener,
							o = this.up;
						this.matrixWorld.decompose(t, e, i), n.set(0, 0, -1).applyQuaternion(e), a
							.positionX ? (a.positionX.setValueAtTime(t.x, this.context.currentTime), a
								.positionY.setValueAtTime(t.y, this.context.currentTime), a.positionZ
								.setValueAtTime(t.z, this.context.currentTime), a.forwardX.setValueAtTime(n
									.x, this.context.currentTime), a.forwardY.setValueAtTime(n.y, this
									.context.currentTime), a.forwardZ.setValueAtTime(n.z, this.context
									.currentTime), a.upX.setValueAtTime(o.x, this.context.currentTime), a
								.upY.setValueAtTime(o.y, this.context.currentTime), a.upZ.setValueAtTime(o
									.z, this.context.currentTime)) : (a.setPosition(t.x, t.y, t.z), a
								.setOrientation(n.x, n.y, n.z, o.x, o.y, o.z))
					}
				}()
			}), jn.prototype = Object.assign(Object.create(ht.prototype), {
			constructor: jn,
			getOutput: function() {
				return this.gain
			},
			setNodeSource: function(t) {
				return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this
					.connect(), this
			},
			setBuffer: function(t) {
				return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
			},
			play: function() {
				if (this.isPlaying === !0) return void console.warn(
					"THREE.Audio: Audio is already playing.");
				if (this.hasPlaybackControl === !1) return void console.warn(
					"THREE.Audio: this Audio has no playback control.");
				var t = this.context.createBufferSource();
				return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t
					.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this
					.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this
					.source = t, this.connect()
			},
			pause: function() {
				return this.hasPlaybackControl === !1 ? void console.warn(
					"THREE.Audio: this Audio has no playback control.") : (this.isPlaying === !0 && (
					this.source.stop(), this.offset += (this.context.currentTime - this.startTime) *
					this.playbackRate, this.isPlaying = !1), this)
			},
			stop: function() {
				return this.hasPlaybackControl === !1 ? void console.warn(
					"THREE.Audio: this Audio has no playback control.") : (this.source.stop(), this
					.offset = 0, this.isPlaying = !1, this)
			},
			connect: function() {
				if (this.filters.length > 0) {
					this.source.connect(this.filters[0]);
					for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this
						.filters[t]);
					this.filters[this.filters.length - 1].connect(this.getOutput())
				} else this.source.connect(this.getOutput());
				return this
			},
			disconnect: function() {
				if (this.filters.length > 0) {
					this.source.disconnect(this.filters[0]);
					for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this
						.filters[t]);
					this.filters[this.filters.length - 1].disconnect(this.getOutput())
				} else this.source.disconnect(this.getOutput());
				return this
			},
			getFilters: function() {
				return this.filters
			},
			setFilters: function(t) {
				return t || (t = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = t, this
					.connect()) : this.filters = t, this
			},
			getFilter: function() {
				return this.getFilters()[0]
			},
			setFilter: function(t) {
				return this.setFilters(t ? [t] : [])
			},
			setPlaybackRate: function(t) {
				return this.hasPlaybackControl === !1 ? void console.warn(
					"THREE.Audio: this Audio has no playback control.") : (this.playbackRate = t, this
					.isPlaying === !0 && this.source.playbackRate.setValueAtTime(this.playbackRate, this
						.context.currentTime), this)
			},
			getPlaybackRate: function() {
				return this.playbackRate
			},
			onEnded: function() {
				this.isPlaying = !1
			},
			getLoop: function() {
				return this.hasPlaybackControl === !1 ? (console.warn(
					"THREE.Audio: this Audio has no playback control."), !1) : this.loop
			},
			setLoop: function(t) {
				return this.hasPlaybackControl === !1 ? void console.warn(
					"THREE.Audio: this Audio has no playback control.") : (this.loop = t, this
					.isPlaying === !0 && (this.source.loop = this.loop), this)
			},
			getVolume: function() {
				return this.gain.gain.value
			},
			setVolume: function(t) {
				return this.gain.gain.value = t, this
			}
		}), Wn.prototype = Object.assign(Object.create(jn.prototype), {
			constructor: Wn,
			getOutput: function() {
				return this.panner
			},
			getRefDistance: function() {
				return this.panner.refDistance
			},
			setRefDistance: function(t) {
				this.panner.refDistance = t
			},
			getRolloffFactor: function() {
				return this.panner.rolloffFactor
			},
			setRolloffFactor: function(t) {
				this.panner.rolloffFactor = t
			},
			getDistanceModel: function() {
				return this.panner.distanceModel
			},
			setDistanceModel: function(t) {
				this.panner.distanceModel = t
			},
			getMaxDistance: function() {
				return this.panner.maxDistance
			},
			setMaxDistance: function(t) {
				this.panner.maxDistance = t
			},
			updateMatrixWorld: function() {
				var t = new a;
				return function(e) {
					ht.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this
						.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
				}
			}()
		}), Object.assign(Xn.prototype, {
			getFrequencyData: function() {
				return this.analyser.getByteFrequencyData(this.data), this.data
			},
			getAverageFrequency: function() {
				for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i];
				return t / e.length
			}
		}), Object.assign(qn.prototype, {
			accumulate: function(t, e) {
				var i = this.buffer,
					n = this.valueSize,
					r = t * n + n,
					a = this.cumulativeWeight;
				if (0 === a) {
					for (var o = 0; o !== n; ++o) i[r + o] = i[o];
					a = e
				} else {
					a += e;
					var s = e / a;
					this._mixBufferRegion(i, r, 0, s, n)
				}
				this.cumulativeWeight = a
			},
			apply: function(t) {
				var e = this.valueSize,
					i = this.buffer,
					n = t * e + e,
					r = this.cumulativeWeight,
					a = this.binding;
				if (this.cumulativeWeight = 0, r < 1) {
					var o = 3 * e;
					this._mixBufferRegion(i, n, o, 1 - r, e)
				}
				for (var s = e, c = e + e; s !== c; ++s)
					if (i[s] !== i[s + e]) {
						a.setValue(i, n);
						break
					}
			},
			saveOriginalState: function() {
				var t = this.binding,
					e = this.buffer,
					i = this.valueSize,
					n = 3 * i;
				t.getValue(e, n);
				for (var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
				this.cumulativeWeight = 0
			},
			restoreOriginalState: function() {
				var t = 3 * this.valueSize;
				this.binding.setValue(this.buffer, t)
			},
			_select: function(t, e, i, n, r) {
				if (n >= .5)
					for (var a = 0; a !== r; ++a) t[e + a] = t[i + a]
			},
			_slerp: function(t, e, i, n) {
				r.slerpFlat(t, e, t, e, t, i, n)
			},
			_lerp: function(t, e, i, n, r) {
				for (var a = 1 - n, o = 0; o !== r; ++o) {
					var s = e + o;
					t[s] = t[s] * a + t[i + o] * n
				}
			}
		}), Object.assign(Yn.prototype, {
			getValue: function(t, e) {
				this.bind();
				var i = this._targetGroup.nCachedObjects_,
					n = this._bindings[i];
				void 0 !== n && n.getValue(t, e)
			},
			setValue: function(t, e) {
				for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !==
					r; ++n) i[n].setValue(t, e)
			},
			bind: function() {
				for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !==
					i; ++e) t[e].bind()
			},
			unbind: function() {
				for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !==
					i; ++e) t[e].unbind()
			}
		}), Object.assign(Zn, {
			Composite: Yn,
			create: function(t, e, i) {
				return t && t.isAnimationObjectGroup ? new Zn.Composite(t, e, i) : new Zn(t, e, i)
			},
			sanitizeNodeName: function(t) {
				return t.replace(/\s/g, "_").replace(/[^\w-]/g, "")
			},
			parseTrackName: function() {
				var t = /((?:[\w-]+[\/:])*)/,
					e = /([\w-\.]+)?/,
					i = /(?:\.([\w-]+)(?:\[(.+)\])?)?/,
					n = /\.([\w-]+)(?:\[(.+)\])?/,
					r = new RegExp("^" + t.source + e.source + i.source + n.source + "$"),
					a = ["material", "materials", "bones"];
				return function(t) {
					var e = r.exec(t);
					if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
					var i = {
							nodeName: e[2],
							objectName: e[3],
							objectIndex: e[4],
							propertyName: e[5],
							propertyIndex: e[6]
						},
						n = i.nodeName && i.nodeName.lastIndexOf(".");
					if (void 0 !== n && n !== -1) {
						var o = i.nodeName.substring(n + 1);
						a.indexOf(o) !== -1 && (i.nodeName = i.nodeName.substring(0, n), i.objectName =
							o)
					}
					if (null === i.propertyName || 0 === i.propertyName.length) throw new Error(
						"PropertyBinding: can not parse propertyName from trackName: " + t);
					return i
				}
			}(),
			findNode: function(t, e) {
				if (!e || "" === e || "root" === e || "." === e || e === -1 || e === t.name || e === t.uuid)
					return t;
				if (t.skeleton) {
					var i = function(t) {
							for (var i = 0; i < t.bones.length; i++) {
								var n = t.bones[i];
								if (n.name === e) return n
							}
							return null
						},
						n = i(t.skeleton);
					if (n) return n
				}
				if (t.children) {
					var r = function(t) {
							for (var i = 0; i < t.length; i++) {
								var n = t[i];
								if (n.name === e || n.uuid === e) return n;
								var a = r(n.children);
								if (a) return a
							}
							return null
						},
						a = r(t.children);
					if (a) return a
				}
				return null
			}
		}), Object.assign(Zn.prototype, {
			_getValue_unavailable: function() {},
			_setValue_unavailable: function() {},
			BindingType: {
				Direct: 0,
				EntireArray: 1,
				ArrayElement: 2,
				HasFromToArray: 3
			},
			Versioning: {
				None: 0,
				NeedsUpdate: 1,
				MatrixWorldNeedsUpdate: 2
			},
			GetterByBindingType: [function(t, e) {
				t[e] = this.node[this.propertyName]
			}, function(t, e) {
				for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
			}, function(t, e) {
				t[e] = this.resolvedProperty[this.propertyIndex]
			}, function(t, e) {
				this.resolvedProperty.toArray(t, e)
			}],
			SetterByBindingTypeAndVersioning: [
				[function(t, e) {
					this.targetObject[this.propertyName] = t[e]
				}, function(t, e) {
					this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
				}, function(t, e) {
					this.targetObject[this.propertyName] = t[e], this.targetObject
						.matrixWorldNeedsUpdate = !0
				}],
				[function(t, e) {
					for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
				}, function(t, e) {
					for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[
						e++];
					this.targetObject.needsUpdate = !0
				}, function(t, e) {
					for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[
						e++];
					this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function(t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e]
				}, function(t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
				}, function(t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject
						.matrixWorldNeedsUpdate = !0
				}],
				[function(t, e) {
					this.resolvedProperty.fromArray(t, e)
				}, function(t, e) {
					this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
				}, function(t, e) {
					this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
				}]
			],
			getValue: function(t, e) {
				this.bind(), this.getValue(t, e)
			},
			setValue: function(t, e) {
				this.bind(), this.setValue(t, e)
			},
			bind: function() {
				var t = this.node,
					e = this.parsedPath,
					i = e.objectName,
					n = e.propertyName,
					r = e.propertyIndex;
				if (t || (t = Zn.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this
					.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t)
					return void console.error("THREE.PropertyBinding: Trying to update node for track: " +
						this.path + " but it wasn't found.");
				if (i) {
					var a = e.objectIndex;
					switch (i) {
						case "materials":
							if (!t.material) return void console.error(
								"THREE.PropertyBinding: Can not bind to material as node does not have a material.",
								this);
							if (!t.material.materials) return void console.error(
								"THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
								this);
							t = t.material.materials;
							break;
						case "bones":
							if (!t.skeleton) return void console.error(
								"THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
								this);
							t = t.skeleton.bones;
							for (var o = 0; o < t.length; o++)
								if (t[o].name === a) {
									a = o;
									break
								} break;
						default:
							if (void 0 === t[i]) return void console.error(
								"THREE.PropertyBinding: Can not bind to objectName of node undefined.",
								this);
							t = t[i]
					}
					if (void 0 !== a) {
						if (void 0 === t[a]) return void console.error(
							"THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
							this, t);
						t = t[a]
					}
				}
				var s = t[n];
				if (void 0 === s) {
					var c = e.nodeName;
					return void console.error(
						"THREE.PropertyBinding: Trying to update property for track: " + c + "." + n +
						" but it wasn't found.", t)
				}
				var h = this.Versioning.None;
				void 0 !== t.needsUpdate ? (h = this.Versioning.NeedsUpdate, this.targetObject = t) :
					void 0 !== t.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate, this
						.targetObject = t);
				var l = this.BindingType.Direct;
				if (void 0 !== r) {
					if ("morphTargetInfluences" === n) {
						if (!t.geometry) return void console.error(
							"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
							this);
						if (t.geometry.isBufferGeometry) {
							if (!t.geometry.morphAttributes) return void console.error(
								"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
								this);
							for (var o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
								if (t.geometry.morphAttributes.position[o].name === r) {
									r = o;
									break
								}
						} else {
							if (!t.geometry.morphTargets) return void console.error(
								"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",
								this);
							for (var o = 0; o < this.node.geometry.morphTargets.length; o++)
								if (t.geometry.morphTargets[o].name === r) {
									r = o;
									break
								}
						}
					}
					l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
				} else void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType
					.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this
					.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
				this.getValue = this.GetterByBindingType[l], this.setValue = this
					.SetterByBindingTypeAndVersioning[l][h]
			},
			unbind: function() {
				this.node = null, this.getValue = this._getValue_unbound, this.setValue = this
					._setValue_unbound
			}
		}), Object.assign(Zn.prototype, {
			_getValue_unbound: Zn.prototype.getValue,
			_setValue_unbound: Zn.prototype.setValue
		}), Object.assign(Jn.prototype, {
			isAnimationObjectGroup: !0,
			add: function() {
				for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID,
						r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = 0, h =
						arguments.length; c !== h; ++c) {
					var l = arguments[c],
						u = l.uuid,
						p = n[u],
						d = void 0;
					if (void 0 === p) {
						p = e++, n[u] = p, t.push(l);
						for (var f = 0, m = s; f !== m; ++f) o[f].push(new Zn(l, r[f], a[f]))
					} else if (p < i) {
						d = t[p];
						var g = --i,
							v = t[g];
						n[v.uuid] = p, t[p] = v, n[u] = g, t[g] = l;
						for (var f = 0, m = s; f !== m; ++f) {
							var y = o[f],
								x = y[g],
								b = y[p];
							y[p] = x, void 0 === b && (b = new Zn(l, r[f], a[f])), y[g] = b
						}
					} else t[p] !== d && console.error(
						"THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
					)
				}
				this.nCachedObjects_ = i
			},
			remove: function() {
				for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this
						._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
					var s = arguments[a],
						c = s.uuid,
						h = i[c];
					if (void 0 !== h && h >= e) {
						var l = e++,
							u = t[l];
						i[u.uuid] = h, t[h] = u, i[c] = l, t[l] = s;
						for (var p = 0, d = r; p !== d; ++p) {
							var f = n[p],
								m = f[l],
								g = f[h];
							f[h] = m, f[l] = g
						}
					}
				}
				this.nCachedObjects_ = e
			},
			uncache: function() {
				for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID,
						r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
					var c = arguments[o],
						h = c.uuid,
						l = n[h];
					if (void 0 !== l)
						if (delete n[h], l < i) {
							var u = --i,
								p = t[u],
								d = --e,
								f = t[d];
							n[p.uuid] = l, t[l] = p, n[f.uuid] = u, t[u] = f, t.pop();
							for (var m = 0, g = a; m !== g; ++m) {
								var v = r[m],
									y = v[u],
									x = v[d];
								v[l] = y, v[u] = x, v.pop()
							}
						} else {
							var d = --e,
								f = t[d];
							n[f.uuid] = l, t[l] = f, t.pop();
							for (var m = 0, g = a; m !== g; ++m) {
								var v = r[m];
								v[l] = v[d], v.pop()
							}
						}
				}
				this.nCachedObjects_ = i
			},
			subscribe_: function(t, e) {
				var i = this._bindingsIndicesByPath,
					n = i[t],
					r = this._bindings;
				if (void 0 !== n) return r[n];
				var a = this._paths,
					o = this._parsedPaths,
					s = this._objects,
					c = s.length,
					h = this.nCachedObjects_,
					l = new Array(c);
				n = r.length, i[t] = n, a.push(t), o.push(e), r.push(l);
				for (var u = h, p = s.length; u !== p; ++u) {
					var d = s[u];
					l[u] = new Zn(d, t, e)
				}
				return l
			},
			unsubscribe_: function(t) {
				var e = this._bindingsIndicesByPath,
					i = e[t];
				if (void 0 !== i) {
					var n = this._paths,
						r = this._parsedPaths,
						a = this._bindings,
						o = a.length - 1,
						s = a[o],
						c = t[o];
					e[c] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
				}
			}
		}), Object.assign(Qn.prototype, {
			play: function() {
				return this._mixer._activateAction(this), this
			},
			stop: function() {
				return this._mixer._deactivateAction(this), this.reset()
			},
			reset: function() {
				return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this
					._startTime = null, this.stopFading().stopWarping()
			},
			isRunning: function() {
				return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime &&
					this._mixer._isActiveAction(this)
			},
			isScheduled: function() {
				return this._mixer._isActiveAction(this)
			},
			startAt: function(t) {
				return this._startTime = t, this
			},
			setLoop: function(t, e) {
				return this.loop = t, this.repetitions = e, this
			},
			setEffectiveWeight: function(t) {
				return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
			},
			getEffectiveWeight: function() {
				return this._effectiveWeight
			},
			fadeIn: function(t) {
				return this._scheduleFading(t, 0, 1)
			},
			fadeOut: function(t) {
				return this._scheduleFading(t, 1, 0)
			},
			crossFadeFrom: function(t, e, i) {
				if (t.fadeOut(e), this.fadeIn(e), i) {
					var n = this._clip.duration,
						r = t._clip.duration,
						a = r / n,
						o = n / r;
					t.warp(1, a, e), this.warp(o, 1, e)
				}
				return this
			},
			crossFadeTo: function(t, e, i) {
				return t.crossFadeFrom(this, e, i)
			},
			stopFading: function() {
				var t = this._weightInterpolant;
				return null !== t && (this._weightInterpolant = null, this._mixer
					._takeBackControlInterpolant(t)), this
			},
			setEffectiveTimeScale: function(t) {
				return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this
					.stopWarping()
			},
			getEffectiveTimeScale: function() {
				return this._effectiveTimeScale
			},
			setDuration: function(t) {
				return this.timeScale = this._clip.duration / t, this.stopWarping()
			},
			syncWith: function(t) {
				return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
			},
			halt: function(t) {
				return this.warp(this._effectiveTimeScale, 0, t)
			},
			warp: function(t, e, i) {
				var n = this._mixer,
					r = n.time,
					a = this._timeScaleInterpolant,
					o = this.timeScale;
				null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
				var s = a.parameterPositions,
					c = a.sampleValues;
				return s[0] = r, s[1] = r + i, c[0] = t / o, c[1] = e / o, this
			},
			stopWarping: function() {
				var t = this._timeScaleInterpolant;
				return null !== t && (this._timeScaleInterpolant = null, this._mixer
					._takeBackControlInterpolant(t)), this
			},
			getMixer: function() {
				return this._mixer
			},
			getClip: function() {
				return this._clip
			},
			getRoot: function() {
				return this._localRoot || this._mixer._root
			},
			_update: function(t, e, i, n) {
				if (!this.enabled) return void this._updateWeight(t);
				var r = this._startTime;
				if (null !== r) {
					var a = (t - r) * i;
					if (a < 0 || 0 === i) return;
					this._startTime = null, e = i * a
				}
				e *= this._updateTimeScale(t);
				var o = this._updateTime(e),
					s = this._updateWeight(t);
				if (s > 0)
					for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !==
						u; ++l) c[l].evaluate(o), h[l].accumulate(n, s)
			},
			_updateWeight: function(t) {
				var e = 0;
				if (this.enabled) {
					e = this.weight;
					var i = this._weightInterpolant;
					if (null !== i) {
						var n = i.evaluate(t)[0];
						e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this
							.enabled = !1))
					}
				}
				return this._effectiveWeight = e, e
			},
			_updateTimeScale: function(t) {
				var e = 0;
				if (!this.paused) {
					e = this.timeScale;
					var i = this._timeScaleInterpolant;
					if (null !== i) {
						var n = i.evaluate(t)[0];
						e *= n, t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this
							.paused = !0 : this.timeScale = e)
					}
				}
				return this._effectiveTimeScale = e, e
			},
			_updateTime: function(t) {
				var e = this.time + t;
				if (0 === t) return e;
				var i = this._clip.duration,
					n = this.loop,
					r = this._loopCount;
				if (n === cs) {
					r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
					t: {
						if (e >= i) e = i;
						else {
							if (!(e < 0)) break t;
							e = 0
						}
						this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
						this._mixer.dispatchEvent({
							type: "finished",
							action: this,
							direction: t < 0 ? -1 : 1
						})
					}
				} else {
					var a = n === ls;
					if (r === -1 && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) :
							this._setEndings(0 === this.repetitions, !0, a)), e >= i || e < 0) {
						var o = Math.floor(e / i);
						e -= i * o, r += Math.abs(o);
						var s = this.repetitions - r;
						if (s < 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t >
							0 ? i : 0, this._mixer.dispatchEvent({
								type: "finished",
								action: this,
								direction: t > 0 ? 1 : -1
							});
						else {
							if (0 === s) {
								var c = t < 0;
								this._setEndings(c, !c, a)
							} else this._setEndings(!1, !1, a);
							this._loopCount = r, this._mixer.dispatchEvent({
								type: "loop",
								action: this,
								loopDelta: o
							})
						}
					}
					if (a && 1 === (1 & r)) return this.time = e, i - e
				}
				return this.time = e, e
			},
			_setEndings: function(t, e, i) {
				var n = this._interpolantSettings;
				i ? (n.endingStart = ms, n.endingEnd = ms) : (t ? n.endingStart = this.zeroSlopeAtStart ?
					ms : fs : n.endingStart = gs, e ? n.endingEnd = this.zeroSlopeAtEnd ? ms : fs : n
					.endingEnd = gs)
			},
			_scheduleFading: function(t, e, i) {
				var n = this._mixer,
					r = n.time,
					a = this._weightInterpolant;
				null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
				var o = a.parameterPositions,
					s = a.sampleValues;
				return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this
			}
		}), Object.assign(Kn.prototype, e.prototype, {
			_bindAction: function(t, e) {
				var i = t._localRoot || this._root,
					n = t._clip.tracks,
					r = n.length,
					a = t._propertyBindings,
					o = t._interpolants,
					s = i.uuid,
					c = this._bindingsByRootAndName,
					h = c[s];
				void 0 === h && (h = {}, c[s] = h);
				for (var l = 0; l !== r; ++l) {
					var u = n[l],
						p = u.name,
						d = h[p];
					if (void 0 !== d) a[l] = d;
					else {
						if (d = a[l], void 0 !== d) {
							null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s,
								p));
							continue
						}
						var f = e && e._propertyBindings[l].binding.parsedPath;
						d = new qn(Zn.create(i, p, f), u.ValueTypeName, u.getValueSize()), ++d
							.referenceCount, this._addInactiveBinding(d, s, p), a[l] = d
					}
					o[l].resultBuffer = d.buffer
				}
			},
			_activateAction: function(t) {
				if (!this._isActiveAction(t)) {
					if (null === t._cacheIndex) {
						var e = (t._localRoot || this._root).uuid,
							i = t._clip.uuid,
							n = this._actionsByClip[i];
						this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
					}
					for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
						var s = r[a];
						0 === s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
					}
					this._lendAction(t)
				}
			},
			_deactivateAction: function(t) {
				if (this._isActiveAction(t)) {
					for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
						var r = e[i];
						0 === --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
					}
					this._takeBackAction(t)
				}
			},
			_initMemoryManager: function() {
				this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [],
					this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this
					._controlInterpolants = [], this._nActiveControlInterpolants = 0;
				var t = this;
				this.stats = {
					actions: {
						get total() {
							return t._actions.length
						},
						get inUse() {
							return t._nActiveActions
						}
					},
					bindings: {
						get total() {
							return t._bindings.length
						},
						get inUse() {
							return t._nActiveBindings
						}
					},
					controlInterpolants: {
						get total() {
							return t._controlInterpolants.length
						},
						get inUse() {
							return t._nActiveControlInterpolants
						}
					}
				}
			},
			_isActiveAction: function(t) {
				var e = t._cacheIndex;
				return null !== e && e < this._nActiveActions
			},
			_addInactiveAction: function(t, e, i) {
				var n = this._actions,
					r = this._actionsByClip,
					a = r[e];
				if (void 0 === a) a = {
					knownActions: [t],
					actionByRoot: {}
				}, t._byClipCacheIndex = 0, r[e] = a;
				else {
					var o = a.knownActions;
					t._byClipCacheIndex = o.length, o.push(t)
				}
				t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
			},
			_removeInactiveAction: function(t) {
				var e = this._actions,
					i = e[e.length - 1],
					n = t._cacheIndex;
				i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
				var r = t._clip.uuid,
					a = this._actionsByClip,
					o = a[r],
					s = o.knownActions,
					c = s[s.length - 1],
					h = t._byClipCacheIndex;
				c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null;
				var l = o.actionByRoot,
					u = (t._localRoot || this._root).uuid;
				delete l[u], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t)
			},
			_removeInactiveBindingsForAction: function(t) {
				for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
					var r = e[i];
					0 === --r.referenceCount && this._removeInactiveBinding(r)
				}
			},
			_lendAction: function(t) {
				var e = this._actions,
					i = t._cacheIndex,
					n = this._nActiveActions++,
					r = e[n];
				t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
			},
			_takeBackAction: function(t) {
				var e = this._actions,
					i = t._cacheIndex,
					n = --this._nActiveActions,
					r = e[n];
				t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
			},
			_addInactiveBinding: function(t, e, i) {
				var n = this._bindingsByRootAndName,
					r = n[e],
					a = this._bindings;
				void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = a.length, a.push(t)
			},
			_removeInactiveBinding: function(t) {
				var e = this._bindings,
					i = t.binding,
					n = i.rootNode.uuid,
					r = i.path,
					a = this._bindingsByRootAndName,
					o = a[n],
					s = e[e.length - 1],
					c = t._cacheIndex;
				s._cacheIndex = c, e[c] = s, e.pop(), delete o[r];
				t: {
					for (var h in o) break t;delete a[n]
				}
			},
			_lendBinding: function(t) {
				var e = this._bindings,
					i = t._cacheIndex,
					n = this._nActiveBindings++,
					r = e[n];
				t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
			},
			_takeBackBinding: function(t) {
				var e = this._bindings,
					i = t._cacheIndex,
					n = --this._nActiveBindings,
					r = e[n];
				t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
			},
			_lendControlInterpolant: function() {
				var t = this._controlInterpolants,
					e = this._nActiveControlInterpolants++,
					i = t[e];
				return void 0 === i && (i = new tn(new Float32Array(2), new Float32Array(2), 1, this
					._controlInterpolantsResultBuffer), i.__cacheIndex = e, t[e] = i), i
			},
			_takeBackControlInterpolant: function(t) {
				var e = this._controlInterpolants,
					i = t.__cacheIndex,
					n = --this._nActiveControlInterpolants,
					r = e[n];
				t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
			},
			_controlInterpolantsResultBuffer: new Float32Array(1),
			clipAction: function(t, e) {
				var i = e || this._root,
					n = i.uuid,
					r = "string" == typeof t ? pn.findByName(i, t) : t,
					a = null !== r ? r.uuid : t,
					o = this._actionsByClip[a],
					s = null;
				if (void 0 !== o) {
					var c = o.actionByRoot[n];
					if (void 0 !== c) return c;
					s = o.knownActions[0], null === r && (r = s._clip)
				}
				if (null === r) return null;
				var h = new Qn(this, r, e);
				return this._bindAction(h, s), this._addInactiveAction(h, a, n), h
			},
			existingAction: function(t, e) {
				var i = e || this._root,
					n = i.uuid,
					r = "string" == typeof t ? pn.findByName(i, t) : t,
					a = r ? r.uuid : t,
					o = this._actionsByClip[a];
				return void 0 !== o ? o.actionByRoot[n] || null : null
			},
			stopAllAction: function() {
				var t = this._actions,
					e = this._nActiveActions,
					i = this._bindings,
					n = this._nActiveBindings;
				this._nActiveActions = 0, this._nActiveBindings = 0;
				for (var r = 0; r !== e; ++r) t[r].reset();
				for (var r = 0; r !== n; ++r) i[r].useCount = 0;
				return this
			},
			update: function(t) {
				t *= this.timeScale;
				for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t),
						a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
					var s = e[o];
					s._update(n, t, r, a)
				}
				for (var c = this._bindings, h = this._nActiveBindings, o = 0; o !== h; ++o) c[o].apply(a);
				return this
			},
			getRoot: function() {
				return this._root
			},
			uncacheClip: function(t) {
				var e = this._actions,
					i = t.uuid,
					n = this._actionsByClip,
					r = n[i];
				if (void 0 !== r) {
					for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
						var c = a[o];
						this._deactivateAction(c);
						var h = c._cacheIndex,
							l = e[e.length - 1];
						c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, e[h] = l, e
							.pop(), this._removeInactiveBindingsForAction(c)
					}
					delete n[i]
				}
			},
			uncacheRoot: function(t) {
				var e = t.uuid,
					i = this._actionsByClip;
				for (var n in i) {
					var r = i[n].actionByRoot,
						a = r[e];
					void 0 !== a && (this._deactivateAction(a), this._removeInactiveAction(a))
				}
				var o = this._bindingsByRootAndName,
					s = o[e];
				if (void 0 !== s)
					for (var c in s) {
						var h = s[c];
						h.restoreOriginalState(), this._removeInactiveBinding(h)
					}
			},
			uncacheAction: function(t, e) {
				var i = this.existingAction(t, e);
				null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
			}
		}), $n.prototype.clone = function() {
			return new $n(void 0 === this.value.clone ? this.value : this.value.clone())
		}, tr.prototype = Object.assign(Object.create(St.prototype), {
			constructor: tr,
			isInstancedBufferGeometry: !0,
			copy: function(t) {
				return St.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			}
		}), Object.defineProperties(er.prototype, {
			count: {
				get: function() {
					return this.data.count
				}
			},
			array: {
				get: function() {
					return this.data.array
				}
			}
		}), Object.assign(er.prototype, {
			isInterleavedBufferAttribute: !0,
			setX: function(t, e) {
				return this.data.array[t * this.data.stride + this.offset] = e, this
			},
			setY: function(t, e) {
				return this.data.array[t * this.data.stride + this.offset + 1] = e, this
			},
			setZ: function(t, e) {
				return this.data.array[t * this.data.stride + this.offset + 2] = e, this
			},
			setW: function(t, e) {
				return this.data.array[t * this.data.stride + this.offset + 3] = e, this
			},
			getX: function(t) {
				return this.data.array[t * this.data.stride + this.offset]
			},
			getY: function(t) {
				return this.data.array[t * this.data.stride + this.offset + 1]
			},
			getZ: function(t) {
				return this.data.array[t * this.data.stride + this.offset + 2]
			},
			getW: function(t) {
				return this.data.array[t * this.data.stride + this.offset + 3]
			},
			setXY: function(t, e, i) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[
					t + 1] = i, this
			},
			setXYZ: function(t, e, i, n) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[
					t + 1] = i, this.data.array[t + 2] = n, this
			},
			setXYZW: function(t, e, i, n, r) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[
					t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
			}
		}), Object.defineProperty(ir.prototype, "needsUpdate", {
			set: function(t) {
				t === !0 && this.version++
			}
		}), Object.assign(ir.prototype, {
			isInterleavedBuffer: !0,
			setArray: function(t) {
				if (Array.isArray(t)) throw new TypeError(
					"THREE.BufferAttribute: array should be a Typed Array.");
				this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t
			},
			setDynamic: function(t) {
				return this.dynamic = t, this
			},
			copy: function(t) {
				return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t
					.stride, this.dynamic = t.dynamic, this
			},
			copyAt: function(t, e, i) {
				t *= this.stride, i *= e.stride;
				for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
				return this
			},
			set: function(t, e) {
				return void 0 === e && (e = 0), this.array.set(t, e), this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			onUpload: function(t) {
				return this.onUploadCallback = t, this
			}
		}), nr.prototype = Object.assign(Object.create(ir.prototype), {
			constructor: nr,
			isInstancedInterleavedBuffer: !0,
			copy: function(t) {
				return ir.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
			}
		}), rr.prototype = Object.assign(Object.create(ft.prototype), {
			constructor: rr,
			isInstancedBufferAttribute: !0,
			copy: function(t) {
				return ft.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
			}
		}), Object.assign(ar.prototype, {
			linePrecision: 1,
			set: function(t, e) {
				this.ray.set(t, e)
			},
			setFromCamera: function(t, e) {
				e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray
						.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e
					.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e
						.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e
						.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
			},
			intersectObject: function(t, e) {
				var i = [];
				return sr(t, this, i, e), i.sort(or), i
			},
			intersectObjects: function(t, e) {
				var i = [];
				if (Array.isArray(t) === !1) return console.warn(
					"THREE.Raycaster.intersectObjects: objects is not an Array."), i;
				for (var n = 0, r = t.length; n < r; n++) sr(t[n], this, i, e);
				return i.sort(or), i
			}
		}), Object.assign(cr.prototype, {
			start: function() {
				this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this
					.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
			},
			stop: function() {
				this.getElapsedTime(), this.running = !1, this.autoStart = !1
			},
			getElapsedTime: function() {
				return this.getDelta(), this.elapsedTime
			},
			getDelta: function() {
				var t = 0;
				if (this.autoStart && !this.running) return this.start(), 0;
				if (this.running) {
					var e = ("undefined" == typeof performance ? Date : performance).now();
					t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
				}
				return t
			}
		}), Object.assign(hr.prototype, {
			set: function(t, e, i) {
				return this.radius = t, this.phi = e, this.theta = i,
					this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
			},
			makeSafe: function() {
				var t = 1e-6;
				return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
			},
			setFromVector3: function(t) {
				return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this
					.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(Ps.clamp(t.y / this.radius, -1,
						1))), this
			}
		}), Object.assign(lr.prototype, {
			set: function(t, e, i) {
				return this.radius = t, this.theta = e, this.y = i, this
			},
			clone: function() {
				return (new this.constructor).copy(this)
			},
			copy: function(t) {
				return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
			},
			setFromVector3: function(t) {
				return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z),
					this.y = t.y, this
			}
		}), ur.prototype = Object.create(ht.prototype), ur.prototype.constructor = ur, ur.prototype
		.isImmediateRenderObject = !0, pr.prototype = Object.create(De.prototype), pr.prototype.constructor = pr, pr
		.prototype.update = function() {
			var t = new a,
				e = new a,
				i = new o;
			return function() {
				var n = ["a", "b", "c"];
				this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
				var r = this.object.matrixWorld,
					a = this.geometry.attributes.position,
					o = this.object.geometry;
				if (o && o.isGeometry)
					for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++)
						for (var p = c[l], d = 0, f = p.vertexNormals.length; d < f; d++) {
							var m = s[p[n[d]]],
								g = p.vertexNormals[d];
							t.copy(m).applyMatrix4(r), e.copy(g).applyMatrix3(i).normalize().multiplyScalar(this
								.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e
								.z), h += 1
						} else if (o && o.isBufferGeometry)
							for (var v = o.attributes.position, y = o.attributes.normal, h = 0, d = 0, f = v
									.count; d < f; d++) t.set(v.getX(d), v.getY(d), v.getZ(d)).applyMatrix4(r),
								e.set(y.getX(d), y.getY(d), y.getZ(d)), e.applyMatrix3(i).normalize()
								.multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(
									h, e.x, e.y, e.z), h += 1;
				a.needsUpdate = !0
			}
		}(), dr.prototype = Object.create(ht.prototype), dr.prototype.constructor = dr, dr.prototype.dispose =
		function() {
			this.cone.geometry.dispose(), this.cone.material.dispose()
		}, dr.prototype.update = function() {
			var t = new a,
				e = new a;
			return function() {
				this.light.updateMatrixWorld();
				var i = this.light.distance ? this.light.distance : 1e3,
					n = i * Math.tan(this.light.angle);
				this.cone.scale.set(n, n, i), t.setFromMatrixPosition(this.light.matrixWorld), e
					.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)),
					void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color
					.copy(this.light.color)
			}
		}(), mr.prototype = Object.create(De.prototype), mr.prototype.constructor = mr, mr.prototype
		.updateMatrixWorld = function() {
			var t = new a,
				e = new n,
				i = new n;
			return function(n) {
				var r = this.bones,
					a = this.geometry,
					o = a.getAttribute("position");
				i.getInverse(this.root.matrixWorld);
				for (var s = 0, c = 0; s < r.length; s++) {
					var h = r[s];
					h.parent && h.parent.isBone && (e.multiplyMatrices(i, h.matrixWorld), t
						.setFromMatrixPosition(e), o.setXYZ(c, t.x, t.y, t.z), e.multiplyMatrices(i, h
							.parent.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c + 1, t.x, t.y, t
							.z), c += 2)
				}
				a.getAttribute("position").needsUpdate = !0, ht.prototype.updateMatrixWorld.call(this, n)
			}
		}(), gr.prototype = Object.create(Nt.prototype), gr.prototype.constructor = gr, gr.prototype.dispose =
		function() {
			this.geometry.dispose(), this.material.dispose()
		}, gr.prototype.update = function() {
			void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
		}, vr.prototype = Object.create(ht.prototype), vr.prototype.constructor = vr, vr.prototype.dispose =
		function() {
			this.children[0].geometry.dispose(), this.children[0].material.dispose()
		}, vr.prototype.update = function() {
			var t = .5 * this.light.width,
				e = .5 * this.light.height,
				i = this.line.geometry.attributes.position,
				n = i.array;
			n[0] = t, n[1] = -e, n[2] = 0, n[3] = t, n[4] = e, n[5] = 0, n[6] = -t, n[7] = e, n[8] = 0, n[9] = -t,
				n[10] = -e, n[11] = 0, n[12] = t, n[13] = -e, n[14] = 0, i.needsUpdate = !0, void 0 !== this.color ?
				this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
		}, yr.prototype = Object.create(ht.prototype), yr.prototype.constructor = yr, yr.prototype.dispose =
		function() {
			this.children[0].geometry.dispose(), this.children[0].material.dispose()
		}, yr.prototype.update = function() {
			var t = new a,
				e = new q,
				i = new q;
			return function() {
				var n = this.children[0];
				if (void 0 !== this.color) this.material.color.set(this.color);
				else {
					var r = n.geometry.getAttribute("color");
					e.copy(this.light.color), i.copy(this.light.groundColor);
					for (var a = 0, o = r.count; a < o; a++) {
						var s = a < o / 2 ? e : i;
						r.setXYZ(a, s.r, s.g, s.b)
					}
					r.needsUpdate = !0
				}
				n.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
			}
		}(), xr.prototype = Object.create(De.prototype), xr.prototype.constructor = xr, br.prototype = Object
		.create(De.prototype), br.prototype.constructor = br, _r.prototype = Object.create(De.prototype), _r
		.prototype.constructor = _r, _r.prototype.update = function() {
			var t = new a,
				e = new a,
				i = new o;
			return function() {
				this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
				for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object
						.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
					var u = s[h],
						p = u.normal;
					t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n), e.copy(p)
						.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), r.setXYZ(c, t.x, t.y, t
							.z), c += 1, r.setXYZ(c, e.x, e.y, e.z), c += 1
				}
				r.needsUpdate = !0
			}
		}(), wr.prototype = Object.create(ht.prototype), wr.prototype.constructor = wr, wr.prototype.dispose =
		function() {
			this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry
				.dispose(), this.targetLine.material.dispose()
		}, wr.prototype.update = function() {
			var t = new a,
				e = new a,
				i = new a;
			return function() {
				t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target
						.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(i), void 0 !== this.color ? (
						this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this
							.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine
						.material.color.copy(this.light.color)), this.targetLine.lookAt(i), this.targetLine
					.scale.z = i.length()
			}
		}(), Mr.prototype = Object.create(De.prototype), Mr.prototype.constructor = Mr, Mr.prototype.update =
		function() {
			function t(t, a, o, s) {
				n.set(a, o, s).unproject(r);
				var c = i[t];
				if (void 0 !== c)
					for (var h = e.getAttribute("position"), l = 0, u = c.length; l < u; l++) h.setXYZ(c[l], n.x, n
						.y, n.z)
			}
			var e, i, n = new a,
				r = new lt;
			return function() {
				e = this.geometry, i = this.pointMap;
				var n = 1,
					a = 1;
				r.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t(
						"n1", -n, -a, -1), t("n2", n, -a, -1), t("n3", -n, a, -1), t("n4", n, a, -1), t("f1", -
						n, -a, 1), t("f2", n, -a, 1), t("f3", -n, a, 1), t("f4", n, a, 1), t("u1", .7 * n, 1.1 *
						a, -1), t("u2", .7 * -n, 1.1 * a, -1), t("u3", 0, 2 * a, -1), t("cf1", -n, 0, 1), t(
						"cf2", n, 0, 1), t("cf3", 0, -a, 1), t("cf4", 0, a, 1), t("cn1", -n, 0, -1), t("cn2", n,
						0, -1), t("cn3", 0, -a, -1), t("cn4", 0, a, -1), e.getAttribute("position")
					.needsUpdate = !0
			}
		}(), Er.prototype = Object.create(De.prototype), Er.prototype.constructor = Er, Er.prototype.update =
		function() {
			var t = new et;
			return function(e) {
				if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."),
					void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
					var i = t.min,
						n = t.max,
						r = this.geometry.attributes.position,
						a = r.array;
					a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = i.x, a[4] = n.y, a[5] = n.z, a[6] = i.x, a[7] = i
						.y, a[8] = n.z, a[9] = n.x, a[10] = i.y, a[11] = n.z, a[12] = n.x, a[13] = n.y, a[14] =
						i.z, a[15] = i.x, a[16] = n.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[
							21] = n.x, a[22] = i.y, a[23] = i.z, r.needsUpdate = !0, this.geometry
						.computeBoundingSphere()
				}
			}
		}(), Er.prototype.setFromObject = function(t) {
			return this.object = t, this.update(), this
		}, Tr.prototype = Object.create(De.prototype), Tr.prototype.constructor = Tr, Tr.prototype
		.updateMatrixWorld = function(t) {
			var e = this.box;
			e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), ht
				.prototype.updateMatrixWorld.call(this, t))
		}, Sr.prototype = Object.create(Ue.prototype), Sr.prototype.constructor = Sr, Sr.prototype
		.updateMatrixWorld = function(t) {
			var e = -this.plane.constant;
			Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.lookAt(this
				.plane.normal), ht.prototype.updateMatrixWorld.call(this, t)
		};
	var ul, pl;
	Ar.prototype = Object.create(ht.prototype), Ar.prototype.constructor = Ar, Ar.prototype.setDirection =
		function() {
			var t, e = new a;
			return function(i) {
				i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0,
					0) : (e.set(i.z, 0, -i.x).normalize(), t = Math.acos(i.y), this.quaternion
					.setFromAxisAngle(
						e, t))
			}
		}(), Ar.prototype.setLength = function(t, e, i) {
			void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e),
					1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone
				.updateMatrix()
		}, Ar.prototype.setColor = function(t) {
			this.line.material.color.copy(t), this.cone.material.color.copy(t)
		}, Rr.prototype = Object.create(De.prototype), Rr.prototype.constructor = Rr;
	var dl = new a,
		fl = new Lr,
		ml = new Lr,
		gl = new Lr;
	Pr.prototype = Object.create(Rn.prototype), Pr.prototype.constructor = Pr, Pr.prototype.isCatmullRomCurve3 = !0,
		Pr.prototype.getPoint = function(t, e) {
			var i = e || new a,
				n = this.points,
				r = n.length,
				o = (r - (this.closed ? 0 : 1)) * t,
				s = Math.floor(o),
				c = o - s;
			this.closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / n.length) + 1) * n.length : 0 === c && s ===
				r - 1 && (s = r - 2, c = 1);
			var h, l, u, p;
			if (this.closed || s > 0 ? h = n[(s - 1) % r] : (dl.subVectors(n[0], n[1]).add(n[0]), h = dl), l = n[s %
					r], u = n[(s + 1) % r], this.closed || s + 2 < r ? p = n[(s + 2) % r] : (dl.subVectors(n[r - 1],
					n[r - 2]).add(n[r - 1]), p = dl), "centripetal" === this.curveType || "chordal" === this
				.curveType) {
				var d = "chordal" === this.curveType ? .5 : .25,
					f = Math.pow(h.distanceToSquared(l), d),
					m = Math.pow(l.distanceToSquared(u), d),
					g = Math.pow(u.distanceToSquared(p), d);
				m < 1e-4 && (m = 1), f < 1e-4 && (f = m), g < 1e-4 && (g = m), fl.initNonuniformCatmullRom(h.x, l.x,
						u.x, p.x, f, m, g), ml.initNonuniformCatmullRom(h.y, l.y, u.y, p.y, f, m, g), gl
					.initNonuniformCatmullRom(h.z, l.z, u.z, p.z, f, m, g)
			} else "catmullrom" === this.curveType && (fl.initCatmullRom(h.x, l.x, u.x, p.x, this.tension), ml
				.initCatmullRom(h.y, l.y, u.y, p.y, this.tension), gl.initCatmullRom(h.z, l.z, u.z, p.z, this
					.tension));
			return i.set(fl.calc(c), ml.calc(c), gl.calc(c)), i
		}, Pr.prototype.copy = function(t) {
			Rn.prototype.copy.call(this, t), this.points = [];
			for (var e = 0, i = t.points.length; e < i; e++) {
				var n = t.points[e];
				this.points.push(n.clone())
			}
			return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
		}, Cr.prototype = Object.create(Rn.prototype), Cr.prototype.constructor = Cr, Cr.prototype
		.isCubicBezierCurve3 = !0, Cr.prototype.getPoint = function(t, e) {
			var i = e || new a,
				n = this.v0,
				r = this.v1,
				o = this.v2,
				s = this.v3;
			return i.set(An(t, n.x, r.x, o.x, s.x), An(t, n.y, r.y, o.y, s.y), An(t, n.z, r.z, o.z, s.z)), i
		}, Cr.prototype.copy = function(t) {
			return Rn.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
				.v3.copy(t.v3), this
		}, Ir.prototype = Object.create(Rn.prototype), Ir.prototype.constructor = Ir, Ir.prototype
		.isQuadraticBezierCurve3 = !0, Ir.prototype.getPoint = function(t, e) {
			var i = e || new a,
				n = this.v0,
				r = this.v1,
				o = this.v2;
			return i.set(wn(t, n.x, r.x, o.x), wn(t, n.y, r.y, o.y), wn(t, n.z, r.z, o.z)), i
		}, Ir.prototype.copy = function(t) {
			return Rn.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}, Ur.prototype = Object.create(Rn.prototype), Ur.prototype.constructor = Ur, Ur.prototype.isLineCurve3 = !
		0, Ur.prototype.getPoint = function(t, e) {
			var i = e || new a;
			return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
		}, Ur.prototype.getPointAt = function(t, e) {
			return this.getPoint(t, e)
		}, Ur.prototype.copy = function(t) {
			return Rn.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
		}, Dr.prototype = Object.create(Cn.prototype), Dr.prototype.constructor = Dr, Dr.prototype.isArcCurve = !0;
	var vl = {
			createMultiMaterialObject: function(t, e) {
				for (var i = new Be, n = 0, r = e.length; n < r; n++) i.add(new Nt(t, e[n]));
				return i
			},
			detach: function(t, e, i) {
				t.applyMatrix(e.matrixWorld), e.remove(t), i.add(t)
			},
			attach: function(t, e, i) {
				t.applyMatrix((new n).getInverse(i.matrixWorld)), e.remove(t), i.add(t)
			}
		},
		yl = 0,
		xl = 1;
	Rn.create = function(t, e) {
			return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Rn
				.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
		}, Object.assign(Pn.prototype, {
			createPointsGeometry: function(t) {
				console.warn(
					"THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
				);
				var e = this.getPoints(t);
				return this.createGeometry(e)
			},
			createSpacedPointsGeometry: function(t) {
				console.warn(
					"THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
				);
				var e = this.getSpacedPoints(t);
				return this.createGeometry(e)
			},
			createGeometry: function(t) {
				console.warn(
					"THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
				);
				for (var e = new dt, i = 0, n = t.length; i < n; i++) {
					var r = t[i];
					e.vertices.push(new a(r.x, r.y, r.z || 0))
				}
				return e
			}
		}), Object.assign(On.prototype, {
			fromPoints: function(t) {
				console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this
					.setFromPoints(t)
			}
		}), ea.prototype = Object.create(Pr.prototype), ia.prototype = Object.create(Pr.prototype), na.prototype =
		Object.create(Pr.prototype), Object.assign(na.prototype, {
			initFromArray: function() {
				console.error("THREE.Spline: .initFromArray() has been removed.")
			},
			getControlPointsArray: function() {
				console.error("THREE.Spline: .getControlPointsArray() has been removed.")
			},
			reparametrizeByArcLength: function() {
				console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
			}
		}), xr.prototype.setColors = function() {
			console.error(
				"THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
		}, mr.prototype.update = function() {
			console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
		}, Object.assign(Y.prototype, {
			center: function(t) {
				return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this
					.getCenter(t)
			},
			empty: function() {
				return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
			},
			isIntersectionBox: function(t) {
				return console.warn(
						"THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this
					.intersectsBox(t)
			},
			size: function(t) {
				return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
			}
		}), Object.assign(et.prototype, {
			center: function(t) {
				return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this
					.getCenter(t)
			},
			empty: function() {
				return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
			},
			isIntersectionBox: function(t) {
				return console.warn(
						"THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this
					.intersectsBox(t)
			},
			isIntersectionSphere: function(t) {
				return console.warn(
						"THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
					this.intersectsSphere(t)
			},
			size: function(t) {
				return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
			}
		}), Dt.prototype.center = function(t) {
			return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
		}, Object.assign(Ps, {
			random16: function() {
				return console.warn(
						"THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math
					.random()
			},
			nearestPowerOfTwo: function(t) {
				return console.warn(
						"THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ps
					.floorPowerOfTwo(t)
			},
			nextPowerOfTwo: function(t) {
				return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),
					Ps.ceilPowerOfTwo(t)
			}
		}), Object.assign(o.prototype, {
			flattenToArrayOffset: function(t, e) {
				return console.warn(
					"THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
				), this.toArray(t, e)
			},
			multiplyVector3: function(t) {
				return console.warn(
					"THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
				), t.applyMatrix3(this)
			},
			multiplyVector3Array: function() {
				console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
			},
			applyToBuffer: function(t) {
				return console.warn(
					"THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."
				), this.applyToBufferAttribute(t)
			},
			applyToVector3Array: function() {
				console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
			}
		}), Object.assign(n.prototype, {
			extractPosition: function(t) {
				return console.warn(
						"THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this
					.copyPosition(t)
			},
			flattenToArrayOffset: function(t, e) {
				return console.warn(
					"THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
				), this.toArray(t, e)
			},
			getPosition: function() {
				var t;
				return function() {
					return void 0 === t && (t = new a), console.warn(
						"THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
					), t.setFromMatrixColumn(this, 3)
				}
			}(),
			setRotationFromQuaternion: function(t) {
				return console.warn(
					"THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
				), this.makeRotationFromQuaternion(t)
			},
			multiplyToArray: function() {
				console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
			},
			multiplyVector3: function(t) {
				return console.warn(
					"THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
				), t.applyMatrix4(this)
			},
			multiplyVector4: function(t) {
				return console.warn(
					"THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
				), t.applyMatrix4(this)
			},
			multiplyVector3Array: function() {
				console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
			},
			rotateAxis: function(t) {
				console.warn(
					"THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
				), t.transformDirection(this)
			},
			crossVector: function(t) {
				return console.warn(
					"THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
				), t.applyMatrix4(this)
			},
			translate: function() {
				console.error("THREE.Matrix4: .translate() has been removed.")
			},
			rotateX: function() {
				console.error("THREE.Matrix4: .rotateX() has been removed.")
			},
			rotateY: function() {
				console.error("THREE.Matrix4: .rotateY() has been removed.")
			},
			rotateZ: function() {
				console.error("THREE.Matrix4: .rotateZ() has been removed.")
			},
			rotateByAxis: function() {
				console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
			},
			applyToBuffer: function(t) {
				return console.warn(
					"THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."
				), this.applyToBufferAttribute(t)
			},
			applyToVector3Array: function() {
				console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
			},
			makeFrustum: function(t, e, i, n, r, a) {
				return console.warn(
					"THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
				), this.makePerspective(t, e, n, i, r, a)
			}
		}), nt.prototype.isIntersectionLine = function(t) {
			return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this
				.intersectsLine(t)
		}, r.prototype.multiplyVector3 = function(t) {
			return console.warn(
				"THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
			), t.applyQuaternion(this)
		}, Object.assign(Ut.prototype, {
			isIntersectionBox: function(t) {
				return console.warn(
						"THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this
					.intersectsBox(t)
			},
			isIntersectionPlane: function(t) {
				return console.warn(
						"THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this
					.intersectsPlane(t)
			},
			isIntersectionSphere: function(t) {
				return console.warn(
						"THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this
					.intersectsSphere(t)
			}
		}), Object.assign(Nn.prototype, {
			extractAllPoints: function(t) {
				return console.warn(
						"THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),
					this.extractPoints(t)
			},
			extrude: function(t) {
				return console.warn(
					"THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new si(
					this, t)
			},
			makeGeometry: function(t) {
				return console.warn(
						"THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
					new vi(this, t)
			}
		}), Object.assign(i.prototype, {
			fromAttribute: function(t, e, i) {
				return console.warn(
						"THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this
					.fromBufferAttribute(t, e, i)
			},
			distanceToManhattan: function(t) {
				return console.warn(
					"THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
				), this.manhattanDistanceTo(t)
			},
			lengthManhattan: function() {
				return console.warn(
						"THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this
					.manhattanLength()
			}
		}), Object.assign(a.prototype, {
			setEulerFromRotationMatrix: function() {
				console.error(
					"THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
				)
			},
			setEulerFromQuaternion: function() {
				console.error(
					"THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
				)
			},
			getPositionFromMatrix: function(t) {
				return console.warn(
					"THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
				), this.setFromMatrixPosition(t)
			},
			getScaleFromMatrix: function(t) {
				return console.warn(
						"THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
					this.setFromMatrixScale(t)
			},
			getColumnFromMatrix: function(t, e) {
				return console.warn(
					"THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
				), this.setFromMatrixColumn(e, t)
			},
			applyProjection: function(t) {
				return console.warn(
					"THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
				), this.applyMatrix4(t)
			},
			fromAttribute: function(t, e, i) {
				return console.warn(
						"THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this
					.fromBufferAttribute(t, e, i)
			},
			distanceToManhattan: function(t) {
				return console.warn(
					"THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
				), this.manhattanDistanceTo(t)
			},
			lengthManhattan: function() {
				return console.warn(
						"THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this
					.manhattanLength()
			}
		}), Object.assign(c.prototype, {
			fromAttribute: function(t, e, i) {
				return console.warn(
						"THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this
					.fromBufferAttribute(t, e, i)
			},
			lengthManhattan: function() {
				return console.warn(
						"THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this
					.manhattanLength()
			}
		}), dt.prototype.computeTangents = function() {
			console.warn("THREE.Geometry: .computeTangents() has been removed.")
		}, Object.assign(ht.prototype, {
			getChildByName: function(t) {
				return console.warn(
						"THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this
					.getObjectByName(t)
			},
			renderDepth: function() {
				console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
			},
			translate: function(t, e) {
				return console.warn(
					"THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
				), this.translateOnAxis(e, t)
			}
		}), Object.defineProperties(ht.prototype, {
			eulerOrder: {
				get: function() {
					return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this
						.rotation.order
				},
				set: function(t) {
					console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation
						.order = t
				}
			},
			useQuaternion: {
				get: function() {
					console.warn(
						"THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
					)
				},
				set: function() {
					console.warn(
						"THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
					)
				}
			}
		}), Object.defineProperties(Re.prototype, {
			objects: {
				get: function() {
					return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
				}
			}
		}), Object.defineProperty(Le.prototype, "useVertexTexture", {
			get: function() {
				console.warn("THREE.Skeleton: useVertexTexture has been removed.")
			},
			set: function() {
				console.warn("THREE.Skeleton: useVertexTexture has been removed.")
			}
		}), Object.defineProperty(Rn.prototype, "__arcLengthDivisions", {
			get: function() {
				return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this
					.arcLengthDivisions
			},
			set: function(t) {
				console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this
					.arcLengthDivisions = t
			}
		}), me.prototype.setLens = function(t, e) {
			console.warn(
				"THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
			), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
		}, Object.defineProperties(Vi.prototype, {
			onlyShadow: {
				set: function() {
					console.warn("THREE.Light: .onlyShadow has been removed.")
				}
			},
			shadowCameraFov: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow
						.camera.fov = t
				}
			},
			shadowCameraLeft: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow
						.camera.left = t
				}
			},
			shadowCameraRight: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this
						.shadow.camera.right = t
				}
			},
			shadowCameraTop: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow
						.camera.top = t
				}
			},
			shadowCameraBottom: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this
						.shadow.camera.bottom = t
				}
			},
			shadowCameraNear: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow
						.camera.near = t
				}
			},
			shadowCameraFar: {
				set: function(t) {
					console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow
						.camera.far = t
				}
			},
			shadowCameraVisible: {
				set: function() {
					console.warn(
						"THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
					)
				}
			},
			shadowBias: {
				set: function(t) {
					console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
				}
			},
			shadowDarkness: {
				set: function() {
					console.warn("THREE.Light: .shadowDarkness has been removed.")
				}
			},
			shadowMapWidth: {
				set: function(t) {
					console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow
						.mapSize.width = t
				}
			},
			shadowMapHeight: {
				set: function(t) {
					console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this
						.shadow.mapSize.height = t
				}
			}
		}), Object.defineProperties(ft.prototype, {
			length: {
				get: function() {
					return console.warn(
							"THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this
						.array.length
				}
			}
		}), Object.assign(St.prototype, {
			addIndex: function(t) {
				console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this
					.setIndex(t)
			},
			addDrawCall: function(t, e, i) {
				void 0 !== i && console.warn(
						"THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console
					.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
			},
			clearDrawCalls: function() {
				console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this
					.clearGroups()
			},
			computeTangents: function() {
				console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
			},
			computeOffsets: function() {
				console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
			}
		}), Object.defineProperties(St.prototype, {
			drawcalls: {
				get: function() {
					return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
						this.groups
				}
			},
			offsets: {
				get: function() {
					return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this
						.groups
				}
			}
		}), Object.defineProperties($n.prototype, {
			dynamic: {
				set: function() {
					console.warn(
						"THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead."
					)
				}
			},
			onUpdate: {
				value: function() {
					return console.warn(
						"THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
					), this
				}
			}
		}), Object.defineProperties(K.prototype, {
			wrapAround: {
				get: function() {
					console.warn("THREE.Material: .wrapAround has been removed.")
				},
				set: function() {
					console.warn("THREE.Material: .wrapAround has been removed.")
				}
			},
			wrapRGB: {
				get: function() {
					return console.warn("THREE.Material: .wrapRGB has been removed."), new q
				}
			},
			shading: {
				get: function() {
					console.error("THREE." + this.type +
						": .shading has been removed. Use the boolean .flatShading instead.")
				},
				set: function(t) {
					console.warn("THREE." + this.type +
							": .shading has been removed. Use the boolean .flatShading instead."), this
						.flatShading = t === Sa
				}
			}
		}), Object.defineProperties(Pi.prototype, {
			metal: {
				get: function() {
					return console.warn(
						"THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."
					), !1
				},
				set: function() {
					console.warn(
						"THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead"
					)
				}
			}
		}), Object.defineProperties(It.prototype, {
			derivatives: {
				get: function() {
					return console.warn(
						"THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
					), this.extensions.derivatives
				},
				set: function(t) {
					console.warn(
						"THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
					), this.extensions.derivatives = t
				}
			}
		}), Object.assign(_e.prototype, {
			getCurrentRenderTarget: function() {
				return console.warn(
						"THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this
					.getRenderTarget()
			},
			getMaxAnisotropy: function() {
				return console.warn(
					"THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
				), this.capabilities.getMaxAnisotropy()
			},
			getPrecision: function() {
				return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),
					this.capabilities.precision
			},
			resetGLState: function() {
				return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this
					.state.reset()
			},
			supportsFloatTextures: function() {
				return console.warn(
					"THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
				), this.extensions.get("OES_texture_float")
			},
			supportsHalfFloatTextures: function() {
				return console.warn(
					"THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
				), this.extensions.get("OES_texture_half_float")
			},
			supportsStandardDerivatives: function() {
				return console.warn(
					"THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
				), this.extensions.get("OES_standard_derivatives")
			},
			supportsCompressedTextureS3TC: function() {
				return console.warn(
					"THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
				), this.extensions.get("WEBGL_compressed_texture_s3tc")
			},
			supportsCompressedTexturePVRTC: function() {
				return console.warn(
					"THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
				), this.extensions.get("WEBGL_compressed_texture_pvrtc")
			},
			supportsBlendMinMax: function() {
				return console.warn(
					"THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
				), this.extensions.get("EXT_blend_minmax")
			},
			supportsVertexTextures: function() {
				return console.warn(
					"THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
				), this.capabilities.vertexTextures
			},
			supportsInstancedArrays: function() {
				return console.warn(
					"THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
				), this.extensions.get("ANGLE_instanced_arrays")
			},
			enableScissorTest: function(t) {
				console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this
					.setScissorTest(t)
			},
			initMaterial: function() {
				console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
			},
			addPrePlugin: function() {
				console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
			},
			addPostPlugin: function() {
				console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
			},
			updateShadowMap: function() {
				console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
			}
		}), Object.defineProperties(_e.prototype, {
			shadowMapEnabled: {
				get: function() {
					return this.shadowMap.enabled
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this
						.shadowMap.enabled = t
				}
			},
			shadowMapType: {
				get: function() {
					return this.shadowMap.type
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this
						.shadowMap.type = t
				}
			},
			shadowMapCullFace: {
				get: function() {
					return this.shadowMap.cullFace
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
						this.shadowMap.cullFace = t
				}
			}
		}), Object.defineProperties(at.prototype, {
			cullFace: {
				get: function() {
					return this.renderReverseSided ? ga : ma
				},
				set: function(t) {
					var e = t !== ma;
					console.warn(
						"WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " +
						e + "."), this.renderReverseSided = e
				}
			}
		}), Object.defineProperties(h.prototype, {
			wrapS: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this
						.texture.wrapS
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture
						.wrapS = t
				}
			},
			wrapT: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this
						.texture.wrapT
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture
						.wrapT = t
				}
			},
			magFilter: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
						this.texture.magFilter
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this
						.texture.magFilter = t
				}
			},
			minFilter: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
						this.texture.minFilter
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this
						.texture.minFilter = t
				}
			},
			anisotropy: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
						this.texture.anisotropy
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this
						.texture.anisotropy = t
				}
			},
			offset: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this
						.texture.offset
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture
						.offset = t
				}
			},
			repeat: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this
						.texture.repeat
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture
						.repeat = t
				}
			},
			format: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this
						.texture.format
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture
						.format = t
				}
			},
			type: {
				get: function() {
					return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this
						.texture.type
				},
				set: function(t) {
					console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture
						.type = t
				}
			},
			generateMipmaps: {
				get: function() {
					return console.warn(
							"THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
						this.texture.generateMipmaps
				},
				set: function(t) {
					console.warn(
							"THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
						this.texture.generateMipmaps = t
				}
			}
		}), jn.prototype.load = function(t) {
			console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
			var e = this,
				i = new Gn;
			return i.load(t, function(t) {
				e.setBuffer(t)
			}), this
		}, Xn.prototype.getData = function() {
			return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this
				.getFrequencyData()
		}, Vn.prototype.updateCubeMap = function(t, e) {
			return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
		};
	var bl = {
			merge: function(t, e, i) {
				console.warn(
					"THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."
				);
				var n;
				e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), n = e.matrix, e = e.geometry), t.merge(e,
					n, i)
			},
			center: function(t) {
				return console.warn(
					"THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."
				), t.center()
			}
		},
		_l = {
			crossOrigin: void 0,
			loadTexture: function(t, e, i, n) {
				console.warn(
					"THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
				var r = new Hi;
				r.setCrossOrigin(this.crossOrigin);
				var a = r.load(t, i, void 0, n);
				return e && (a.mapping = e), a
			},
			loadTextureCube: function(t, e, i, n) {
				console.warn(
					"THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
				);
				var r = new Gi;
				r.setCrossOrigin(this.crossOrigin);
				var a = r.load(t, i, void 0, n);
				return e && (a.mapping = e), a
			},
			loadCompressedTexture: function() {
				console.error(
					"THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
			},
			loadCompressedTextureCube: function() {
				console.error(
					"THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
				)
			}
		};
	t.WebGLRenderTargetCube = l, t.WebGLRenderTarget = h, t.WebGLRenderer = _e, t.ShaderLib = jh, t.UniformsLib =
		Gs, t.UniformsUtils = Hs, t.ShaderChunk = kh, t.FogExp2 = we, t.Fog = Me, t.Scene = Ee, t.LensFlare = Te, t
		.Sprite = Ae, t.LOD = Re, t.SkinnedMesh = Ce, t.Skeleton = Le, t.Bone = Pe, t.Mesh = Nt, t.LineSegments =
		De, t.LineLoop = Oe, t.Line = Ue, t.Points = Fe, t.Group = Be, t.VideoTexture = ze, t.DataTexture = u, t
		.CompressedTexture = Ge, t.CubeTexture = p, t.CanvasTexture = J, t.DepthTexture = He, t.Texture = s, t
		.CompressedTextureLoader = Fi, t.DataTextureLoader = Bi, t.CubeTextureLoader = Gi, t.TextureLoader = Hi, t
		.ObjectLoader = vn, t.MaterialLoader = dn, t.BufferGeometryLoader = fn, t.DefaultLoadingManager = tl, t
		.LoadingManager = Oi, t.JSONLoader = gn, t.ImageLoader = zi, t.FontLoader = zn, t.FileLoader = Ni, t
		.Loader = mn, t.Cache = $h, t.AudioLoader = Gn, t.SpotLightShadow = Wi, t.SpotLight = Xi, t.PointLight = qi,
		t.RectAreaLight = Qi, t.HemisphereLight = ki, t.DirectionalLightShadow = Yi, t.DirectionalLight = Zi, t
		.AmbientLight = Ji, t.LightShadow = ji, t.Light = Vi, t.StereoCamera = Hn, t.PerspectiveCamera = me, t
		.OrthographicCamera = ut, t.CubeCamera = Vn, t.ArrayCamera = ge, t.Camera = lt, t.AudioListener = kn, t
		.PositionalAudio = Wn, t.AudioContext = ll, t.AudioAnalyser = Xn, t.Audio = jn, t.VectorKeyframeTrack = rn,
		t.StringKeyframeTrack = cn, t.QuaternionKeyframeTrack = on, t.NumberKeyframeTrack = sn, t
		.ColorKeyframeTrack = ln, t.BooleanKeyframeTrack = hn, t.PropertyMixer = qn, t.PropertyBinding = Zn, t
		.KeyframeTrack = un, t.AnimationUtils = il, t.AnimationObjectGroup = Jn, t.AnimationMixer = Kn, t
		.AnimationClip = pn, t.Uniform = $n, t.InstancedBufferGeometry = tr, t.BufferGeometry = St, t.Geometry = dt,
		t.InterleavedBufferAttribute = er, t.InstancedInterleavedBuffer = nr, t.InterleavedBuffer = ir, t
		.InstancedBufferAttribute = rr, t.Face3 = pt, t.Object3D = ht, t.Raycaster = ar, t.Layers = ct, t
		.EventDispatcher = e, t.Clock = cr, t.QuaternionLinearInterpolant = an, t.LinearInterpolant = tn, t
		.DiscreteInterpolant = en, t.CubicInterpolant = $i, t.Interpolant = Ki, t.Triangle = Ot, t.Math = Ps, t
		.Spherical = hr, t.Cylindrical = lr, t.Plane = nt, t.Frustum = rt, t.Sphere = it, t.Ray = Ut, t.Matrix4 = n,
		t.Matrix3 = o, t.Box3 = et, t.Box2 = Y, t.Line3 = Dt, t.Euler = st, t.Vector4 = c, t.Vector3 = a, t
		.Vector2 = i, t.Quaternion = r, t.Color = q, t.ImmediateRenderObject = ur, t.VertexNormalsHelper = pr, t
		.SpotLightHelper = dr, t.SkeletonHelper = mr, t.PointLightHelper = gr, t.RectAreaLightHelper = vr, t
		.HemisphereLightHelper = yr, t.GridHelper = xr, t.PolarGridHelper = br, t.FaceNormalsHelper = _r, t
		.DirectionalLightHelper = wr, t.CameraHelper = Mr, t.BoxHelper = Er, t.Box3Helper = Tr, t.PlaneHelper = Sr,
		t.ArrowHelper = Ar, t.AxesHelper = Rr, t.CatmullRomCurve3 = Pr, t.CubicBezierCurve3 = Cr, t
		.QuadraticBezierCurve3 = Ir, t.LineCurve3 = Ur, t.ArcCurve = Dr, t.EllipseCurve = Cn, t.SplineCurve = In, t
		.CubicBezierCurve = Un, t.QuadraticBezierCurve = Dn, t.LineCurve = Ln, t.Shape = Nn, t.Path = On, t
		.ShapePath = Fn, t.Font = Bn, t.CurvePath = Pn, t.Curve = Rn, t.ShapeUtils = Jh, t.SceneUtils = vl, t
		.WebGLUtils = be, t.WireframeGeometry = Ve, t.ParametricGeometry = ke, t.ParametricBufferGeometry = je, t
		.TetrahedronGeometry = qe, t.TetrahedronBufferGeometry = Ye, t.OctahedronGeometry = Ze, t
		.OctahedronBufferGeometry = Je, t.IcosahedronGeometry = Qe, t.IcosahedronBufferGeometry = Ke, t
		.DodecahedronGeometry = $e, t.DodecahedronBufferGeometry = ti, t.PolyhedronGeometry = We, t
		.PolyhedronBufferGeometry = Xe, t.TubeGeometry = ei, t.TubeBufferGeometry = ii, t.TorusKnotGeometry = ni, t
		.TorusKnotBufferGeometry = ri, t.TorusGeometry = ai, t.TorusBufferGeometry = oi, t.TextGeometry = hi, t
		.TextBufferGeometry = li, t.SphereGeometry = ui, t.SphereBufferGeometry = pi, t.RingGeometry = di, t
		.RingBufferGeometry = fi, t.PlaneGeometry = Lt, t.PlaneBufferGeometry = Pt, t.LatheGeometry = mi, t
		.LatheBufferGeometry = gi, t.ShapeGeometry = vi, t.ShapeBufferGeometry = yi, t.ExtrudeGeometry = si, t
		.ExtrudeBufferGeometry = ci, t.EdgesGeometry = xi, t.ConeGeometry = wi, t.ConeBufferGeometry = Mi, t
		.CylinderGeometry = bi, t.CylinderBufferGeometry = _i, t.CircleGeometry = Ei, t.CircleBufferGeometry = Ti, t
		.BoxGeometry = At, t.BoxBufferGeometry = Rt, t.ShadowMaterial = Si, t.SpriteMaterial = Se, t
		.RawShaderMaterial = Ai, t.ShaderMaterial = It, t.PointsMaterial = Ne, t.MeshPhysicalMaterial = Li, t
		.MeshStandardMaterial = Ri, t.MeshPhongMaterial = Pi, t.MeshToonMaterial = Ci, t.MeshNormalMaterial = Ii, t
		.MeshLambertMaterial = Ui, t.MeshDepthMaterial = $, t.MeshDistanceMaterial = tt, t.MeshBasicMaterial = Ct, t
		.LineDashedMaterial = Di, t.LineBasicMaterial = Ie, t.Material = K, t.Float64BufferAttribute = Mt, t
		.Float32BufferAttribute = wt, t.Uint32BufferAttribute = _t, t.Int32BufferAttribute = bt, t
		.Uint16BufferAttribute = xt, t.Int16BufferAttribute = yt, t.Uint8ClampedBufferAttribute = vt, t
		.Uint8BufferAttribute = gt, t.Int8BufferAttribute = mt, t.BufferAttribute = ft, t.REVISION = pa, t.MOUSE =
		da, t.CullFaceNone = fa, t.CullFaceBack = ma, t.CullFaceFront = ga, t.CullFaceFrontBack = va, t
		.FrontFaceDirectionCW = ya, t.FrontFaceDirectionCCW = xa, t.BasicShadowMap = ba, t.PCFShadowMap = _a, t
		.PCFSoftShadowMap = wa, t.FrontSide = Ma, t.BackSide = Ea, t.DoubleSide = Ta, t.FlatShading = Sa, t
		.SmoothShading = Aa, t.NoColors = Ra, t.FaceColors = La, t.VertexColors = Pa, t.NoBlending = Ca, t
		.NormalBlending = Ia, t.AdditiveBlending = Ua, t.SubtractiveBlending = Da, t.MultiplyBlending = Oa, t
		.CustomBlending = Na, t.AddEquation = Fa, t.SubtractEquation = Ba, t.ReverseSubtractEquation = za, t
		.MinEquation = Ga, t.MaxEquation = Ha, t.ZeroFactor = Va, t.OneFactor = ka, t.SrcColorFactor = ja, t
		.OneMinusSrcColorFactor = Wa, t.SrcAlphaFactor = Xa, t.OneMinusSrcAlphaFactor = qa, t.DstAlphaFactor = Ya, t
		.OneMinusDstAlphaFactor = Za, t.DstColorFactor = Ja, t.OneMinusDstColorFactor = Qa, t
		.SrcAlphaSaturateFactor = Ka, t.NeverDepth = $a, t.AlwaysDepth = to, t.LessDepth = eo, t.LessEqualDepth =
		io, t.EqualDepth = no, t.GreaterEqualDepth = ro, t.GreaterDepth = ao, t.NotEqualDepth = oo, t
		.MultiplyOperation = so, t.MixOperation = co, t.AddOperation = ho, t.NoToneMapping = lo, t
		.LinearToneMapping = uo, t.ReinhardToneMapping = po, t.Uncharted2ToneMapping = fo, t.CineonToneMapping = mo,
		t.UVMapping = go, t.CubeReflectionMapping = vo, t.CubeRefractionMapping = yo, t
		.EquirectangularReflectionMapping = xo, t.EquirectangularRefractionMapping = bo, t
		.SphericalReflectionMapping = _o, t.CubeUVReflectionMapping = wo, t.CubeUVRefractionMapping = Mo, t
		.RepeatWrapping = Eo, t.ClampToEdgeWrapping = To, t.MirroredRepeatWrapping = So, t.NearestFilter = Ao, t
		.NearestMipMapNearestFilter = Ro, t.NearestMipMapLinearFilter = Lo, t.LinearFilter = Po, t
		.LinearMipMapNearestFilter = Co, t.LinearMipMapLinearFilter = Io, t.UnsignedByteType = Uo, t.ByteType = Do,
		t.ShortType = Oo, t.UnsignedShortType = No, t.IntType = Fo, t.UnsignedIntType = Bo, t.FloatType = zo, t
		.HalfFloatType = Go, t.UnsignedShort4444Type = Ho, t.UnsignedShort5551Type = Vo, t.UnsignedShort565Type =
		ko, t.UnsignedInt248Type = jo, t.AlphaFormat = Wo, t.RGBFormat = Xo, t.RGBAFormat = qo, t.LuminanceFormat =
		Yo, t.LuminanceAlphaFormat = Zo, t.RGBEFormat = Jo, t.DepthFormat = Qo, t.DepthStencilFormat = Ko, t
		.RGB_S3TC_DXT1_Format = $o, t.RGBA_S3TC_DXT1_Format = ts, t.RGBA_S3TC_DXT3_Format = es, t
		.RGBA_S3TC_DXT5_Format = is, t.RGB_PVRTC_4BPPV1_Format = ns, t.RGB_PVRTC_2BPPV1_Format = rs, t
		.RGBA_PVRTC_4BPPV1_Format = as, t.RGBA_PVRTC_2BPPV1_Format = os, t.RGB_ETC1_Format = ss, t.LoopOnce = cs, t
		.LoopRepeat = hs, t.LoopPingPong = ls, t.InterpolateDiscrete = us, t.InterpolateLinear = ps, t
		.InterpolateSmooth = ds, t.ZeroCurvatureEnding = fs, t.ZeroSlopeEnding = ms, t.WrapAroundEnding = gs, t
		.TrianglesDrawMode = vs, t.TriangleStripDrawMode = ys, t.TriangleFanDrawMode = xs, t.LinearEncoding = bs, t
		.sRGBEncoding = _s, t.GammaEncoding = ws, t.RGBEEncoding = Ms, t.LogLuvEncoding = Es, t.RGBM7Encoding = Ts,
		t.RGBM16Encoding = Ss, t.RGBDEncoding = As, t.BasicDepthPacking = Rs, t.RGBADepthPacking = Ls, t
		.CubeGeometry = At, t.Face4 = Or, t.LineStrip = yl, t.LinePieces = xl, t.MeshFaceMaterial = Nr, t
		.MultiMaterial = Fr, t.PointCloud = Br, t.Particle = zr, t.ParticleSystem = Gr, t.PointCloudMaterial = Hr, t
		.ParticleBasicMaterial = Vr, t.ParticleSystemMaterial = kr, t.Vertex = jr, t.DynamicBufferAttribute = Wr, t
		.Int8Attribute = Xr, t.Uint8Attribute = qr, t.Uint8ClampedAttribute = Yr, t.Int16Attribute = Zr, t
		.Uint16Attribute = Jr, t.Int32Attribute = Qr, t.Uint32Attribute = Kr, t.Float32Attribute = $r, t
		.Float64Attribute = ta, t.ClosedSplineCurve3 = ea, t.SplineCurve3 = ia, t.Spline = na, t.AxisHelper = ra, t
		.BoundingBoxHelper = aa, t.EdgesHelper = oa, t.WireframeHelper = sa, t.XHRLoader = ca, t
		.BinaryTextureLoader = ha, t.GeometryUtils = bl, t.ImageUtils = _l, t.Projector = la, t.CanvasRenderer = ua,
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
});