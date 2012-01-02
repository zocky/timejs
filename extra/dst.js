Time.extra.dst = {
  reset: function() {
    this.offsetJanuary = Time.now.month(1).day(1).offset();
    this.offsetJuly = Time.now.month(7).day(1).offset();
    this.offsetMax = Math.max(Time.offsetJanuary,Time.offsetJuly);
    this.offsetDiff = Math.abs(Time.offsetJanuary-Time.offsetJuly);
  }
};
Time.extra.dst.reset();

Time.prototype.dst = function() {
  return Time.extra.dst.offsetDiff && this.offset() == Time.extra.dst.offsetMax;
}

Time.formats.I = function() {
  return Number(this.dst());
}

