document.addEventListener('DOMContentLoaded', function () {
  /**
   * 要素
   */
  const regionJpElement = document.getElementById('region-jp');
  const versionSkyElement = document.getElementById('version-sky');
  const versionTimeElement = document.getElementById('version-time');
  const versionDarknessElement = document.getElementById('version-darkness');
  const teamNameElement = document.getElementById('team-name');
  const dungeonElement = document.getElementById('dungeon');
  const floorElement = document.getElementById('floor');
  const floorMaxElement = document.getElementById('floor-max');
  const floorRandomElement = document.getElementById('floor-random');
  const generateBtnElement = document.getElementById('generate-btn');
  const passwordElement = document.getElementById('password');

  const outputRegionElement = document.getElementById('output-region');
  const outputVersionElement = document.getElementById('output-version');
  const outputDungeonElement = document.getElementById('output-dungeon');
  const outputFloorElement = document.getElementById('output-floor');
  const outputDungeonSeedElement = document.getElementById('output-dungeon-seed');
  const outputTeamNameElement = document.getElementById('output-team-name');
  const outputNativeIdElement = document.getElementById('output-native-id');
  const outputSOSIdElement = document.getElementById('output-sos-id');

  /**
   * イベント
   */
  // ダンジョン変更時にフロア変更
  dungeonElement.addEventListener('change', reloadDungeonFloor);

  // フロア最大ボタン
  floorMaxElement.addEventListener('click', setMaxFloorForDungeon);

  // フロアランダムボタン
  floorRandomElement.addEventListener('click', setRandomFloorForDungeon);

  // チーム名を入力可能な全角にする
  teamNameElement.addEventListener('input', setFullCharForTeamName);

  // パスワード生成
  generateBtnElement.addEventListener('click', generatePassword);

  /**
   * 初回処理
   */
  initChoices();
  reloadDungeonFloor();

  function initChoices() {
    new Choices(dungeonElement, choicesOptions);
  }

  /**
   * ダンジョンフロアをロード
   */
  function reloadDungeonFloor() {
    const selectedDungeon = dungeonElement.options[dungeonElement.selectedIndex].dataset;
    const maxFloorCount = parseInt(selectedDungeon.maxfloor) + 1;

    while (floorElement.children.length > maxFloorCount) {
      floorElement.removeChild(floorElement.lastChild);
    }

    for (let i = 0; i < maxFloorCount; i++) {
      let str = selectedDungeon.stairs === 'true' ? `${i}F` : `B${i}F`;
      const disabled = selectedDungeon.fixed && selectedDungeon.fixed == i;
      if (disabled) str += ' (固定フロア)';

      if (floorElement.children[i]) {
        floorElement.children[i].textContent = str;
        floorElement.children[i].disabled = disabled;
      } else {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = str;
        option.disabled = disabled;
        if (i === 1) option.selected = true;
        floorElement.appendChild(option);
      }
    }

    if (maxFloorCount > 1) floorElement.value = 1;
  }

  /**
   * 現在ダンジョンの最大フロアをセット (固定フロア除外)
   */
  function setMaxFloorForDungeon() {
    const options = floorElement.children;
    for (let i = options.length - 1; i >= 0; i--) {
      if (!options[i].disabled) {
        floorElement.value = i;
        break;
      }
    }
  }

  /**
   * 現在ダンジョンのフロアをランダムにセット (固定フロア除外)
   */
  function setRandomFloorForDungeon() {
    const options = floorElement.children;
    while (true) {
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
      if (!options[randomIndex].disabled) {
        floorElement.value = options[randomIndex].value;
        break;
      }
    }
  }

  /**
   * チーム名を全角に変換してセット
   */
  function setFullCharForTeamName() {
    let filtered = '';
    const value = toFullWidth(teamNameElement.value);
    for (const char of value) {
      if (char_str.includes(char)) {
        filtered += char;
      }
    }
    teamNameElement.value = filtered;
  }

  /**
   * パスワード生成
   */
  function generatePassword() {
    const useRegionJp = regionJpElement.checked;
    const maxlength = useRegionJp ? 5 : 10;
    let randomTeamName = '';

    // チーム名のランダム化
    if (teamNameElement.value.length === 0) {
      for (let i = 0; i < maxlength; i++) {
        let rand = Math.floor(Math.random() * char_str.length);
        if (i === 0) rand = Math.max(rand, 1);
        if (rand > 0) {
          randomTeamName += char_str[rand];
        } else {
          break;
        }
      }
    }

    let version = 0;
    if (versionTimeElement.checked) version = versionTimeElement.value;
    if (versionDarknessElement.checked) version = versionDarknessElement.value;
    if (versionSkyElement.checked) version = Math.floor(Math.random() * 2) + 2;

    const rescue = new Rescue();
    rescue.RescueType = 1;
    rescue.Dungeon = dungeonElement.value;
    rescue.Floor = floorElement.value;
    rescue.DungeonSeed = Math.floor(Math.random() * 0x1000000);
    rescue.SOSTeamId = Math.floor(Math.random() * 0x100000000);
    rescue.SOSCheckKey = Math.floor(Math.random() * 0x100000000);
    rescue.Region = useRegionJp ? 0 : 8;
    rescue.TeamName = randomTeamName || teamNameElement.value;
    rescue.Version = version;
    rescue.Encode();

    const selectedDungeon = dungeonElement.options[dungeonElement.selectedIndex].dataset;

    passwordElement.textContent = ConvertToMultiFormat(rescue.Password, 6, 6, 6);
    outputRegionElement.textContent = useRegionJp ? '日本' : '北米/欧州';
    outputVersionElement.textContent = version == 0 ? '時' : version == 1 ? '闇' : version == 2 ? '空 (1)' : '空 (2)';
    outputDungeonElement.textContent = selectedDungeon.search;
    outputFloorElement.textContent = selectedDungeon.stairs ? `${rescue.Floor}F` : `B${rescue.Floor}F`;
    outputDungeonSeedElement.textContent = rescue.DungeonSeed.toString(16).toUpperCase().padStart(6, '0');
    outputTeamNameElement.textContent = rescue.TeamName;
    outputNativeIdElement.textContent = rescue.SOSTeamId.toString(16).toUpperCase().padStart(8, '0');
    outputSOSIdElement.textContent = rescue.SOSCheckKey.toString(16).toUpperCase().padStart(8, '0');
  }
});
