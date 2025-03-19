# def make_tags(tag, word):
#     return f"<{tag}>{word}</{tag}>"

def make_tags(tag, word):
  return "<{}>{}</{}>".format(tag,word,tag)