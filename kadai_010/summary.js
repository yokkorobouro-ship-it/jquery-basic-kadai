// 1.「文字色変化」ボタンを押したとき
$('#change-color').on('click', function() {
  // 文字色を好きな色（例：赤）に変える
  $('#target').css('color', 'red');
});

// 2.「文字内容変化」ボタンを押したとき
$('#change-text').on('click', function() {
  // 文字の中身を好きな言葉に変える
  $('#target').text('さようなら！');
});

// 3.「フェードアウト」ボタンを押したとき
$('#fade-out').on('click', function() {
  // 文字をじわじわ消す
  $('#target').fadeOut();
});

// 4.「フェードイン」ボタンを押したとき
$('#fade-in').on('click', function() {
  // 消えている文字をじわじわ出す
  $('#target').fadeIn();
});